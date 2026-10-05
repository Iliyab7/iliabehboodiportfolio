# Agent instructions


## Portfolio migration contract
Start with project.manifest.json, PORTFOLIO.md and the selected project record in workspace-governance. This is one independent product. Preserve its internal app layout and pinned lockfiles. Load only relevant files. Business data, local.env, .clasp.json and provider identities are private host configuration. Never recreate/reconnect provider resources or apply DB/Sheets setup as cleanup. Local validation must use synthetic fixtures and no production secrets. Shared tooling comes from the pinned workspace-devtools revision; do not copy its engine into this project.
