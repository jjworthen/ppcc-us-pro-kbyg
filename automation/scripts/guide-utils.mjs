import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");

export function normalizePath(filePath) {
  return path.resolve(repoRoot, filePath);
}

export async function readText(filePath) {
  return readFile(normalizePath(filePath), "utf8");
}

export function sha256(value) {
  return createHash("sha256").update(value).digest("hex").toUpperCase();
}

export function compactText(value) {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}

export function extractScripts(html) {
  const scripts = [];
  const pattern = /<script(?<attrs>[^>]*)>(?<body>[\s\S]*?)<\/script>/gi;
  for (const match of html.matchAll(pattern)) {
    const attrs = match.groups.attrs ?? "";
    const body = match.groups.body ?? "";
    scripts.push({
      attrs,
      body,
      id: attrs.match(/\sid=["']([^"']+)["']/i)?.[1] ?? "",
      type: attrs.match(/\stype=["']([^"']+)["']/i)?.[1] ?? ""
    });
  }
  return scripts;
}

export function parseJsonScript(html, id) {
  const script = extractScripts(html).find(item => item.id === id);
  if (!script) {
    throw new Error(`Missing JSON script block: ${id}`);
  }
  if (!/application\/json/i.test(script.type)) {
    throw new Error(`Script ${id} is not application/json`);
  }
  return JSON.parse(script.body.trim());
}

export function extractTeamCards(html) {
  const cards = [];
  const pattern = /<article class="team-card"(?<attrs>[^>]*)>(?<body>[\s\S]*?)<\/article>/gi;
  for (const match of html.matchAll(pattern)) {
    const attrs = match.groups.attrs ?? "";
    const body = match.groups.body ?? "";
    const name = compactText(body.match(/<h4>([\s\S]*?)<\/h4>/i)?.[1] ?? "");
    const title = compactText(body.match(/<p class="team-title">([\s\S]*?)<\/p>/i)?.[1] ?? "");
    const linkedin = attrs.match(/\sdata-linkedin=["']([^"']+)["']/i)?.[1] ?? "";
    cards.push({ name, title, linkedin });
  }
  return cards;
}

export function extractGuideSnapshot(html) {
  const guideData = parseJsonScript(html, "guide-data");
  const teamCards = extractTeamCards(html);
  return {
    generatedAt: new Date().toISOString(),
    guideHash: sha256(html),
    sessions: (guideData.sessions ?? []).map(item => normalizeRecord("session", item)),
    events: (guideData.events ?? []).map(item => normalizeRecord("event", item)),
    team: teamCards.map(card => ({
      key: `team:${slug(card.name)}`,
      name: card.name,
      title: card.title,
      linkedin: card.linkedin,
      contentHash: sha256(JSON.stringify(card))
    }))
  };
}

export function normalizeRecord(kind, item) {
  const normalized = {
    key: `${kind}:${item.id}`,
    kind,
    id: item.id,
    title: item.title ?? "",
    date: item.date ?? "",
    start: item.start ?? "",
    end: item.end ?? "",
    location: item.location ?? "",
    description: item.description ?? "",
    url: item.url ?? "",
    ...(item.registrationUrl ? { registrationUrl: item.registrationUrl } : {}),
    ...(kind === "event" && item.participation ? {
      participation: item.participation,
      participationNote: item.participationNote ?? ""
    } : {}),
    source: item.source ?? "",
    notes: item.notes ?? "",
    speaker: item.speaker ?? "",
    speakers: Array.isArray(item.speakers) ? item.speakers : [],
    priority: item.priority ?? "",
    publicUse: item.publicUse ?? ""
  };
  normalized.contentHash = sha256(JSON.stringify(normalized));
  return normalized;
}

export function collectSourceUrls(snapshot) {
  const sources = [];
  for (const collection of [snapshot.sessions, snapshot.events]) {
    for (const record of collection) {
      if (!record.url || !/^https:\/\//i.test(record.url)) continue;
      sources.push({
        key: record.key,
        kind: record.kind,
        title: record.title,
        url: record.url,
        guideContentHash: record.contentHash,
        source: record.source
      });
    }
  }
  return sources;
}

export function slug(value) {
  return compactText(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function diffSnapshots(previous, current) {
  const changes = [];
  compareCollection(changes, "Guide sessions", previous?.guide?.sessions ?? [], current.guide.sessions);
  compareCollection(changes, "Guide events", previous?.guide?.events ?? [], current.guide.events);
  compareCollection(changes, "Team roster", previous?.guide?.team ?? [], current.guide.team);
  compareCollection(changes, "Source pages", previous?.sources ?? [], current.sources ?? []);
  return changes;
}

function compareCollection(changes, label, previousItems, currentItems) {
  const previous = new Map(previousItems.map(item => [item.key, item]));
  const current = new Map(currentItems.map(item => [item.key, item]));

  for (const [key, item] of current) {
    if (!previous.has(key)) {
      changes.push({ impact: "Needs review", type: "Added", area: label, key, title: item.title ?? item.name ?? key });
      continue;
    }
    const before = previous.get(key);
    if (before.contentHash !== item.contentHash) {
      changes.push({
        impact: classifyChange(label, before, item),
        type: "Changed",
        area: label,
        key,
        title: item.title ?? item.name ?? key,
        before: summarizeItem(before),
        after: summarizeItem(item)
      });
    }
  }

  for (const [key, item] of previous) {
    if (!current.has(key)) {
      changes.push({ impact: "High", type: "Removed", area: label, key, title: item.title ?? item.name ?? key });
    }
  }
}

function classifyChange(label, before, after) {
  if (label === "Source pages") return "Needs review";
  for (const field of ["date", "start", "end", "location", "title"]) {
    if ((before[field] ?? "") !== (after[field] ?? "")) return "High";
  }
  if (["url", "registrationUrl", "participation"].some(field => (before[field] ?? "") !== (after[field] ?? ""))) return "Medium";
  return "Low";
}

function summarizeItem(item) {
  const fields = ["title", "name", "date", "start", "end", "location", "url", "registrationUrl", "participation", "participationNote", "status", "contentHash"];
  return Object.fromEntries(fields.filter(field => item[field]).map(field => [field, item[field]]));
}
