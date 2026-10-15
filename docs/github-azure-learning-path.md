# GitHub and Azure learning path for the PPCC guide

This project is set up to learn the workflow in safe layers.

## 1. Git repository basics

You will learn:

- What a repository is.
- What a commit is.
- How branches isolate work.
- How a pull request reviews and merges changes.

Current local foundation:

- The guide folder can now become a Git repository.
- The automation files are repo-contained.
- The current publishing path to VibeHub remains separate.

## 2. GitHub Issues

Issues will become the review inbox for schedule-monitoring findings.

The watcher report issue should answer:

- What changed?
- Which source changed?
- Is it official or internal/team-derived?
- Which guide records may need updates?
- Is human approval required?

## 3. GitHub Actions

Two workflows are included:

- `Validate guide`: checks the static guide on push, PR, or manual run.
- `PPCC schedule watcher`: runs manually or on a weekday schedule and creates/updates a watcher issue.

The schedule watcher does not publish anything. It reports findings for review.

Current environment note: GitHub-hosted Actions runners are disabled for the
managed account used for the first private repository deployment. The workflow
files are still included for learning, but automatic push/cron triggers are
paused until hosted runners are enabled or a self-hosted runner is attached.
Local commands provide the same validation and watcher behavior in the meantime.

## 4. Pull requests

Once the watcher report is useful, the next learning step is a PR flow:

1. Create a branch.
2. Patch `index.html` and `HOSTING.md`.
3. Run validation.
4. Open a PR.
5. Review the diff.
6. Merge when approved.

## 5. Azure Functions

After the GitHub flow is comfortable, move the same watcher logic into a timer-triggered Azure Function.

Azure Functions will teach:

- Timer triggers.
- App settings and secrets.
- Storage-backed snapshots.
- Application Insights logs.
- Cloud execution vs GitHub-hosted execution.

## 6. Publishing policy

VibeHub publishing should stay manual until you explicitly choose an automated release policy.

Recommended release gate:

1. Watcher finds a change.
2. Issue is reviewed.
3. PR proposes the guide update.
4. Validation passes.
5. Human approves merge.
6. Human approves VibeHub publish.
