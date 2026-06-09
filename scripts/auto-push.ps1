<#
Auto-push watcher

Usage: run this from the repo root (or via `npm run auto-push`).
It watches the working directory (recursively) and, after a short debounce
period following file changes, stages all changes, commits with a timestamp,
and pushes to the current branch.

WARNING: This will commit and push all local changes automatically. Use with
care. Excluded paths: .git, node_modules, dist, docs
#>

Param(
    [int]$DebounceMs = 3000
)

Set-Location -Path (Split-Path -Path $MyInvocation.MyCommand.Definition -Parent) | Out-Null
Set-Location -Path .. | Out-Null

Write-Host "Starting auto-push watcher in $(Get-Location)"

$exclude = @('.git', 'node_modules', 'dist', 'docs', '.husky')

function IsExcluded($path) {
    foreach ($e in $exclude) {
        if ($path -like "*\\$e*" -or $path -like "*/$e/*") { return $true }
    }
    return $false
}

$timer = New-Object System.Timers.Timer
$timer.Interval = $DebounceMs
$timer.AutoReset = $false

$perform = {
    try {
        Write-Host "Detected changes - staging, committing, and pushing..."
        git add -A
        $msg = "auto: update $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
        # Only commit if there are staged changes
        $status = git status --porcelain
        if (-not [string]::IsNullOrWhiteSpace($status)) {
            git commit -m $msg
            git push
            Write-Host "Pushed: $msg"
        }
        else {
            Write-Host "No changes to commit."
        }
    }
    catch {
        Write-Host "Auto-push failed: $_"
    }
}

$timer.add_Elapsed({ & $perform })

$watcher = New-Object System.IO.FileSystemWatcher -ArgumentList (Get-Location).Path, '*.*'
$watcher.IncludeSubdirectories = $true
$watcher.EnableRaisingEvents = $true

$onChange = Register-ObjectEvent $watcher Changed -SourceIdentifier FSChanged -Action {
    $path = $Event.SourceEventArgs.FullPath
    if (IsExcluded $path) { return }
    $timer.Stop()
    $timer.Start()
}

Register-ObjectEvent $watcher Created -SourceIdentifier FSCreated -Action {
    $path = $Event.SourceEventArgs.FullPath
    if (IsExcluded $path) { return }
    $timer.Stop()
    $timer.Start()
}

Register-ObjectEvent $watcher Renamed -SourceIdentifier FSRenamed -Action {
    $path = $Event.SourceEventArgs.FullPath
    if (IsExcluded $path) { return }
    $timer.Stop()
    $timer.Start()
}

Write-Host "Watcher running. Press Ctrl+C to exit." -ForegroundColor Green

while ($true) { Start-Sleep -Seconds 1 }
