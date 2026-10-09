# Agent instructions


## Portfolio migration contract
Start with project.manifest.json, PORTFOLIO.md and the selected project record in workspace-governance. This is one independent product. Preserve its internal app layout and pinned lockfiles. Load only relevant files. Business data, local.env, .clasp.json and provider identities are private host configuration. Never recreate/reconnect provider resources or apply DB/Sheets setup as cleanup. Local validation must use synthetic fixtures and no production secrets. Shared tooling comes from the pinned workspace-devtools revision; do not copy its engine into this project.

<!-- second-brain-contract:begin -->
## Second Brain completion contract
For substantive work, read the current project context in the private `Iliyab7/portfolio-knowledge-vault` starting at `AI_START_HERE.md`. Follow `.agents/skills/second-brain-capture/SKILL.md`.
Before declaring completion, record meaningful results, decisions/lessons, verification, blockers and next actions with evidence in this repository's `.second-brain/entries/<UTC-task-id>.json`. Include the entry in the authorized project change. Local/unpushed entries are pending cloud synchronization; do not claim cloud capture until verified. Tiny/no-op tasks need no entry. Never record credentials, raw chats, private customer data or unsupported personal/commercial claims. Keep company knowledge and personal preferences in their canonical repositories and link them. This contract adds project memory; it does not expand the user's push, deployment or messaging authorization.
<!-- second-brain-contract:end -->
