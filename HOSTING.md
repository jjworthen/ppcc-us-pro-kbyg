# US PRO Know Before You Go: hosting and handoff

## What is built

`index.html` is an original, self-contained US PRO conference companion. It has eight guide sections, six featured Start Here cards, a five-pathway "Explore sessions" tab, a "Your US PRO Team" tab, responsive navigation, a URL-backed checklist, a "Don't Leave PPCC Without" completion list, an evening planner with conflict detection, a Links section, a LinkedIn hashtag button for `#PROPPCC26`, and clickable venue-map previews with a zoom/pan viewer. The former "3 perfect days" section and its filterable session shortlist were removed on October 12 and archived under `archive/2026-10-12-161832-before-removing-3-perfect-days/`; the newly authorized explorer is a separate, outcome-led implementation, not a restoration of that archived page. No build system, database, API key, paid runtime, or external JavaScript/font/image dependency is required.

The six highlights use original rounded teal/purple gradient styling: US PRO Happy Hour at Whiskey Down, Transforming AEC Business Processes (formerly Design. Build. Automate), Innovation Unleashed, Recommended Architectural Patterns & Common Pitfalls for MCS Retrieval Agents, How Production GenAI Agents Get Built, Deployed, Funded & Cost-Optimized (formerly Behind the Curtain), and No Pilots. No POCs. Cards reuse the same event/session records as the planners where applicable to prevent drift. All five official session pages were rechecked on October 20, 2026. The current organizer titles, URLs, times, rooms, and formats now supersede older flyer/image logistics; the verification table below records the current details. Presenter images and the six highlight identities are unchanged. The AEC leadership flyer/website guest-panel discrepancy remains documented for editorial review. Audience recommendations are editorial. No Pilots is explicitly not recorded. The user-supplied happy hour is also in Timeline and Calendar for Tuesday, October 27, 4-6 PM at Whiskey Down, MGM Grand, with no invented registration URL. The requested local clock time is preserved and labeled Pacific/PDT rather than PST because Las Vegas is on daylight time that week.

The five session highlights show circular presenter headshots immediately below the title, matching the official session-page speaker rosters. All 37 verified session cards now share this layout, with each speaker's name directly beneath their photo and a link to their official profile. Eighty-nine unique organizer images are embedded as JPEG data URIs in `speaker-assets`; the original sixteen image bytes are unchanged and 73 newly needed photos are resized to 144px. No external image requests are made at runtime. The organizer's image for Mark Drenka remains a silhouette, visibly labeled "Photo pending"; replace it when an approved actual headshot is available. Source/scheduling dropdowns are removed from session cards, and the featured happy-hour button is removed. Source notes remain in `guide-data` for maintainers. Obtain approval for public reuse of organizer-supplied presenter photography before publishing.

The "Your US PRO Team" tab was added from the user-provided PPCC26 - US PRO ATTENDEES Teams group chat. It includes one holistic card gallery with 29 Microsoft attendees after excluding Maggie Smith, Michelle Grikenas, Lacey Pike, and Miguel Zlot per user instruction. Display titles are standardized for customer readability: the four named leaders and Kate Kirsch use user-supplied titles; other teammate titles are normalized to Solution Specialist, Solution Engineering, or Cloud Solution Architecture based on their Microsoft 365 profile titles. Profile photos are embedded for all 29 cards. The public page intentionally omits email addresses. All 29 team cards have LinkedIn profile URLs validated in the signed-in LinkedIn browser session on October 13, 2026; linked cards show a compact LinkedIn icon indicator and remain full-card accessible links. Do not guess replacement profiles if a LinkedIn URL later 404s or changes ownership. Obtain each required internal approval before externally publishing Microsoft employee profile photos, LinkedIn links, or treating the roster as final.

The three map previews use one resort image supplied in `PPCC26 KBYG Template.pptx` (`ppt/media/image31.jpg`): the full image and two clearly identified crops for conference-center orientation and hotel arrival. They are embedded JPEG data URIs in the `map-assets` block; do not upload the source deck. The viewer supports fit, up to 8x fitted zoom, drag, wheel, pinch, keyboard navigation, previous/next, and Escape with focus return. These older deck graphics are not verified 2026 floor plans or room assignments; the page warns visitors and links to the current official MGM PDF. Floor-by-floor conference maps remain unavailable. Confirm public redistribution rights for the deck's third-party map before publishing, or replace it with approved imagery.

