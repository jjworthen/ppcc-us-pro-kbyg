import { mkdtemp, writeFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { spawnSync } from "node:child_process";
import { extractScripts, extractTeamCards, parseJsonScript, readText } from "./guide-utils.mjs";

const html = await readText("index.html");
const failures = [];
const warnings = [];

validateStaticHtml(html);
validateJsonBlocks(html);
validateParticipation(html);
await validateInlineJavaScript(html);
validateTeamCards(html);

if (warnings.length) {
  console.warn(warnings.map(warning => `warn  ${warning}`).join("\n"));
}

if (failures.length) {
  console.error(failures.map(failure => `fail  ${failure}`).join("\n"));
  process.exit(1);
}

console.log("Guide validation passed");

function validateStaticHtml(markup) {
  const checks = [
    ["no <script src>", /<script\b[^>]*\ssrc\s*=/i],
    ["no <link>", /<link\b/i],
    ["no external src=http(s)", /\ssrc\s*=\s*["']https?:\/\//i],
    ["no CSS @import", /@import\b/i],
    ["no CSS url(http(s):)", /url\(\s*["']?https?:\/\//i],
    ["no fetch(", /\bfetch\s*\(/],
    ["no XMLHttpRequest", /\bXMLHttpRequest\b/],
    ["no WebSocket", /\bWebSocket\b/],
    ["no EventSource", /\bEventSource\b/],
    ["no sendBeacon", /\bsendBeacon\s*\(/],
    ["no storage APIs", /\b(localStorage|sessionStorage|indexedDB)\b|document\.cookie/],
    ["no <form>", /<form\b/i]
  ];
  for (const [label, pattern] of checks) {
    if (pattern.test(markup)) failures.push(label);
  }
  if (/\binnerHTML\s*=/.test(markup)) {
    warnings.push("innerHTML assignment found; acceptable only for static author-controlled content");
  }
}

function validateJsonBlocks(markup) {
  for (const id of ["map-assets", "speaker-assets", "guide-data"]) {
    parseJsonScript(markup, id);
  }
}

function validateParticipation(markup) {
  const data = parseJsonScript(markup, "guide-data");
  const linked = new Set(["register", "confirm-eligibility", "link-unverified", "conference"]);
  const unlinked = new Set(["contact", "invitation-only", "no-rsvp", "link-pending", "signup-unconfirmed"]);
  const reviewed = Date.parse(data.participationReviewed);
  if (typeof data.participationReviewed !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(data.participationReviewed) || !Number.isFinite(reviewed) || new Date(reviewed).toISOString().slice(0, 10) !== data.participationReviewed) {
    failures.push("event participation needs a valid ISO review date");
  }
  if (!Array.isArray(data.events)) {
    failures.push("guide-data events must be an array");
    return;
  }
  for (const event of data.events) {
    if (!linked.has(event.participation) && !unlinked.has(event.participation)) {
      failures.push(`unsupported participation status for ${event.id}`);
    }
    if (typeof event.participationNote !== "string" || !event.participationNote.trim()) {
      failures.push(`missing participation next step for ${event.id}`);
    }
    const destination = event.registrationUrl || event.url;
    if (linked.has(event.participation) !== Boolean(destination)) {
      failures.push(`participation status and destination disagree for ${event.id}`);
    }
    for (const field of ["url", "registrationUrl"]) {
      if (!event[field]) continue;
      if (!URL.canParse(event[field]) || new URL(event[field]).protocol !== "https:") {
        failures.push(`invalid HTTPS ${field} for ${event.id}`);
      } else if (/(^|\.)(sharepoint\.com|outlook\.office\.com|outlook\.office365\.com|teams\.microsoft\.com)$/i.test(new URL(event[field]).hostname)) {
        failures.push(`internal evidence URL must not be an event destination for ${event.id}`);
      }
    }
  }
}

async function validateInlineJavaScript(markup) {
  const scripts = extractScripts(markup).filter(script => !/application\/json/i.test(script.type));
  const dir = await mkdtemp(join(tmpdir(), "ppcc-guide-"));
  try {
    const file = join(dir, "inline.js");
    await writeFile(file, scripts.map(script => script.body).join("\n;\n"), "utf8");
    const result = spawnSync(process.execPath, ["--check", file], { encoding: "utf8" });
    if (result.status !== 0) {
      failures.push(`inline JavaScript syntax failed:\n${result.stderr || result.stdout}`);
    }
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
}

function validateTeamCards(markup) {
  const cards = extractTeamCards(markup);
  const linked = cards.filter(card => card.linkedin);
  if (cards.length !== 29) failures.push(`expected 29 team cards, found ${cards.length}`);
  if (linked.length !== cards.length) failures.push(`expected every team card to have LinkedIn, found ${linked.length}/${cards.length}`);
  if (cards.some(card => card.name === "Miguel Zlot")) failures.push("Miguel Zlot card should not be present");
  for (const card of linked) {
    if (!/^https:\/\/www\.linkedin\.com\/in\/[^/]+\/$/i.test(card.linkedin)) {
      failures.push(`unexpected LinkedIn URL for ${card.name}: ${card.linkedin}`);
    }
  }
}
