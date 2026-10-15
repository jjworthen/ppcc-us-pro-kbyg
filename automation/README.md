# Schedule watcher automation

This folder is the learning workspace for the PPCC guide automation.

The first version is intentionally safe:

- It reads the static `index.html` guide.
- It extracts the structured `guide-data` JSON and team-card roster.
- It can optionally fetch official source URLs and hash their current content.
- It compares the current run with a committed baseline snapshot.
- It writes a Markdown report for review.
- It does **not** publish to VibeHub.
- It does **not** infer details from Teams chatter.

## Commands

```powershell
npm run validate:guide
npm run watch:schedule
npm run watch:schedule -- --online
npm run watch:schedule:baseline
```

## Source policy

- Official conference pages can be used for public schedule facts.
- Partner/team/event details from Teams or chat are review-required.
- Microsoft 365/Teams access policies must not be bypassed.
- VibeHub publishing remains a separate approved action.

## Learning sequence

1. Run validation locally.
2. Run the watcher locally.
3. Commit this project to GitHub.
4. Run the GitHub Action manually.
5. Let the scheduled Action create/update a GitHub Issue.
6. Add PR automation after the report quality is trustworthy.
7. Move the watcher to Azure Functions after the GitHub flow is understood.
