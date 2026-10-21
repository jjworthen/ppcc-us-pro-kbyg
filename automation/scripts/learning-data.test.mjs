import assert from "node:assert/strict";
import test from "node:test";
import { collectSourceUrls, extractGuideSnapshot, parseJsonScript, readLearningModel, readText } from "./guide-utils.mjs";

const html = await readText("index.html");
const guide = parseJsonScript(html, "guide-data");
const learning = parseJsonScript(html, "learning-data");
const model = readLearningModel(html);
const presenters = parseJsonScript(html, "speaker-assets");
const copy = () => structuredClone(learning);

test("five pathways cover 26 primary references and reuse all five featured sessions", () => {
  model.validate(learning, guide);
  assert.equal(learning.tracks.length, 5);
  assert.equal(learning.tracks.flatMap(track => track.primary).length, 26);
  assert.equal(guide.sessions.length, 5);
  assert.equal(learning.sessions.length, 32);
  assert.equal(learning.workshops.length, 9);
  assert.equal(learning.unavailable.length, 2);
  const primary = new Set(learning.tracks.flatMap(track => track.primary));
  for (const session of guide.sessions) assert.ok(primary.has(session.id));
  assert.equal(new Set([...guide.sessions, ...learning.sessions].map(session => session.url)).size, 37);
});

test("cross-listed Agent Accounts uses the same canonical record", () => {
  const governance = learning.tracks.find(track => track.id === "governance");
  const agents = learning.tracks.find(track => track.id === "agents");
  assert.ok(governance.primary.includes("agent-accounts"));
  assert.ok(agents.more.includes("agent-accounts"));
  assert.equal(learning.sessions.filter(session => session.id === "agent-accounts").length, 1);
});

test("Token Meter is recommended under Governance & ALM, not Peers & ROI", () => {
  const peers = learning.tracks.find(track => track.id === "peers");
  const governance = learning.tracks.find(track => track.id === "governance");
  assert.ok(![...peers.primary, ...peers.more].includes("token-roi"));
  assert.equal(governance.primary.filter(id => id === "token-roi").length, 1);
  assert.deepEqual(learning.tracks.map(track => track.primary.length), [4, 7, 5, 5, 5]);
});

test("each pathway requires at least one primary recommendation", () => {
  const changed = copy();
  changed.tracks[0].primary = [];
  assert.throws(() => model.validate(changed, guide), /at least one primary recommendation/);
});

test("pathway recommendation-count lines are removed while pathway controls remain", () => {
  assert.doesNotMatch(html, /learning-status|verified primary recommendations/);
  assert.match(html, /id="pathway-options" role="group" aria-label="Learning pathways"/);
});

test("standalone builder lists are removed while speaker profiles remain on cards", () => {
  assert.ok(!Object.hasOwn(learning, "builders"));
  for (const track of learning.tracks) assert.ok(!Object.hasOwn(track, "builders"));
  assert.doesNotMatch(html, /Meet the builders|builders-title|pathway-builders|builder-list|learningBuilders/);
  assert.ok(Object.hasOwn(presenters, "Srini Raghavan"));
  model.validatePresenters(presenters, [...guide.sessions, ...learning.sessions]);
});

test("corrected destinations do not reuse the PDF's mismatched session links", () => {
  const sessions = new Map(learning.sessions.map(session => [session.id, session]));
  assert.equal(sessions.get("managed-platform").url, "https://powerplatformconf.com/sessions/What's-New-and-What's-Next-in-the-Managed-Platform");
  assert.equal(sessions.get("choose-platform-tool").url, "https://powerplatformconf.com/sessions/Building-on-Power-Platform%3A-Choosing-the-Right-Tool-for-the-Job");
  assert.equal(sessions.get("choose-platform-tool").date, "2026-10-29");
  assert.equal(sessions.get("choose-platform-tool").start, "14:30");
  assert.notEqual(sessions.get("choose-platform-tool").url, sessions.get("author-your-way").url);
  assert.equal(sessions.get("managed-apps").start, "10:00");
  assert.equal(guide.sessions.find(session => session.id === "genai-production-demos").start, "10:00");
});

