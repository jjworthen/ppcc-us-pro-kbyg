# US PRO Know Before You Go: hosting and handoff

## What is built

`index.html` is an original, self-contained US PRO conference companion. It has six guide sections, five featured Start Here cards, responsive navigation, a URL-backed checklist, an evening planner with conflict detection, a 15-session curated shortlist, industry/persona/outcome/product/format/day/priority/source filters, session search, searchable FAQs, a single primary "Meet with our team" button that prepares a meeting-request email, and clickable venue-map previews with a zoom/pan viewer. No build system, database, API key, paid runtime, or external JavaScript/font/image dependency is required.

The five highlights use original rounded teal/purple gradient styling: US PRO Happy Hour at Whiskey Down, Design. Build. Automate, Innovation Unleashed, No Pilots. No POCs., and How Production GenAI Agents get Built, Deployed, Funded & Cost Optimized. Cards reuse the same event/session records as the planners to prevent drift. The two production GenAI sessions were sourced from their official pages on October 9, 2026, including all listed speakers and the 60-minute format; dates, times, and rooms remain unpublished. AEC timing remains labeled flyer-supplied; speaker discrepancies are retained in the data for editorial review. Audience recommendations are editorial. No Pilots is explicitly not recorded. The user-supplied happy hour is also in Timeline and Calendar for Tuesday, October 27, 4-6 PM at Whiskey Down, MGM Grand, with no invented registration URL. The requested local clock time is preserved and labeled Pacific/PDT rather than PST because Las Vegas is on daylight time that week.

The four session highlights show circular presenter headshots immediately below the title, matching the official session-page speaker rosters. Twelve unique official images are resized and embedded as JPEG data URIs in `speaker-assets`, with accessible names and links to official speaker profiles; no external image requests are made at runtime. The organizer's image for Mark Drenka is a silhouette placeholder, not a portrait; replace it when an approved actual headshot is available. Source/scheduling dropdowns are removed from session cards, and the featured happy-hour button is removed. Source notes remain in `guide-data` for maintainers. Obtain approval for public reuse of organizer-supplied presenter photography before publishing.

The three map previews use one resort image supplied in `PPCC26 KBYG Template.pptx` (`ppt/media/image31.jpg`): the full image and two clearly identified crops for conference-center orientation and hotel arrival. They are embedded JPEG data URIs in the `map-assets` block; do not upload the source deck. The viewer supports fit, up to 8x fitted zoom, drag, wheel, pinch, keyboard navigation, previous/next, and Escape with focus return. These older deck graphics are not verified 2026 floor plans or room assignments; the page warns visitors and links to the current official MGM PDF. Floor-by-floor conference maps remain unavailable. Confirm public redistribution rights for the deck's third-party map before publishing, or replace it with approved imagery.

