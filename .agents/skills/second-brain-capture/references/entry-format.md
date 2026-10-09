# Task entry v1

Save as `.second-brain/entries/20261009T120000Z-example.json` in the project that owns the task. Use the real repository identity and UTC time. Status is one of `implemented`, `local-tested`, `preview-verified`, `live-verified`, `blocked`, `research`, `planned`.

```json
{
  "schema_version": 1,
  "id": "20261009T120000Z-example",
  "repository": "Iliyab7/REPLACE_WITH_ACTUAL_REPO",
  "occurred_at": "2026-10-09T12:00:00Z",
  "title": "Short task title",
  "summary": "What was changed or learned, and why.",
  "outcome": "Observed result; distinguish an implementation from tested behavior.",
  "status": "implemented",
  "decisions": ["Material decision and reason"],
  "blockers": [],
  "next_actions": ["Next useful action"],
  "evidence": ["Repository path, commit/PR URL or an actual check result"]
}
```

Required fields are nonempty `id`, `repository`, timezone-aware `occurred_at`, `title`, `summary`, `outcome`, valid `status`, and string arrays `decisions`, `blockers`, `next_actions`, `evidence` (at least one evidence). Optional `corrects` identifies the old task ID; keep the old record for history. User-supplied success metrics can be recorded in the outcome with their measurement source. A commit count is not a count of completed projects.