test("unconfirmed recommendations contain no invented link or logistics", () => {
  for (const entry of learning.unavailable) {
    assert.ok(entry.note);
    for (const field of ["url", "date", "start", "end", "location", "speaker", "format"]) assert.ok(!Object.hasOwn(entry, field));
  }
  for (const field of ["url", "date", "start", "end", "location", "speaker", "format"]) {
    const changed = copy();
    changed.unavailable[0][field] = "unconfirmed";
    assert.throws(() => model.validate(changed, guide), /Unconfirmed listings/);
  }
});

test("duplicate featured IDs and duplicate canonical session URLs are rejected", () => {
  const duplicateId = copy();
  duplicateId.sessions[0].id = guide.sessions[0].id;
  assert.throws(() => model.validate(duplicateId, guide), /unique lowercase IDs/);
  const duplicateUrl = copy();
  duplicateUrl.sessions[0].url = guide.sessions[0].url;
  assert.throws(() => model.validate(duplicateUrl, guide), /canonical session/);
});

test("session links must use the official host and the correct page category", () => {
  for (const url of [
    "http://powerplatformconf.com/sessions/wrong",
    "https://powerplatformconf.com.evil.example/sessions/wrong",
    "https://user@powerplatformconf.com/sessions/wrong",
    "https://powerplatformconf.com:8443/sessions/wrong",
    "https://powerplatformconf.com/workshops/wrong",
    "https://powerplatformconf.com/sessions/",
    "https://powerplatformconf.com/sessions/wrong?tracking=1",
    "https://powerplatformconf.com/sessions/wrong#fragment"
  ]) {
    const changed = copy();
    changed.sessions[0].url = url;
    assert.throws(() => model.validate(changed, guide), /correct official/);
  }
  const workshop = copy();
  workshop.workshops[0].url = workshop.sessions[0].url;
  assert.throws(() => model.validate(workshop, guide), /correct official workshops/);
});

test("unknown, repeated, and orphaned pathway references are rejected", () => {
  const unknown = copy();
  unknown.tracks[0].primary[0] = "unknown-session";
  assert.throws(() => model.validate(unknown, guide), /Unknown session reference/);
  const repeated = copy();
  repeated.tracks[0].primary[1] = repeated.tracks[0].primary[0];
  assert.throws(() => model.validate(repeated, guide), /must not repeat/);
  const crossPrimary = copy();
  crossPrimary.tracks[1].primary[0] = crossPrimary.tracks[0].primary[0];
  assert.throws(() => model.validate(crossPrimary, guide), /unique across pathways/);
  const orphan = copy();
  orphan.tracks[1].more.pop();
  assert.throws(() => model.validate(orphan, guide), /must be used/);
  const repeatedMore = copy();
  repeatedMore.tracks[0].more.push(repeatedMore.tracks[0].primary[0]);
  assert.throws(() => model.validate(repeatedMore, guide), /repeat its primary/);
});

test("dates, chronological times, and required verified metadata are checked", () => {
  for (const fields of [
    { date: "2026-10-30" }, { start: "25:00" }, { end: "13:00" }, { start: "" },
    { speaker: "" }, { format: "" }, { location: "" }, { description: "" }
  ]) {
    const changed = copy();
    Object.assign(changed.sessions[0], fields);
    assert.throws(() => model.validate(changed, guide), /valid dates|Verified learning/);
  }
  const invalidReview = copy();
  invalidReview.reviewed = "2026-02-30";
  assert.throws(() => model.validate(invalidReview, guide), /valid review date/);
  const workshopDay = copy();
  workshopDay.workshops[0].date = "2026-10-27";
  assert.throws(() => model.validate(workshopDay, guide), /valid dates/);
  const workshopAudience = copy();
  workshopAudience.workshops[0].audience = "";
  assert.throws(() => model.validate(workshopAudience, guide), /audience guidance/);
});

test("workshop recommendations are grouped on the three verified days", () => {
  for (const [date, start, end] of [["2026-10-25", "09:00", "16:00"], ["2026-10-26", "09:00", "16:00"], ["2026-10-30", "08:00", "15:00"]]) {
    const workshops = learning.workshops.filter(workshop => workshop.date === date);
    assert.equal(workshops.length, 3);
    assert.equal(workshops.filter(workshop => workshop.primary).length, 2);
    for (const workshop of workshops) {
      assert.equal(workshop.start, start);
      assert.equal(workshop.end, end);
    }
  }
});

