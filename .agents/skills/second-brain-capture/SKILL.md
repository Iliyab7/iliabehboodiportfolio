---
name: second-brain-capture
description: Read Ilia's private Second Brain for project continuity and record meaningful task outcomes, decisions, lessons, blockers and next actions before completing work in his connected repositories. Use for substantive project work in Codex locally or in cloud.
---

# Second Brain capture

Canonical private repository: `Iliyab7/portfolio-knowledge-vault`.
At the start of substantive work, read `AI_START_HERE.md`, this project's `project.manifest.json` if present, and the current section of its canonical project note. Use the installed skill's reference only as a portable schema, never as evidence that synchronization is active. Current user instructions prevail.

Before declaring a meaningful task complete, write one validated UTF-8 JSON file under the CURRENT project's `.second-brain/entries/`. Use a globally unique task ID (UTC timestamp + topic); follow [entry-format.md](references/entry-format.md). Include the actual result, the verification level, material decisions/lessons, blockers, the next action and inspectable evidence. Record research and work without code changes too. Tiny edits and unchanged retries do not need a new entry. Never infer commercial success, production status, biography or time spent from commits. Reuse the same ID for an identical retry; use a new entry with `corrects` for a material correction.

Keep durable knowledge concise. Do not copy raw chats, credentials, contact/customer lists, private machine paths or confidential documents into the entry. Store source links and permitted summaries. Current facts override dated historical claims only with evidence. A preference is canonical in `personal-workflow-base`; link it rather than creating conflicting rules.

In a public source repository, commit only a public-safe task summary. Private context belongs in the authorized private brain, with a safe source reference; never move private vault material into public project files.

If a current Second Brain checkout is available, validate with `python3 scripts/brain.py capture --project <current-project> --input <entry.json>`; otherwise write the file directly using the reference and validate its JSON. Commit it alongside the authorized project change. Push only when authorized for the task. If changes remain local or unpushed, report that the entry is saved locally and cloud memory is pending. A rule cannot observe an offline laptop or another account's conversation.

GitHub dispatch plus periodic reconciliation imports the entry into the private vault when enabled. Before claiming cloud capture, verify that the entry ID exists under `90_System/Activity/<owner>--<repo>/tasks/` or inspect the successful sync run. A skipped workflow or a file on a feature branch is not proof of production deployment. If automatic sync is unavailable and an authenticated connector can write the brain, an explicitly authorized fallback can submit the entry there, preserving source identity. Report any actual access gap.

For a newly created repository, keep this skill and the AGENTS contract, and enroll it using the brain's documented setup. The central collector discovers newly accessible repositories; instant dispatch needs its source workflow and secret configured.

