# Azure Deployment Plan

> **Status:** Planning

Generated: 2026-10-15

---

## 1. Project Overview

**Goal:** Build a learning-friendly automation system that monitors PPCC schedule sources, detects changes that may affect the static US PRO guide, and teaches Azure Functions, GitHub Actions, GitHub Issues, and Pull Requests through a real project.

**Path:** Add Components

**Current app:** Plain static HTML guide in this folder. It is not yet a Git repository. It is published manually to VibeHub as a single `index.html` file.

---

## 2. Requirements

| Attribute | Value |
|-----------|-------|
| Classification | Development / learning first; production later only after review |
| Scale | Small |
| Budget | Cost-Optimized |
| Subscription | To be selected with user before Azure deployment |
| Location | To be selected with user before Azure deployment |

---

## 3. Components Detected

| Component | Type | Technology | Path |
|-----------|------|------------|------|
| US PRO guide | Frontend | Static HTML/CSS/JS | `index.html` |
| Hosting handoff | Documentation | Markdown | `HOSTING.md` |
| Deployment plan | Planning | Markdown | `.azure/deployment-plan.md` |

---

## 4. Recipe Selection

**Selected:** Start with GitHub Actions locally/repository-side, then add Azure Functions with AZD/Bicep once the learning path reaches cloud deployment.

**Rationale:** GitHub Actions, Issues, and PRs are the fastest way to learn review workflows without Azure cost or cloud permissions. Azure Functions can then host the same watcher logic on a timer trigger once the data model and report quality are proven.

---

## 5. Architecture

**Stack:** Static guide + scheduled automation

### Learning architecture

| Stage | Tool | Purpose |
|-------|------|---------|
| 1 | Git/GitHub repository | Learn commits, branches, remote push, Issues, PRs |
| 2 | GitHub Action | Run watcher on manual or scheduled trigger |
| 3 | GitHub Issue | Post human-readable change reports |
| 4 | Pull Request | Propose guide edits for review |
| 5 | Azure Function Timer Trigger | Run watcher in Azure on a schedule |
| 6 | Azure Storage | Store snapshots between Function runs |
| 7 | Application Insights | Observe Function execution and failures |

### Proposed Azure service mapping

| Component | Azure Service | SKU |
|-----------|---------------|-----|
| Schedule watcher | Azure Functions | Flex Consumption or Consumption, final choice before deployment |
| Snapshot storage | Azure Storage Account | Standard LRS |
| Logs/metrics | Application Insights | Workspace-based |
| Secrets | Key Vault or Function app settings | Final choice before deployment |

### GitHub automation mapping

| Workflow | Trigger | Output |
|----------|---------|--------|
| `schedule-watch.yml` | `workflow_dispatch` and cron | Change report artifact and/or GitHub Issue |
| `validate-guide.yml` | Pull request and manual | JSON parse, inline JS check, SharePoint HTML preflight |
| `propose-guide-update.yml` | Manual after review | Branch + PR with proposed `index.html`/`HOSTING.md` changes |

---

## 6. Provisioning Limit Checklist

This is not ready for quota validation yet because no Azure subscription, region, or final Function hosting plan has been selected.

Planned resource inventory for the first Azure version:

| Resource Type | Number to Deploy | Notes |
|---------------|------------------|-------|
| Microsoft.Web/sites | 1 | Function App |
| Microsoft.Storage/storageAccounts | 1 | Function runtime + snapshots |
| Microsoft.Insights/components | 1 | Application Insights |
| Microsoft.OperationalInsights/workspaces | 1 | Log Analytics workspace if needed |
| Microsoft.KeyVault/vaults | 0-1 | Optional for secrets if Function app settings are not enough |

Before any Azure deployment, subscription, location, and quota/capacity checks must be completed.

---

## 7. Execution Checklist

### Phase 1: GitHub learning foundation

- [x] Initialize Git only after explicit user approval.
- [ ] Create a GitHub repository.
- [ ] Push the current guide.
- [x] Create an initial issue template for schedule-change reports.
- [ ] Create a branch and PR by hand so the workflow is learned before automation opens PRs.

### Phase 2: Local watcher prototype

- [x] Create `automation/` scripts.
- [x] Extract current guide records into a normalized snapshot.
- [x] Add official-site collector.
- [x] Add Teams input adapter using one approved path: Microsoft Graph, Power Automate export, or manual digest file.
- [x] Generate Markdown report.

### Phase 3: GitHub Actions

- [x] Add manual workflow trigger.
- [x] Add scheduled workflow trigger.
- [x] Save report as workflow artifact.
- [x] Optionally create/update a GitHub Issue with findings.
- [x] Add validation workflow for PRs.

### Phase 4: PR automation

- [ ] Add guide patch proposal mode.
- [ ] Open PRs for high-confidence official-site changes.
- [ ] Keep Teams-derived changes as review-only unless explicitly approved.

### Phase 5: Azure Functions

- [ ] Confirm Azure subscription and region.
- [ ] Select Function runtime and hosting plan.
- [ ] Generate Azure Function timer trigger project and infrastructure using approved Azure templates.
- [ ] Store snapshots in Azure Storage.
- [ ] Log runs in Application Insights.
- [ ] Validate with azure-validate before deployment.

### Phase 6: Publishing policy

- [ ] Decide whether successful PR merge should merely update GitHub, or also trigger VibeHub deployment.
- [ ] Keep VibeHub deployment manual until explicitly approved.

---

## 8. Guardrails

- Do not bypass Microsoft 365 or Teams access policies.
- Do not infer conference details from unconfirmed Teams chatter.
- Treat official conference agenda pages as authoritative for public schedule facts.
- Treat Teams-derived facts as review-required unless explicitly confirmed.
- Preserve the guide's static/no-external-runtime architecture.
- Do not auto-publish to VibeHub until that policy is explicitly approved.

---

## 9. What the user needs to provide

- GitHub account/repository preference: personal namespace for learning and public idea-sharing, unless Microsoft/team governance requires an org-owned repo for this guide.
- Repository visibility: public or private.
- Official conference agenda URLs to monitor.
- Teams source location and approved access path.
- Desired notification target.
- Desired cadence.
- Azure subscription and preferred region when ready for Azure Functions.
- Deployment approval policy.

---

## Status log

- Created initial plan skeleton.
- Filled plan with a GitHub-first, Azure Functions-second learning roadmap.
- Verified reference pattern on 2026-10-15: Jake Gardner's `jgardn22/ppcc-kbyg` repository is a public, non-fork personal-namespace GitHub repository published through project GitHub Pages at `jgardn22.github.io/ppcc-kbyg`, with no license metadata reported by GitHub.
- Verified Sean Galliher pattern on 2026-10-15: `seangalliher` is a personal GitHub namespace with multiple public idea-sharing repositories. Updated recommendation: use a personal namespace for long-term learning/portfolio publishing, but keep this specific PPCC guide private until employee photos, LinkedIn links, conference details, and partner/event content are cleared for external publication.
- Implemented repo-contained GitHub learning foundation on 2026-10-15: validation script, schedule watcher, online baseline, GitHub Actions workflows, issue template, PR template, and learning-path documentation. Local validation and watcher runs passed. GitHub remote creation/push remains pending because the currently authenticated CLI account is `joworthe_microsoft` and the chosen direction is to use a personal namespace.