The [Healthcare & Life Sciences reference](https://jgardn22.github.io/ppcc-kbyg/#start) was reviewed for its user-facing structure. Its [repository](https://github.com/jgardn22/ppcc-kbyg) has no declared reuse license as of October 9, 2026. This deliverable is **not an identical copy**: it does not reuse that site's source, artwork, map images, or prose. Exact source/artwork reuse needs the owner's permission and rights clearance for third-party assets.

The project remains in registration/resource-coverage Phase 1. This guide is a separate requested asset; no approval status, attendee records, account mappings, pipeline data, or travel bookings were changed or exported.

## Recommended external host: GitHub Pages

Use a new, dedicated repository under your personal profile, for example `ppcc-us-pro-kbyg`. This avoids overwriting an existing profile homepage.

1. Sign in to your GitHub account and create the dedicated repository. A public repository works with GitHub Free; private-repository Pages support depends on your plan. Standard personal-account Pages websites are public even when supported source repositories are private.
2. Upload **only** `index.html` and `.nojekyll` from this folder to the repository root. Optionally include this hosting document. Do not upload the parent PPCC26 folder or any workbooks, `.planning`, internal seller assets, customer records, contact lists, or pipeline exports.
3. In repository **Settings > Pages**, select **Deploy from a branch**, branch `main`, folder `/ (root)`, and save. You need repository administration/maintainer permission sufficient to configure Pages.
4. Wait for the Pages deployment to finish, then use the URL GitHub provides. For that repository name, the expected pattern is `https://<your-username>.github.io/ppcc-us-pro-kbyg/#start`; this is a pattern, not a live deployed link.
5. Test the actual published URL on a phone and in a signed-out/private browser. Check maps, email drafting, and public event sources. Confirm organizational approval for externally publishing Microsoft-team content and branding.

To use your profile root instead, the repository name must be `<your-username>.github.io`, yielding `https://<your-username>.github.io/`. Each account has one user-site repository. Do not replace an existing profile site unintentionally; a project site is simpler.

A custom domain is optional and needs DNS control, domain verification, Pages configuration, and HTTPS setup. It is not needed for the `github.io` address.

**Needed from you before deployment:** GitHub username, chosen repository, publish authorization, approval of public copy/branding, and final customer-facing content. Nothing has been pushed or published by this task.

GitHub Pages has no server-side form processing here. Email requests open the visitor's email application; this site neither sends nor stores them. Checklist ticks and selected public event IDs live in the URL fragment. Bookmarking retains them; sharing that URL shares those choices. The page does not use browser storage, analytics, or tracking scripts. GitHub can maintain its own access/security logs. `noindex` is a crawler hint, **not access control**.

Evening events default to Timeline, with a toggle to a three-day time-scaled calendar (October 27-29, Pacific time). Timed cards are positioned against an Outlook-style time gutter and stretch vertically from start to end; overlapping events share horizontal lanes within the same day. Only events with specific start and end times are retained in the planner; Monday preconference entries remain available in Timeline/day filtering but are not rendered as a separate calendar block. `view=calendar` in the URL fragment retains the view on reload. This display does not connect to Outlook, create appointments, or RSVP.

Calendar view retains Pacific time labels, day headers, grid lines, and no internal horizontal or vertical scroll containers. Card height now represents duration for events with both a start and end time. Untimed events remain separately labeled below the timed grid. All three days fit the available width, including narrow screens; ordinary page scrolling may be needed for the full calendar. Venues, descriptions, source notes, registration links, and planning actions remain in the event dialog.

Official documentation:

- [What is GitHub Pages?](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
- [Configuring a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [Custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## Team co-authoring: branch, review, merge, publish

**Recommended:** one shared personal-account repository, a protected `main` branch, one short-lived branch per change, and pull requests. GitHub is not simultaneous Word-style co-authoring: each branch is an independent proposed version. Merging combines approved changes. A merge to the configured Pages source branch publishes the site.

| Term | Meaning for this guide |
|---|---|
| Repository | The shared home for the approved public files and their history |
| `main` | The version clients see after a successful Pages deployment |
| Branch | A separate proposed edit, such as `aec-session-updates` |
| Commit | A saved revision on that branch |
| Pull request (PR) | A request to review and merge the branch into `main` |
| Merge | Incorporate the approved change into `main` |

### Set up once

1. Create `ppcc-us-pro-kbyg` under your personal GitHub account and add only this folder's approved files. Do not initialize or upload the entire parent OneDrive folder.
2. In **Settings > Collaborators > Add people**, invite teammates by GitHub username. Each person needs their own GitHub account and must accept. A public URL lets anyone view the site; it does not let them edit the repository.
3. Protect `main` in **Settings > Branches > Add branch protection rule** (or an equivalent branch ruleset). Require a pull request and at least one approving review, dismiss stale approvals after new changes, and require conversation resolution. Keep force pushes and branch deletion disabled; include administrators in enforcement if supported. Only require status checks once actual checking workflows exist; this folder does not yet contain CI.
4. Configure **Settings > Pages > Deploy from a branch > main > / (root)**. Changes on feature branches do not publish to this site. A merged PR triggers the production Pages deployment.

Plan availability matters: protected branches are available for public repositories on GitHub Free; private-repository protection and Pages require an eligible plan. Personal repositories invite people individually, not GitHub organization teams. An organization-owned repository is better if you later need team-based roles, shared administrative ownership, or stronger separation of publisher/reviewer permissions. Requiring an approval does not by itself make you the only person able to merge.

### First edit: no terminal required

1. Open the shared repository and ensure the branch selector shows `main`.
2. Create a branch using the branch selector, for example `legal-session-picks`, **from the current `main`**.
3. Open `index.html`, select the pencil/edit button, and edit only the intended session entries in the `guide-data` block. Keep source notes and unpublished timing explicit. Use a meaningful commit message such as `Refine legal session recommendations`, and commit to your feature branch.
4. Open **Pull requests > New pull request**. Set **base: main**, **compare: legal-session-picks**. Review **Files changed** yourself, then create the PR with what changed, its source, and how you checked it.
5. Request a teammate's review. The reviewer uses **Files changed > Review changes** to approve or request changes. Add fixes to the same branch; they appear in the same PR.
6. After review and any configured checks pass, use **Squash and merge** for one clean commit per change. Delete the merged feature branch. Start the next change on a fresh branch from updated `main`.
7. Watch the Pages deployment under **Actions** or the repository's deployment status. Open the actual published URL in a private browser and check the changed section. A successful merge does not guarantee a successful deployment.

The GitHub file editor changes source, not a live visual page. Branches/PRs do **not** get automatic preview websites in this setup. For a preview, download/open that branch's `index.html` locally or clone the repository with GitHub Desktop and open the file. To work with Copilot on a branch, use a Git-backed checkout of this dedicated repository, not today's folder-backed OneDrive session.

### Work together without overwriting each other

Use small, topic-specific PRs: one person updates AEC, another legal, another tax/audit/advisory. Agree on who edits layout/JavaScript. All session data currently lives in one file; overlapping edits can conflict. Avoid reformatting the whole file while someone else is editing it.

Merge one ready PR at a time. If `main` changed while you worked, update your branch from `main` using the PR's update option when available, or GitHub Desktop. Review the updated difference and check the guide again before merging.

When GitHub reports a merge conflict:

1. Open the PR's **Resolve conflicts** editor when offered. For unsupported/complex conflicts, use GitHub Desktop or a local editor.
2. Compare both edits with the intended session facts. Keep both independent session additions, but decide the correct value when both people changed the same date, speaker, or field. Do not blindly choose "ours," "theirs," or keep both versions of a single property.
3. Remove conflict markers, restore valid JSON commas/brackets, and preserve unique session IDs.
4. Mark resolved, commit the resolution to the feature branch, preview the final page, and obtain fresh review before merging.

If an incorrect change goes live, use the merged PR's **Revert** action where available to propose a reversing PR. Review and merge that fix normally. Do not reset shared history or force-push `main`.

Official references: [Invite collaborators](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/repository-access-and-collaboration/inviting-collaborators-to-a-personal-repository), [protected branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches), [pull requests](https://docs.github.com/en/pull-requests).

## Vibe Hub: external sharing is not yet verified

The workspace contains existing links under `https://vibehub.microsoft.com/app/...`. A read-only request to [Vibe Hub](https://vibehub.microsoft.com/) on October 9 returned **HTTP 401**. That proves the endpoint requires authentication for that request; it does **not** prove all app URLs are internal-only, nor that anonymous external publishing is supported.

No authoritative public documentation was found establishing external/anonymous sharing for this specific Microsoft Vibe Hub. Do not assume it is a SharePoint hub, a Power Apps product, or a public static web host.

To determine whether it can host this guide externally:

1. Have the Vibe Hub owner/admin verify the actual app's **publish/share** options: anonymous public URL, authenticated external guest access, or organization-only access.
2. Confirm whether arbitrary self-contained HTML/JavaScript can be uploaded as an app, and which viewer restrictions apply. Confirm deep links, inline scripts/styles, dialogs, external links, and `mailto:` behavior.
3. Get the owner/admin's explicit external-sharing approval, supported audience, allowed external domains, and applicable content/branding policy. If guest access is required, identify who provisions guests and manages their access.
4. Publish only the approved client-facing file, then test its actual URL with a non-Microsoft client identity or signed-out browser, as appropriate to the intended access model. Internal signed-in access alone is insufficient evidence.
5. Confirm ownership, update process, link expiry, and who can revoke access.

**Needed:** your Vibe Hub app/workspace URL, publisher access, the platform's supported external-sharing mode, admin approval, and a real external-access test. If it only supports internal access, use it as an internal launchpad linking to the GitHub Pages client guide, rather than presenting its internal URL as a client-accessible website.

## OneDrive / SharePoint alternative, if that is what you intend

This is a different service from Vibe Hub. This file inlines all styling and scripting and avoids network calls, remote fonts/images, browser storage, and history rewriting so it can fit the OneUp HTML viewer contract. Map previews are embedded images, not external frames. Links to the official map/video open outside the guide; external map/video embeds are deliberately not used.

Actual availability of that viewer and external links must be tested in your tenant. The strict HTML sandbox may restrict links and email-app navigation, so the email draft includes a copyable fallback. Guest/anonymous access also depends on tenant/site/library sharing policy. Do not assume an internal OneDrive URL will work for clients. A real upload and every overwrite require explicit confirmation of the target folder, filename, and create/replace action.

[SharePoint external sharing overview](https://learn.microsoft.com/en-us/sharepoint/external-sharing-overview)

## Content required before client launch

| Item | Current state | Needed |
|---|---|---|
| Tax/audit/advisory sessions | Cross-industry shortlist populated | Team review of practice fit; official dates/times/rooms |
| AEC sessions | Two industry sessions plus cross-industry shortlist | Confirm flyer timing and differing speaker lists with session owners |
| Legal sessions | Cross-industry shortlist populated | Team review of practice fit; official dates/times/rooms |
| US PRO briefing recording | Not supplied | Approved public recording and optional chapter timestamps |
| Microsoft team mailbox | Not supplied | Approved client-facing address, or keep visitor-entered contact |
| US PRO/partner gatherings | Not confirmed | Public invitation, host, eligibility, date/time/location, RSVP link |
| Venue/conference details | Public sources linked | Final badge hours, floor plan, room assignments, app instructions |
| Branding and publication | Official conference header logo embedded from the organizer's website | Public-use approval for branding and third-party imagery |

The guide deliberately omits the private staffing, registration, pass, and pipeline information described in `.planning/STATE.md`. It does not copy internal Seller Hub links, nomination forms, Dynamics links, or Teams threads into the external guide. Existing internal customer-prep dates were not promoted to public confirmed events without approved invitations.

## Updating session picks

Edit the `guide-data` JSON block in `index.html` on a feature branch. Keep the HTML/JavaScript elsewhere unchanged. The 13-entry shortlist was checked against the official session pages on October 9. Session titles, speakers, and formats are sourced facts; summaries are paraphrases and industry/persona/outcome/priority mappings are editorial recommendations. Product filters reflect the topics discussed, not only the organizer's primary-product tag.

Both AEC sessions supplied in the user's flyer now also have public session pages. Their date is supplied by the flyer; the panel's 11:30 AM time is not confirmed on the website. The flyer and website differ on speakers and demo format; each card exposes that discrepancy. The flyer says PST, but Las Vegas is on PDT on October 28. The guide uses Pacific local clock time without shifting the advertised 11:30 AM.

The other 11 session pages checked do not expose dates/times/rooms, so those entries are **undated**, not guessed into the three-day calendar. Example **schema illustration, not a real session**:

```json
{
  "id": "replace-with-unique-session-id",
  "title": "Replace with exact official session title",
  "date": "2026-10-27",
  "start": "10:30",
  "end": "11:30",
  "location": "Replace with confirmed room",
  "description": "Explain why this session matters to the selected industries.",
  "url": "https://powerplatformconf.com/sessions",
  "speaker": "Replace with verified speaker",
  "priority": "must-attend",
  "industries": ["tax", "aec", "legal"],
  "personas": ["leadership", "practice"],
  "outcomes": ["value", "workflow"],
  "products": ["Power Platform"],
  "format": "60-minute Session",
  "source": "official",
  "notes": "Identify the official source and any unconfirmed logistics."
}
```

Use only the appropriate industry keys: `tax`, `aec`, `legal`. Priority is `must-attend` (displayed as "Start here") or `optional` ("Explore further"). Dates are October 27, 28, or 29, or `""` when the date is unpublished. Times are 24-hour Pacific; an undated session must have empty start/end. If a start time is supplied but duration is unknown, leave only end empty. IDs must be unique lowercase letters/digits/hyphens across all events and sessions. Invalid data produces a visible configuration error instead of pretending the page is ready.

Persona keys: `leadership`, `practice`, `delivery`, `maker`, `it`, `data`. Outcome keys: `value`, `workflow`, `knowledge`, `governance`, `quality`, `field`, `adoption`. `source` is `official` or `official-flyer`. Provide nonempty product labels and a format. Include source notes; an official URL does not make team-supplied logistics organizer-confirmed.

Filters combine with AND; multiple tags on one session can match their respective filters. Session filters/search are saved in the URL fragment alongside checklist/event selections. The reset-session-filters button does not clear the checklist or evening plan. Public output includes no OU account names, registrations, or pipeline values.

`events` uses `id`, `title`, `date`, `start`, `end`, `location`, `description`, and `url`; it does not need session-specific tags. Events require a known conference date. The existing October 27 reception's times and October 28 concert's date/eligibility were taken from the [official conference homepage](https://powerplatformconf.com/) on October 9. The concert's time and venue remain explicitly unconfirmed. Recheck all facts before launch.

Five partner events were initially transcribed from the user-supplied **PPCC26 Partner Events** screenshot on October 9: Root16, congruentX, TTEC, Velrada, and Visionet/Microsoft. The subsequent committee PDF supplied additional logistics and audience restrictions; the reconciliation below describes the current retained entries and Velrada's removal. Team events are not independently host-confirmed. The image contains hyperlink labels but no recoverable destination URLs. Retained entries have `source: "team-asset"`, nonempty `notes`, and `url: ""` with a visible RSVP-link-missing message. Do not invent URLs or reuse the older 2025 invitation links in the decks. Times are Las Vegas local Pacific time.

The user subsequently supplied the five-page **party planning committee.pdf** on October 9. It is an image-only printout with some right-hand columns clipped and no recoverable hyperlinks. All five pages were reviewed. The [source app](https://vibehub.microsoft.com/app/nick-fratello-ppccpartyplanningcommittee) remains sign-in protected, but its supplied PDF has now been extracted and audience-filtered. Do not upload the PDF to the public repository: it is marked Microsoft-FTE-only and contains internal qualification/contact details. The guide uses limited, paraphrased client-facing event logistics, omits internal contacts and pipeline thresholds, and requires approval of public copy before deployment.

Merged Root16's BrewDog happy hour, congruentX's Tuesday customer happy hour, TTEC's dinner (different title, same logistics), and Visionet's mixer rather than creating duplicates. Root16's BrewDog RSVP URL and Wednesday Emeril's lounge were later confirmed from a Root16 email; congruentX's Tuesday happy hour was later updated from the user-supplied registration form to 4-6 PM; and TTEC's customer-dinner RSVP URL was later supplied by the user. Updated Visionet's Hard Rock Cafe venue from the committee PDF. Removed Velrada despite its presence in the first screenshot: the committee PDF identifies an **energy/resources focus**, outside US PRO. Also excluded Hummingbird's manufacturing/retail/CPG, HLS, and FinServ gatherings, HSO's SLG event, Robiquity's UK enterprise event, and congruentX's Microsoft-only Monday happy hour.

Added Root16's Monday and Wednesday invitation-only dinners, Alithya's Tuesday Topgolf reception, EY's Tuesday reception, Cyclotron's Tuesday and Wednesday happy hours, Stoneridge's Wednesday happy hour, Engineer Up's Wednesday Craftsteak dinner, Root16's Wednesday Emeril's lounge, and the user-supplied US PRO Whiskey Down happy hour. Events with no specific start/end time were removed from the calendar on October 12, including proMX's TBD Monday dinner, the untimed Pitbull concert listing, and congruentX's by-appointment meeting-space availability. The guide now has 15 timed event records. The three-day calendar remains October 27-29 and no longer renders a separate Monday preconference calendar block. Calendar cards show only event titles; click the title for timing, venue, source notes, planning actions, and registration links.

The PowerCAT private accelerated build listing was removed at the user's request on October 9 and remains excluded. Its formerly displayed 9 AM Thursday start is no longer in the calendar or planner. The Engineer Up row also mentions a second Hakkasan dinner at approximately 6:30 PM; retain that as an unconfirmed note rather than inventing duration or a separate confirmed invitation. Do not add untimed or by-appointment availability back to the customer calendar unless a specific start and end time are confirmed. All retained event times are Las Vegas Pacific local time.

Set `teamEmail` only to an approved customer-facing mailbox. Otherwise leave it empty; visitors enter their own account contact.

## Local preview

Calendar cards show only the linked event title. The title opens an accessible event-information dialog with timing, venue, source notes, eligibility, and Add/Remove from plan. Confirm-with-organizer links and descriptions do not clutter calendar cards. A verified `registrationUrl` (HTTPS) adds a direct Register hyperlink in the event dialog and copyable plan, not on the calendar card. Do not substitute internal email/Teams URLs, recipient-specific tokens, or private nomination links for customer-shareable registration forms.

The requested inbox/Teams invitation enrichment is pending access. Graph authentication reports a cached user session, but a scoped mail search returned `403 ErrorAccessDenied`; requesting `Mail.Read` waited for consent without returning data. No running Outlook COM session or matching mail/Teams connector was available. Invitation exports or authorized Graph mail/Teams permissions are needed before adding verified registration destinations or updating invite-derived timing. No inbox/Teams invitation content has been extracted into this guide.

On the October 9 retry, cached Graph sign-in remained available, but `/me/messages?$search="PPCC"` again returned HTTP 403 `ErrorAccessDenied`. The `/me/chats` read did not return a result within the bounded wait and was stopped; a consent/authentication wait is a hypothesis, not a verified Teams denial. No matching connector was found in the catalog. Mail read permission and authorized Teams message access, or user-supplied invitation exports, are still required. Existing missing dates/times were not guessed or changed.

The subsequent setup investigation verified HTTPS connectivity to Graph and Microsoft sign-in, and `GET /me` returned HTTP 200 for the correct Microsoft work account. Even `GET /me/messages?$select=id&$top=1` returned HTTP 403, ruling out the PPCC search expression or requested message body as the cause of that denial. The installed CLI defaults to `User.Read` at sign-in; its documented automatic incremental-consent logic only extracts permission names from error text. The observed generic Exchange error contains no permission name, so that mechanism cannot infer `Mail.Read` from this error. Cached sign-in alone is not proof of mail permission.

Explicit device-code sign-in for `Mail.Read,Chat.Read` successfully produced a sign-in URL and code, then waited for user authentication. It was stopped when the user was unavailable; no new authorization was confirmed. This establishes a usable, visible authentication flow, but does not establish whether corporate consent, Conditional Access, or Exchange policy will allow the requested access. No tenant policy was bypassed, tokens exposed, or cache cleared. Complete interactive sign-in locally with:

```powershell
& "C:\Users\joworthe\.copilot\skills\msgraph\scripts\run.ps1" auth signin --device-code --scopes 'Mail.Read,Chat.Read'
```

Follow the newly generated URL/code, then repeat the minimal mail and chat reads. If the page requests administrator approval or reports a policy restriction, provide that exact result to the tenant administrator for application `14d82eec-204b-4c2f-b7e8-296a70dab67e` rather than changing machine permissions or disabling protections. `Chat.Read` covers chats, not all Teams channel messages. See [Graph authorization troubleshooting](https://learn.microsoft.com/en-us/graph/resolve-auth-errors) and [Graph permissions](https://learn.microsoft.com/en-us/graph/permissions-reference).

The user's subsequent terminal screenshot showed a separate local launcher failure: `Unsupported architecture:` with an empty value, before sign-in. The local `msgraph\scripts\run.ps1` was repaired to normalize runtime architecture to a string and fall back to Windows `PROCESSOR_ARCHITEW6432` / `PROCESSOR_ARCHITECTURE` when the runtime type or property is unavailable. Sign-in help runs in both Windows PowerShell 5.1 and the agent's shell; simulated missing-runtime x64 and ARM64 fallbacks also pass. The screenshot's empty architecture result was not reproduced in the agent's clean PowerShell 5.1 process, so the exact host-specific trigger remains unknown. Retry the command above in the user's terminal: this fix addresses launcher startup, not the separate Graph mail authorization denial.

The next user-supplied screenshot confirmed successful sign-in followed by an organization access-criteria rejection ("You don't have access to this"). The explicit authorization attempt therefore remains blocked, rather than merely waiting for consent. The screenshot does not identify the failing policy: device compliance, application restrictions, and authentication-flow restrictions remain possibilities, not established causes. Obtain the error code, correlation/request ID, and timestamp from **More details**, then have Microsoft IT inspect that event's Conditional Access results in Entra sign-in logs for the application ID above. Do not disable policy, reuse other applications' tokens, or attempt alternative flows to evade the restriction. Partner invitation validation remains incomplete; user-supplied exports are an alternative if permitted by organizational data-handling rules.

The header uses the unchanged [official conference SVG logo](https://powerplatformconf.com/content/images/logos/ppcc-logo-contrast.svg), retrieved from the official homepage on October 9 and embedded as a data URI (no external runtime request). The unofficial-companion disclaimer remains. Organizer artwork is distinct from the reference guide's artwork; confirm branding/public-use approval before deployment.

Open `index.html` directly in a browser. For an HTTP preview, from this folder:

```powershell
python -m http.server 8765 --bind 127.0.0.1
```

Then browse to `http://127.0.0.1:8765/#start`. This serves only this deliverable folder, not the parent workspace. Stop the preview with Ctrl+C when finished.
