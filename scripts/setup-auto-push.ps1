# One-time setup: enable ssh-agent and register the GitHub SSH key.
# Run in PowerShell (admin recommended for ssh-agent service).

$ErrorActionPreference = "Stop"
$pubKeyPath = "$env:USERPROFILE\.ssh\id_ed25519.pub"

if (-not (Test-Path $pubKeyPath)) {
    Write-Error "SSH public key not found at $pubKeyPath"
}

Write-Host "Enabling OpenSSH Authentication Agent..."
try {
    Set-Service ssh-agent -StartupType Automatic
    Start-Service ssh-agent
    ssh-add "$env:USERPROFILE\.ssh\id_ed25519"
    Write-Host "ssh-agent started and key added."
} catch {
    Write-Warning "Could not start ssh-agent (admin may be required). SSH will still work without a passphrase."
}

$pubKey = Get-Content $pubKeyPath -Raw
Set-Clipboard -Value $pubKey.Trim()
Write-Host ""
Write-Host "Public key copied to clipboard:"
Write-Host $pubKey.Trim()
Write-Host ""
Write-Host "Opening GitHub SSH key settings..."
Write-Host "Paste the key, set title to 'vibe-coding', then click Add SSH key."
Start-Process "https://github.com/settings/ssh/new?title=vibe-coding"
