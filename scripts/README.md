Auto-push watcher

This repository includes `scripts/auto-push.ps1`, a PowerShell script that watches the repository and automatically stages, commits, and pushes changes after a short debounce.

Usage:

1. From PowerShell in the repo root run:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts\auto-push.ps1
```

2. Or run via npm (Windows PowerShell required):

```bash
npm run auto-push
```

Warnings:

- This will commit and push ALL local changes automatically. Use with care.
- The script excludes common folders: `.git`, `node_modules`, `dist`, `docs`.
