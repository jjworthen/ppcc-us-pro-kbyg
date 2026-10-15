import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import {
  collectSourceUrls,
  compactText,
  diffSnapshots,
  extractGuideSnapshot,
  normalizePath,
  readText,
  sha256
} from "./guide-utils.mjs";

const args = new Set(process.argv.slice(2));
const online = args.has("--online");
const updateBaseline = args.has("--update-baseline");
const now = new Date();
const stamp = now.toISOString().replace(/[:.]/g, "-");

const baselinePath = normalizePath("automation/baseline/latest-snapshot.json");
const reportsDir = normalizePath("automation/reports");
const latestReportPath = path.join(reportsDir, "schedule-watch-latest.md");
const stampedReportPath = path.join(reportsDir, `schedule-watch-${stamp}.md`);

await mkdir(reportsDir, { recursive: true });
await mkdir(normalizePath("automation/baseline"), { recursive: true });

const html = await readText("index.html");
const guide = extractGuideSnapshot(html);
const sources = online ? await fetchSources(collectSourceUrls(guide)) : collectOfflineSources(collectSourceUrls(guide));
const teamsDigest = await readOptionalText("automation/input/teams-digest.md");

const current = {
  generatedAt: now.toISOString(),
  mode: online ? "online" : "offline",
  guide,
  sources,
  teamsDigest: teamsDigest
    ? {
        key: "teams:digest",
        status: "present",
        contentHash: sha256(teamsDigest),
        excerpt: compactText(teamsDigest).slice(0, 500)
      }
    : {
        key: "teams:digest",
        status: "not-provided",
        contentHash: "",
        excerpt: ""
      }
};

const previous = await readJsonIfExists(baselinePath);
const changes = previous ? diffSnapshots(previous, current) : [];
const report = renderReport({ current, previous, changes, updateBaseline });

await writeFile(latestReportPath, report, "utf8");
await writeFile(stampedReportPath, report, "utf8");

if (updateBaseline || !previous) {
  await writeFile(baselinePath, `${JSON.stringify(current, null, 2)}\n`, "utf8");
}

console.log(report);

async function fetchSources(sourceRecords) {
  const results = [];
  for (const source of sourceRecords) {
    const startedAt = Date.now();
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 15000);
      const response = await fetch(source.url, {
        signal: controller.signal,
        headers: {
          "user-agent": "us-pro-ppcc26-schedule-watcher/0.1 (+github-actions)"
        }
      });
      clearTimeout(timeout);
      const text = await response.text();
      const status = String(response.status);
      const pageTitle = compactText(text.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? "");
      results.push({
        ...source,
        status,
        finalUrl: response.url,
        fetchedAt: new Date().toISOString(),
        durationMs: Date.now() - startedAt,
        title: source.title,
        pageTitle,
        contentHash: sha256(JSON.stringify({ status, finalUrl: response.url, pageTitle }))
      });
    } catch (error) {
      results.push({
        ...source,
        status: "fetch-error",
        fetchedAt: new Date().toISOString(),
        durationMs: Date.now() - startedAt,
        error: error instanceof Error ? error.message : String(error),
        contentHash: `ERROR:${sha256(error instanceof Error ? error.message : String(error))}`
      });
    }
  }
  return results;
}

function collectOfflineSources(sourceRecords) {
  return sourceRecords.map(source => ({
    ...source,
    status: "not-fetched-offline",
    contentHash: source.guideContentHash
  }));
}

function stripHtml(value) {
  return String(value)
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ");
}

async function readOptionalText(filePath) {
  try {
    return await readText(filePath);
  } catch (error) {
    if (error?.code === "ENOENT") return "";
    throw error;
  }
}

async function readJsonIfExists(filePath) {
  try {
    return JSON.parse(await readFile(filePath, "utf8"));
  } catch (error) {
    if (error?.code === "ENOENT") return null;
    throw error;
  }
}

function renderReport({ current, previous, changes, updateBaseline }) {
  const lines = [];
  lines.push("# PPCC schedule watcher report");
  lines.push("");
  lines.push(`Generated: ${current.generatedAt}`);
  lines.push(`Mode: ${current.mode}`);
  lines.push(`Baseline: ${previous ? "found" : "created on this run"}`);
  lines.push(`Baseline updated: ${updateBaseline || !previous ? "yes" : "no"}`);
  lines.push("");
  lines.push("## Current guide inventory");
  lines.push("");
  lines.push(`- Sessions: ${current.guide.sessions.length}`);
  lines.push(`- Events: ${current.guide.events.length}`);
  lines.push(`- Team cards: ${current.guide.team.length}`);
  lines.push(`- Monitored source URLs: ${current.sources.length}`);
  lines.push(`- Teams digest: ${current.teamsDigest.status}`);
  lines.push("");

  const sourceWarnings = current.sources.filter(source => !["200", "not-fetched-offline"].includes(source.status));
  if (sourceWarnings.length) {
    lines.push("## Source health warnings");
    lines.push("");
    lines.push("| Status | Source | URL |");
    lines.push("|---|---|---|");
    for (const source of sourceWarnings) {
      lines.push(`| ${escapeTable(source.status)} | ${escapeTable(source.title)} | ${escapeTable(source.url)} |`);
    }
    lines.push("");
  }

  if (!previous) {
    lines.push("## Result");
    lines.push("");
    lines.push("Baseline snapshot created. The next run will report changes.");
    lines.push("");
  } else if (!changes.length) {
    lines.push("## Result");
    lines.push("");
    lines.push("No changes detected against the committed baseline.");
    lines.push("");
  } else {
    lines.push("## Changes detected");
    lines.push("");
    lines.push("| Impact | Type | Area | Item |");
    lines.push("|---|---|---|---|");
    for (const change of changes) {
      lines.push(`| ${change.impact} | ${change.type} | ${change.area} | ${escapeTable(change.title)} |`);
    }
    lines.push("");
    lines.push("## Review details");
    lines.push("");
    for (const change of changes) {
      lines.push(`### ${change.impact}: ${change.title}`);
      lines.push("");
      lines.push(`- Type: ${change.type}`);
      lines.push(`- Area: ${change.area}`);
      lines.push(`- Key: \`${change.key}\``);
      if (change.before || change.after) {
        lines.push("- Before:");
        lines.push("  ```json");
        lines.push(indentJson(change.before ?? {}));
        lines.push("  ```");
        lines.push("- After:");
        lines.push("  ```json");
        lines.push(indentJson(change.after ?? {}));
        lines.push("  ```");
      }
      lines.push("");
    }
  }

  lines.push("## Guardrails");
  lines.push("");
  lines.push("- Official conference pages can update public schedule facts.");
  lines.push("- Teams-derived facts remain review-required.");
  lines.push("- This report does not publish to VibeHub.");
  lines.push("- Do not infer missing partner event details.");
  lines.push("");
  return `${lines.join("\n")}\n`;
}

function escapeTable(value) {
  return String(value ?? "").replace(/\|/g, "\\|").replace(/\n/g, " ");
}

function indentJson(value) {
  return JSON.stringify(value, null, 2).split("\n").map(line => `  ${line}`).join("\n");
}
