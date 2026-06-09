<#
Auto-push watcher (confirm before commit)

This variant shows `git status` and `git diff --staged` and prompts
you to confirm before committing and pushing. Safer than fully automatic.

Usage:
  powershell -NoProfile -ExecutionPolicy Bypass -File scripts\auto-push-confirm.ps1
#>

Param(
    [int]$DebounceMs = 3000
)

Set-Location -Path (Split-Path -Path $MyInvocation.MyCommand.Definition -Parent) | Out-Null
Set-Location -Path .. | Out-Null

Write-Host "Starting auto-push-confirm watcher in $(Get-Location)"

$exclude = @('.git','node_modules','dist','docs','.husky')

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
        Write-Host "Detected changes — staging all changes..."
        git add -A
        $status = git status --porcelain
        if (-not [string]::IsNullOrWhiteSpace($status)) {
            git --no-pager status
            git --no-pager diff --staged
            $resp = Read-Host "Commit and push these changes? (y/N)"
            if ($resp -match '^[yY]') {
                $msg = "auto: update $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
                git commit -m $msg
                git push
                Write-Host "Pushed: $msg"
            } else {
                Write-Host "Skipped commit. Staged changes remain."
            }
        } else {
            Write-Host "No changes detected."
        }
    } catch {
        Write-Host "Error during commit/push: $_"
    }
}

$timer.add_Elapsed({ & $perform })

$watcher = New-Object System.IO.FileSystemWatcher -ArgumentList (Get-Location).Path, '*.*'
$watcher.IncludeSubdirectories = $true
$watcher.EnableRaisingEvents = $true

Register-ObjectEvent $watcher Changed -SourceIdentifier FSChanged -Action {
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
