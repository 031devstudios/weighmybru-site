# Release Script for WeighMyBru² ESP32 Web Tools
Write-Host "Building and copying latest firmware for ESP32 Web Tools..." -ForegroundColor Green

# Navigate to WeighMyBru² project
Set-Location "..\WeighMyBru²"

# Build the firmware for both boards
Write-Host "Building ESP32-S3 Supermini firmware..." -ForegroundColor Yellow
python -m platformio run -e esp32s3-supermini

Write-Host "Building XIAO ESP32S3 firmware..." -ForegroundColor Yellow
python -m platformio run -e esp32s3-xiao

# Build filesystem images
Write-Host "Building LittleFS filesystem for ESP32-S3 Supermini..." -ForegroundColor Yellow
python -m platformio run -e esp32s3-supermini -t buildfs

Write-Host "Building LittleFS filesystem for XIAO ESP32S3..." -ForegroundColor Yellow
python -m platformio run -e esp32s3-xiao -t buildfs

# Navigate back to website
Set-Location "..\weighmybru-site"

# Create release directory if it doesn'\''t exist
New-Item -ItemType Directory -Path "public\releases\latest" -Force | Out-Null

# Copy firmware files
Write-Host "Copying firmware binaries..." -ForegroundColor Yellow
Copy-Item "..\WeighMyBru²\.pio\build\esp32s3-supermini\*.bin" "public\releases\latest\" -Force
Copy-Item "..\WeighMyBru²\.pio\build\esp32s3-supermini\firmware.bin" "public\releases\latest\firmware-supermini.bin" -Force
Copy-Item "..\WeighMyBru²\.pio\build\esp32s3-xiao\firmware.bin" "public\releases\latest\firmware-xiao.bin" -Force

# Copy LittleFS filesystem images  
Write-Host "Copying LittleFS filesystem images..." -ForegroundColor Yellow
Copy-Item "..\WeighMyBru²\.pio\build\esp32s3-supermini\littlefs.bin" "public\releases\latest\littlefs-supermini.bin" -Force
Copy-Item "..\WeighMyBru²\.pio\build\esp32s3-xiao\littlefs.bin" "public\releases\latest\littlefs-xiao.bin" -Force

Write-Host "`nRelease files updated successfully!" -ForegroundColor Green
Write-Host "`nFiles available at:" -ForegroundColor Cyan
Write-Host "- http://localhost:4321/releases/latest/manifest-supermini.json"
Write-Host "- http://localhost:4321/releases/latest/manifest-xiao.json"
Write-Host "`nYou can now test the ESP32 Web Tools integration on the flash page."

# List all files in the release directory
Write-Host "`nRelease directory contents:" -ForegroundColor Cyan
Get-ChildItem "public\releases\latest\" | Format-Table Name, Length, LastWriteTime