test("watcher includes verified sessions and workshops, never unresolved listing links", () => {
  const snapshot = extractGuideSnapshot(html);
  const sources = collectSourceUrls(snapshot);
  assert.equal(snapshot.sessions.length, 46);
  assert.equal(sources.filter(source => source.kind === "session").length, 37);
  assert.equal(sources.filter(source => source.kind === "workshop").length, 9);
  for (const entry of learning.unavailable) assert.ok(!sources.some(source => source.key.endsWith(":" + entry.id)));
  assert.deepEqual(snapshot.events.map(event => event.id), guide.events.map(event => event.id));
});

test("older guide snapshots remain readable without a learning-data block", () => {
  const previousMarkup = html.replace(/<script id="learning-data" type="application\/json">[\s\S]*?<\/script>/, "");
  const snapshot = extractGuideSnapshot(previousMarkup);
  assert.equal(snapshot.sessions.length, 5);
  assert.equal(snapshot.events.length, 13);
});

test("presenter names reuse explicit featured rosters and strip affiliation annotations", () => {
  assert.deepEqual(Array.from(model.presenterNames({ speaker: "Name One \u2022 Company, Name Two \u2022 Firm" })), ["Name One", "Name Two"]);
  assert.deepEqual(Array.from(model.presenterNames({ speaker: "Name One, Name Two (website listing)" })), ["Name One", "Name Two"]);
  assert.deepEqual(Array.from(model.presenterNames({ speaker: "Unparsed legacy label", featuredSpeakers: ["Name One", "Name Two"] })), ["Name One", "Name Two"]);
  assert.throws(() => model.presenterNames({ speaker: "" }), /named presenters/);
  assert.throws(() => model.presenterNames({ speaker: "Name", featuredSpeakers: [] }), /named presenters/);
});

test("embedded presenter images cover every verified session without duplicating assets", () => {
  const sessions = [...guide.sessions, ...learning.sessions];
  model.validatePresenters(presenters, sessions);
  const names = new Set(sessions.flatMap(session => Array.from(model.presenterNames(session))));
  assert.equal(names.size, 89);
  assert.equal(Object.keys(presenters).length, names.size);
  for (const name of names) {
    const bytes = Buffer.from(presenters[name].image.split(",")[1], "base64");
    assert.equal(bytes.subarray(0, 3).toString("hex"), "ffd8ff");
    assert.equal(bytes.subarray(-2).toString("hex"), "ffd9");
  }
  assert.equal(presenters["Mark Drenka"].placeholder, true);
  assert.equal(Object.values(presenters).filter(asset => asset.placeholder).length, 1);
});

test("missing photos, external images, unsafe profile links and invalid placeholder flags are rejected", () => {
  const sessions = [...guide.sessions, ...learning.sessions];
  const missing = structuredClone(presenters);
  delete missing["Srini Raghavan"];
  assert.throws(() => model.validatePresenters(missing, sessions), /Missing presenter image for Srini Raghavan/);
  for (const fields of [
    { image: "https://example.com/photo.jpg" },
    { url: "https://powerplatformconf.com.evil.example/speakers/Srini-Raghavan" },
    { url: "https://powerplatformconf.com/sessions/wrong" },
    { url: "https://user@powerplatformconf.com/speakers/Srini-Raghavan" },
    { source: "https://example.com/photo.jpg" },
    { source: "https://devintxcontent.blob.core.windows.net/showcontent/speakers/photo.jpg?token=private" },
    { placeholder: "yes" }
  ]) {
    const changed = structuredClone(presenters);
    Object.assign(changed["Srini Raghavan"], fields);
    assert.throws(() => model.validatePresenters(changed, sessions));
  }
  const duplicate = structuredClone(presenters);
  duplicate["Srini Raghavan"].url = duplicate["Jamie Hall"].url;
  assert.throws(() => model.validatePresenters(duplicate, sessions), /own official profile/);
});