The [Healthcare & Life Sciences reference](https://jgardn22.github.io/ppcc-kbyg/#start) was reviewed for its user-facing structure. Its [repository](https://github.com/jgardn22/ppcc-kbyg) has no declared reuse license as of October 9, 2026. This deliverable is **not an identical copy**: it does not reuse that site's source, artwork, map images, or prose. Exact source/artwork reuse needs the owner's permission and rights clearance for third-party assets.

The project remains in registration/resource-coverage Phase 1. This guide is a separate requested asset; no approval status, attendee records, account mappings, pipeline data, or travel bookings were changed or exported.

## Content refresh: October 20, 2026

The user reviewed a local preview of the PDF-derived recommendations and authorized WorkIQ signup research, then authorized committing and publishing the reviewed guide to GitHub Pages. Production uses `jjworthen/ppcc-us-pro-kbyg`, branch `main`, repository root, at `https://jjworthen.github.io/ppcc-us-pro-kbyg/`. The six featured cards and their order, all presenter assets, the 29-person team gallery, all 13 event identities and schedules, and the Tuesday/Wednesday calendar remain unchanged.

- **Event participation:** Every event now has an explicit `participation` status and `participationNote`. Timeline cards and calendar dialogs distinguish matching RSVP forms, eligibility checks, an unverified RSVP page, contact-only participation, invitations, no-RSVP attendance, pending links, and conference-pass instructions. The section-level status legend is omitted; individual event labels remain. The copyable plan and Cowork task use the same status and next step; neither treats every URL as a registration form. Source notes are available in event-card disclosures. Calendar blocks still show only their linked titles.
- **Calendar access on narrow screens:** The title link now fills its existing timed block, keeping the updated signup dialog reachable when many overlapping events make a column narrow. Day columns, overlap lanes, block positions, durations, and event counts are unchanged.
- **Recovered destinations:** Root16 BrewDog uses the replacement public form ending `38e833bb-f39f-f111-b8dc-000d3a31542c`, verified against the live form's October 27, 4-9 PM details. HSO's public form matches October 27, 6-9 PM at BrewDog, but eligibility still needs host confirmation; the public preview does not copy internal audience classifications. congruentX's form identifies the right host and PPCC suite gathering, while its timing remains sourced from the invitation. Cyclotron's matching form explicitly covers Tuesday only and is not assigned to Wednesday.
- **Unresolved destinations:** TTEC's invitation URL was recovered but returned HTTP 403 during the public check; it is labeled unverified, not advertised as confirmed registration availability. Alithya directs guests to coordinate with the host. EY's reviewed source still says its registration link is coming soon. Root16 dinners remain invitation-only; the Emeril's lounge needs no RSVP. No separate US PRO Whiskey Down form was confirmed. These findings came from targeted accessible sources, not exhaustive mailbox or site enumeration.
- **Whova and preparation:** Original text replaces the PDF's older screenshots with a three-step quick start and a link to Whova's current attendee guide. No invitation code or event-specific portal URL is invented. Two new checklist items cover event entry and optional workshop preparation; existing checkbox IDs and URL-backed selections remain valid. The progress maximum follows the checklist length.
- **Workshops and learning:** The live organizer FAQ and workshop catalog resolve the PDF's conflicting dates: October 25-26 and October 30, 2026. Workshops require separate advance booking. The published refresh initially used general learning-interest prompts; the subsequent session explorer described below now connects these interests to curated pathways.
- **Wayfinding:** The existing three embedded map images are retained, clearly labeled as older orientation aids. Current session-room pills are derived from `guide-data`; no floor assignments or badge hours are inferred. The official October 15 conference schedule PDF is linked, not rehosted. No PDF imagery is copied.
- **Links:** The former FAQ section now contains only the seven existing "Worth bookmarking" links. All FAQ entries, search controls, and FAQ-specific JavaScript are removed. Navigation and guide-index labels say Links; the existing `#faq` anchor remains valid for saved bookmarks.

The guide remains a single self-contained HTML file with no new runtime dependencies, external image requests, storage, analytics, or submission behavior. Raw email bodies, Teams conversations, SharePoint exports, employee contact details, and internal source URLs are not added to the public application. WorkIQ success does not remove or bypass the separate historical direct-Graph access restriction documented below. LinkedIn mobile compose remains best-effort and unverified on a physical phone.

Public sources reviewed: [conference FAQ](https://powerplatformconf.com/faq), [workshops](https://powerplatformconf.com/workshops), [official schedule PDF](https://devintxcontent.blob.core.windows.net/showcontent/Schedule/PPCC-Schedule-2026-10-15.pdf), [Whova attendee guide](https://whova.com/pages/attendee-guide/), and the public host forms linked in `guide-data`. Reconfirm host eligibility and required public-use approvals before any later publication.

## Session explorer: October 20, 2026 release

The user approved the page-17-onward session proposal, reviewed the local card updates, and subsequently authorized committing and publishing the accumulated changes to production. The publishing target remains `jjworthen/ppcc-us-pro-kbyg`, branch `main`, repository root, at `https://jjworthen.github.io/ppcc-us-pro-kbyg/`.

Explore sessions presents five learning pathways: peers and ROI; governance, security and ALM; building agents; automation and agentic workflows; and apps. One pathway is shown at a time, with four primary cards in Peers & ROI, seven in Governance & ALM, and five in each remaining pathway, plus collapsed supplementary recommendations where applicable. At the user's direction, the Token Meter executive panel moves from Peers & ROI to Governance & ALM for its consumption-cost and financial-governance relevance; its verified title, presenter, schedule, and official link are unchanged. The separate "Meet the builders" section is removed from all pathways at the user's request; speakers' photos, names, and official profile links remain on the session cards. The opening keynote is a separate callout, not a seventh Start Here card. Agenda planning stays in Whova; no learning sessions, workshops, or keynote are inserted into the evening calendar.

The recommendation-count/status line is removed from every pathway at the user's request. All five pathway buttons remain, and unconfirmed sessions retain their individual labels and source-gap explanations. Configuration failures still produce an accessible inline error instead of silently hiding the recommendations.

Primary and supplementary session cards reuse Start Here's hover and focus-within treatment: 1.025x scale, teal border, and shadow with a 0.18-second transition. Reduced-motion preferences disable the scale and transition while retaining the border and shadow feedback.

At the user's direction, these cards also reuse Start Here's rounded purple gradient, title styling, metadata pills, and official-session button treatment. A shared presenter renderer places every confirmed presenter's name beneath their circular headshot, including on the original five highlighted sessions. All 89 speaker/profile/image mappings were checked against the 37 official session pages on October 20. Multiple listed presenters are retained rather than guessing a single lead speaker. The two unconfirmed listings do not acquire invented presenters or photos, and the team gallery, happy hour, workshop lists, and keynote callout keep their existing roles. Shared model validation and regression coverage check presenter-name normalization, embedded-image coverage, official profile and public source categories, and the explicit placeholder flag.

The source review confirmed **37 distinct session pages, nine workshop pages, and the opening-keynote details on the official homepage**. This covers 25 of the 26 primary recommendations and twelve additional distinct supplementary sessions. Agent Accounts is also cross-listed in Building Agents, but reuses its governance record. The five original featured session objects are reused directly from `guide-data`; the other 32 verified sessions, nine workshops, pathway references, and keynote live in `learning-data`. Presenter images and profile links remain in `speaker-assets`; the obsolete standalone builder catalog and pathway references are removed. Original US PRO summaries and editorial audience guidance accompany the public organizer facts. No confidential PDF pages, screenshots, internal prose, or Microsoft 365 evidence are copied into the application.

Two reference recommendations remain explicitly **unconfirmed**, with no assumed time, room, presenters, or individual-session link: `Microsoft Copilot Managed Runtime: AI-Powered Development with Built-In Governance` (the reference URL returned 404 and no matching current catalog entry was found) and `Server or Client?` (no matching current organizer listing was found). Their cards offer a clearly labeled link to the general catalog, not a broken or unrelated session destination. This is not a claim that either session was cancelled.

The PDF's two mismatched primary hyperlinks are corrected: Managed Platform links to its actual Managed Platform page, not Agentic COE Playbook; Choosing the Right Tool links to its own page, not Author Your Way. Author Your Way remains a valid supplementary agent recommendation. Current public pages also place Choosing the Right Tool on Thursday, October 29, 2:30-3:30 PM and Managed Apps on Wednesday, October 28, 10-11 AM, rather than the older reference times. All newly added verified session/workshop titles, URLs, dates, times, rooms, formats, and speaker rosters were compared against the retrieved organizer metadata.

Before You Go groups workshop recommendations by Sunday, October 25 (9 AM-4 PM), Monday, October 26 (9 AM-4 PM), and Friday, October 30 (8 AM-3 PM), with individual official links and editorial audience guidance. Workshops on a given day overlap; the recommendations are alternatives, not a daily itinerary. Separate booking, availability, prerequisites, authorized setup instructions, and laptop preparation remain the organizer's responsibility to confirm. Nothing is booked or submitted by the guide.

`#sessions?track=governance` opens a selected pathway. Changing pathways or following the linked learning interests preserves existing `done`, `plan`, and `view=calendar` fragment state. Native buttons expose their selected state and keep keyboard focus when the recommendation content changes. The legacy `#faq` anchor still opens the Links-only section; removed FAQs and community sections remain absent.

For maintenance, keep the five featured sessions in `guide-data` and reference their IDs from pathways. Do not duplicate them in `learning-data.sessions`, as the featured room shortlist intentionally remains scoped to those original five. Store unresolved recommendations only in `learning-data.unavailable`; confirm an actual official page before moving one to the verified sessions array. Update the review date after rechecking the affected sources. Runtime and command-line validation use the same inline `learning-model` rules for IDs, references, official URL categories, schedules, and unresolved-listing constraints.

Run `npm run validate:guide` and `npm run test:guide` before publishing. The manual validation workflow runs both. The schedule watcher now inventories the 37 verified sessions and nine verified workshops separately from the unchanged 13 evening events. It excludes the unresolved listings; existing baselines will show the additional records for review. No watcher issue or new baseline was created for this release. The six featured cards and order, 21 presenter-photo placements, 29-person gallery, three map assets, and all original event records remain unchanged; Calendar still contains twelve timed blocks across Tuesday and Wednesday.

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

Evening events default to Timeline, with side-by-side Timeline and Calendar buttons that visually indicate the active view. Calendar view is a time-scaled calendar for conference days that currently have timed events. Timed cards are positioned against an Outlook-style time gutter and stretch vertically from start to end; overlapping events share horizontal lanes within the same day. Empty days are hidden so active days have more horizontal room. Only events with specific start and end times are retained in the planner; Monday preconference entries remain available in Timeline but are not rendered as a separate calendar block. `view=calendar` in the URL fragment retains the view on reload. This display does not connect to Outlook, create appointments, or RSVP.

Calendar view retains Pacific time labels, day headers, grid lines, and no internal horizontal or vertical scroll containers. Card height now represents duration for events with both a start and end time. Untimed events remain separately labeled below the timed grid when applicable. With the current event set, Tuesday and Wednesday fill the available calendar width because Thursday has no timed events. Venues, descriptions, source notes, registration links, and planning actions remain in the event dialog.

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
3. Open `index.html`, select the pencil/edit button, and edit only the intended records: featured sessions and evening events in `guide-data`, or the additional session/workshop catalog and pathway references in `learning-data`. Reuse existing IDs and keep source gaps explicit. Use a meaningful commit message such as `Refine legal session recommendations`, and commit to your feature branch.
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

Deployment note, October 12, 2026: this guide was deployed to Vibe Hub as **US PRO - PPCC26 Know Before You Go** at `https://vibehub.microsoft.com/app/john-worthen-1719wg/` using the local VibeHub API key and direct single-HTML upload. The active version was overwritten in place after aligning the document title and fixing VibeHub subpath navigation title handling. Authenticated Vibe Hub preview loaded successfully with no guide JavaScript errors; the only console warning was Vibe Hub's hosted-app service-worker notice.

GitHub Pages note, October 15, 2026: the personal GitHub repository `jjworthen/ppcc-us-pro-kbyg` was made public and GitHub Pages was enabled from the `main` branch root. Public app URL: `https://jjworthen.github.io/ppcc-us-pro-kbyg/`. Keep the Microsoft-managed repository private unless a separate governance decision changes that.

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

This is a different service from Vibe Hub. This file inlines all styling and scripting and avoids network calls, remote fonts/images, browser storage, forms, and history rewriting so it can fit the OneUp HTML viewer contract. The current `index.html` passes the local OneUp preflight script. Map previews are embedded images, not external frames. Links to the official map/video open outside the guide; external map/video embeds are deliberately not used.

Actual availability of that viewer and external links must be tested in your tenant. The strict HTML sandbox may restrict links and email-app navigation, so the email draft includes a copyable fallback. Guest/anonymous access also depends on tenant/site/library sharing policy. Do not assume an internal OneDrive URL will work for clients. A real upload and every overwrite require explicit confirmation of the target folder, filename, and create/replace action.

[SharePoint external sharing overview](https://learn.microsoft.com/en-us/sharepoint/external-sharing-overview)

## Content required before client launch

| Item | Current state | Needed |
|---|---|---|
| Featured session highlights | Five highlighted session cards plus the US PRO happy-hour card retained on Start Here; official session logistics rechecked October 20, 2026 | Recheck the organizer agenda before attending, resolve the AEC guest-panel discrepancy, and confirm public-use approval for presenter imagery |
| US PRO briefing recording | Not supplied | Approved public recording and optional chapter timestamps |
| Microsoft team mailbox | Not supplied | Approved client-facing address, or keep visitor-entered contact |
| US PRO/partner gatherings | Not confirmed | Public invitation, host, eligibility, date/time/location, RSVP link |
| Venue/conference details | Public sources linked | Final badge hours, floor plan, room assignments, app instructions |
| Branding and publication | Official conference header logo embedded from the organizer's website | Public-use approval for branding and third-party imagery |
| US PRO team roster | 29 centered attendee cards in one gallery, with standardized display titles, embedded photos, and LinkedIn profile links validated on October 13, 2026 | Confirm external-publication approval for employee photos/titles/profile links and verify final attendee list before client launch |

The guide deliberately omits the private staffing, registration, pass, and pipeline information described in `.planning/STATE.md`. It does not copy internal Seller Hub links, nomination forms, Dynamics links, or Teams threads into the external guide. Existing internal customer-prep dates were not promoted to public confirmed events without approved invitations.

## Updating featured session cards

Edit the `guide-data` JSON block in `index.html` on a feature branch. Keep the HTML/JavaScript elsewhere unchanged. This block keeps the five session records needed by the Start Here highlights and reused by the explorer; additional recommendations are maintained separately in `learning-data`. The former filterable "3 perfect days" shortlist is archived, not rendered. Session titles, speakers, formats, and published timing/rooms are sourced facts; summaries and audience recommendations are editorial.

### Official session verification: October 20, 2026

The current official session pages and public session index confirm the following details. All times are Las Vegas local Pacific time (PDT). The three renamed sessions now carry the organizer's "Industry Deep Dive" prefix. Stable guide IDs, featured-card order, presenter image assets, and all partner-event records are unchanged.

| Featured session | Date | Time | Room | Official source |
|---|---|---|---|---|
| Innovation Unleashed - AEC leadership | Wednesday, October 28 | 8:00-9:00 AM | Chairmans BR 368 | [MS90](https://powerplatformconf.com/sessions/Industry-Deep-Dive-%7C-Innovation-Unleashed%E2%80%94How-AEC-Leaders-Are-Putting-AI-Agents-to-Work) |
| No Pilots. No POCs. | Wednesday, October 28 | 10:00-11:00 AM | Premier BR 319 | [MS75](https://powerplatformconf.com/sessions/No-Pilots.-No-POCs.-Only-Demos-of-GenAI-Agents-and-Apps-in-Production) |
| Transforming AEC Business Processes | Wednesday, October 28 | 11:30 AM-12:30 PM | Room 351 | [RT33](https://powerplatformconf.com/sessions/Industry-Deep-Dive-%7C-Transforming-AEC-Business-Processes-with-Code-Apps%2C-Agents%2C-and-Workflows) |
| How Production GenAI Agents Get Built, Deployed, Funded & Cost-Optimized | Wednesday, October 28 | 3:30-4:30 PM | Chairmans BR 368 | [MS74](https://powerplatformconf.com/sessions/Industry-Deep-Dive-%7C-How-Production-GenAI-Agents-Get-Built%2C-Deployed%2C-Funded-%26-Cost-Optimized) |
| Recommended Architectural Patterns & Common Pitfalls for MCS Retrieval Agents | Thursday, October 29 | 10:45-11:45 AM | Chairmans BR 368 | [MS48](https://powerplatformconf.com/sessions/Recommended-Architectural-Patterns-%26-Common-Pitfalls-for-MCS-Retrieval-Agents) |

The four former session URLs returned HTTP 404; their replacements were obtained from the organizer's current session index and then opened individually. A missing old URL was not treated as evidence of cancellation. The production-delivery session's 3:30-4:30 PM / Chairmans BR 368 listing supersedes the October 13 image's 8:00-9:00 AM / Microsoft 8 details. No Pilots retains its time but moves from Microsoft 7 to Premier BR 319 and now uses a URL without the trailing period.

The organizer now publishes both AEC sessions' timing and rooms, so neither remains labeled flyer-timed or TBC. Innovation Unleashed is a 60-minute Session at 8:00 AM, not the earlier flyer's 11:30 AM. Transforming AEC Business Processes is a Roundtable at 11:30 AM; the current official abstract also describes it as demo-heavy. The website's AEC speaker lists remain Jamie Hall, Sean Galliher, and Ted Kempf. Innovation Unleashed's earlier flyer names different guest panelists; that discrepancy is retained in source notes rather than guessed away.

The organizer homepage still confirms the October 27 Night Market reception at 5:00-7:30 PM. Partner-event logistics, links, eligibility, and the 13 timed event records were not changed. The TTEC dinner page returned HTTP 403 during this review; no attempt was made to bypass it or infer replacement details. Microsoft 365 invitation enrichment remains subject to the access-policy blocker documented below.

Example **schema illustration, not a real session**:

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

Persona keys: `leadership`, `practice`, `delivery`, `maker`, `it`, `data`. Outcome keys: `value`, `workflow`, `knowledge`, `governance`, `quality`, `field`, `adoption`. `source` is `official` or `official-flyer`. Provide nonempty product labels and a format. Include source notes; an official URL does not make team-supplied logistics organizer-confirmed. Public output includes no OU account names, registrations, or pipeline values.

`events` uses `id`, `title`, `date`, `start`, `end`, `location`, `description`, and `url`; it does not need session-specific tags. Events require a known conference date. The existing October 27 reception's times and October 28 concert's date/eligibility were taken from the [official conference homepage](https://powerplatformconf.com/) on October 9. The concert's time and venue remain explicitly unconfirmed. Recheck all facts before launch.

Five partner events were initially transcribed from the user-supplied **PPCC26 Partner Events** screenshot on October 9: Root16, congruentX, TTEC, Velrada, and Visionet/Microsoft. The subsequent committee PDF supplied additional logistics and audience restrictions; the reconciliation below describes the current retained entries and later removals. Team events are not independently host-confirmed. The image contains hyperlink labels but no recoverable destination URLs. Retained entries have `source: "team-asset"`, nonempty `notes`, and `url: ""` with a visible RSVP-link-missing message. Do not invent URLs or reuse the older 2025 invitation links in the decks. Times are Las Vegas local Pacific time.

The user subsequently supplied the five-page **party planning committee.pdf** on October 9. It is an image-only printout with some right-hand columns clipped and no recoverable hyperlinks. All five pages were reviewed. The [source app](https://vibehub.microsoft.com/app/nick-fratello-ppccpartyplanningcommittee) remains sign-in protected, but its supplied PDF has now been extracted and audience-filtered. Do not upload the PDF to the public repository: it is marked Microsoft-FTE-only and contains internal qualification/contact details. The guide uses limited, paraphrased client-facing event logistics, omits internal contacts and pipeline thresholds, and requires approval of public copy before deployment.

Merged Root16's BrewDog happy hour, congruentX's Tuesday customer happy hour, and TTEC's dinner (different title, same logistics) rather than creating duplicates. Root16's BrewDog RSVP URL and Wednesday Emeril's lounge were later confirmed from a Root16 email; congruentX's Tuesday happy hour was later updated from the user-supplied registration form to 4:30-6:30 PM; and TTEC's customer-dinner RSVP URL was later supplied by the user. Visionet/Microsoft's mixer was venue-enriched from the committee PDF, then removed at the user's request on October 12, 2026. Removed Velrada despite its presence in the first screenshot: the committee PDF identifies an **energy/resources focus**, outside US PRO. Also excluded Hummingbird's manufacturing/retail/CPG, HLS, and FinServ gatherings, HSO's earlier SLG event, Robiquity's UK enterprise event, and congruentX's Microsoft-only Monday happy hour.

Added Root16's Monday and Wednesday invitation-only dinners, Alithya's Tuesday Topgolf reception, EY's Tuesday reception, Cyclotron's Tuesday and Wednesday happy hours, Root16's Wednesday Emeril's lounge, and the user-supplied US PRO Whiskey Down happy hour. Events with no specific start/end time were removed from the calendar on October 12, including proMX's TBD Monday dinner, the untimed Pitbull concert listing, and congruentX's by-appointment meeting-space availability. Visionet/Microsoft's mixer, Engineer Up's dinner, and Stoneridge's happy hour were also removed at the user's request on October 12. The user supplied the Cyclotron Tuesday Microsoft Forms registration URL on October 12. The user supplied an HSO + Microsoft PPCC Happy Hour invitation image on October 16; the guide records Tuesday, October 27, 6-9 PM at BrewDog Las Vegas and does not infer the screenshot's unrecoverable Start now link. The guide now has 13 timed event records. The calendar hides conference days without timed events, so the current Tuesday and Wednesday columns fill the grid while Thursday is omitted. Calendar cards show only event titles; click the title for timing, venue, source notes, planning actions, and registration links.

The event plan includes a Microsoft 365 Copilot Cowork handoff button. It does not submit registrations from the HTML page. It opens an onboarding dialog, builds a copyable Cowork task from the user's selected events, and links to `https://m365.cloud.microsoft`; the user must paste the task into Cowork and approve any registration/submission steps under their own signed-in account. This keeps the SharePoint OneUp file compliant with the no-network/no-form runtime model.

The PowerCAT private accelerated build listing was removed at the user's request on October 9 and remains excluded. Its formerly displayed 9 AM Thursday start is no longer in the calendar or planner. Do not add removed, untimed, or by-appointment availability back to the customer calendar unless a specific start and end time are confirmed and the user asks to restore it. All retained event times are Las Vegas Pacific local time.

Set `teamEmail` only to an approved customer-facing mailbox. Otherwise leave it empty; visitors enter their own account contact.

## Local preview

Calendar cards show only the linked event title. The title opens an accessible event-information dialog with timing, venue, participation status, source notes, eligibility, and Add/Remove from plan. Participation actions and descriptions do not clutter calendar cards. An event's `participation` status determines whether its HTTPS destination (`registrationUrl` when supplied, otherwise `url`) is a host registration form, an unverified or eligibility-dependent link, or conference information. Contact-only, invitation-only, no-RSVP, pending, and unconfirmed entries have no fabricated signup action. The validator checks these relationships, and the schedule watcher includes participation changes in its snapshots. Do not substitute internal email/Teams URLs, recipient-specific tokens, or private nomination links for customer-shareable registration forms.

Authorized WorkIQ invitation research succeeded on October 20 through email, Teams, and SharePoint reads. Only the reviewed customer-facing destinations and participation guidance described above enter this local preview; raw Microsoft 365 evidence does not. The following paragraphs retain the earlier direct-Graph investigation as historical context, not as a claim that WorkIQ is currently blocked. Direct Graph access was not retried or bypassed for this work.

On the October 9 retry, cached Graph sign-in remained available, but `/me/messages?$search="PPCC"` again returned HTTP 403 `ErrorAccessDenied`. The `/me/chats` read did not return a result within the bounded wait and was stopped; a consent/authentication wait is a hypothesis, not a verified Teams denial. No matching connector was found in the catalog. Mail read permission and authorized Teams message access, or user-supplied invitation exports, are still required. Existing missing dates/times were not guessed or changed.

The subsequent setup investigation verified HTTPS connectivity to Graph and Microsoft sign-in, and `GET /me` returned HTTP 200 for the correct Microsoft work account. Even `GET /me/messages?$select=id&$top=1` returned HTTP 403, ruling out the PPCC search expression or requested message body as the cause of that denial. The installed CLI defaults to `User.Read` at sign-in; its documented automatic incremental-consent logic only extracts permission names from error text. The observed generic Exchange error contains no permission name, so that mechanism cannot infer `Mail.Read` from this error. Cached sign-in alone is not proof of mail permission.

Explicit device-code sign-in for `Mail.Read,Chat.Read` successfully produced a sign-in URL and code, then waited for user authentication. It was stopped when the user was unavailable; no new authorization was confirmed. This establishes a usable, visible authentication flow, but does not establish whether corporate consent, Conditional Access, or Exchange policy will allow the requested access. No tenant policy was bypassed, tokens exposed, or cache cleared. Complete interactive sign-in locally with:

```powershell
& "C:\Users\joworthe\.copilot\skills\msgraph\scripts\run.ps1" auth signin --device-code --scopes 'Mail.Read,Chat.Read'
```

Follow the newly generated URL/code, then repeat the minimal mail and chat reads. If the page requests administrator approval or reports a policy restriction, provide that exact result to the tenant administrator for application `14d82eec-204b-4c2f-b7e8-296a70dab67e` rather than changing machine permissions or disabling protections. `Chat.Read` covers chats, not all Teams channel messages. See [Graph authorization troubleshooting](https://learn.microsoft.com/en-us/graph/resolve-auth-errors) and [Graph permissions](https://learn.microsoft.com/en-us/graph/permissions-reference).

The user's subsequent terminal screenshot showed a separate local launcher failure: `Unsupported architecture:` with an empty value, before sign-in. The local `msgraph\scripts\run.ps1` was repaired to normalize runtime architecture to a string and fall back to Windows `PROCESSOR_ARCHITEW6432` / `PROCESSOR_ARCHITECTURE` when the runtime type or property is unavailable. Sign-in help runs in both Windows PowerShell 5.1 and the agent's shell; simulated missing-runtime x64 and ARM64 fallbacks also pass. The screenshot's empty architecture result was not reproduced in the agent's clean PowerShell 5.1 process, so the exact host-specific trigger remains unknown. Retry the command above in the user's terminal: this fix addresses launcher startup, not the separate Graph mail authorization denial.

The next user-supplied screenshot confirmed successful sign-in followed by an organization access-criteria rejection ("You don't have access to this"). The explicit authorization attempt therefore remains blocked, rather than merely waiting for consent. The screenshot does not identify the failing policy: device compliance, application restrictions, and authentication-flow restrictions remain possibilities, not established causes. Obtain the error code, correlation/request ID, and timestamp from **More details**, then have Microsoft IT inspect that event's Conditional Access results in Entra sign-in logs for the application ID above. Do not disable policy, reuse other applications' tokens, or attempt alternative flows to evade the restriction. Partner invitation validation was incomplete at that point; subsequent authorized WorkIQ research is recorded above and does not change this historical direct-Graph result.

The header uses the unchanged [official conference SVG logo](https://powerplatformconf.com/content/images/logos/ppcc-logo-contrast.svg), retrieved from the official homepage on October 9 and embedded as a data URI (no external runtime request). The unofficial-companion disclaimer remains. Organizer artwork is distinct from the reference guide's artwork; confirm branding/public-use approval before deployment.

Open `index.html` directly in a browser. For an HTTP preview, from this folder:

```powershell
python -m http.server 8765 --bind 127.0.0.1
```

Then browse to `http://127.0.0.1:8765/#start`. This serves only this deliverable folder, not the parent workspace. Stop the preview with Ctrl+C when finished.
