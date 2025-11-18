@echo off
REM Release Script for WeighMyBru² ESP32 Web Tools
echo Building and copying latest firmware for ESP32 Web Tools...

REM Navigate to WeighMyBru² project
cd "..\WeighMyBru²"

REM Build the firmware for both boards
echo Building ESP32-S3 Supermini firmware...
pio run -e esp32s3-supermini

echo Building XIAO ESP32S3 firmware...
pio run -e esp32s3-xiao

REM Navigate back to website
cd "..\weighmybru-site"

REM Create release directory if it doesn'\''t exist
mkdir "public\releases\latest" 2>nul

REM Copy firmware files
echo Copying firmware binaries...
copy "..\WeighMyBru²\.pio\build\esp32s3-supermini\*.bin" "public\releases\latest\" /Y
copy "..\WeighMyBru²\.pio\build\esp32s3-supermini\firmware.bin" "public\releases\latest\firmware-supermini.bin" /Y
copy "..\WeighMyBru²\.pio\build\esp32s3-xiao\firmware.bin" "public\releases\latest\firmware-xiao.bin" /Y

echo Release files updated successfully!
echo.
echo Files available at:
echo - http://localhost:4321/releases/latest/manifest-supermini.json
echo - http://localhost:4321/releases/latest/manifest-xiao.json
echo.
echo You can now test the ESP32 Web Tools integration on the flash page.
pause
