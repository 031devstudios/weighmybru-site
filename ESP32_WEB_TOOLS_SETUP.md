# ESP32 Web Tools Release Setup

## Overview
The ESP32 Web Tools integration is now fully configured for WeighMyBru². Users can flash firmware directly from the browser without installing any software.

## Directory Structure
```
public/releases/latest/
├── bootloader.bin          # ESP32 bootloader (shared)
├── partitions.bin          # Partition table (shared)
├── firmware-supermini.bin  # Firmware for ESP32-S3 Supermini
├── firmware-xiao.bin       # Firmware for XIAO ESP32S3
├── manifest-supermini.json # Web installer manifest for Supermini
└── manifest-xiao.json      # Web installer manifest for XIAO
```

## Manifest Files
The manifest files tell ESP32 Web Tools what files to flash and at which memory offsets:

### Supermini: `/releases/latest/manifest-supermini.json`
- Bootloader at offset 0x0000
- Partitions at offset 0x8000  
- Firmware at offset 0x10000

### XIAO: `/releases/latest/manifest-xiao.json`
- Same structure but uses firmware-xiao.bin

## Update Process
To update firmware releases:

1. **Windows**: Run `update-release.bat`
2. **PowerShell**: Run `./update-release.ps1`

These scripts will:
- Build latest firmware for both boards
- Copy binaries to web directory
- Update manifest files automatically

## Testing
- Navigate to: http://localhost:4321/flash
- Click "Install Firmware" buttons for each board type
- Ensure browser supports Web Serial (Chrome, Edge, Opera)

## Production Deployment
For production, ensure:
1. Files are served over HTTPS
2. Proper MIME types for .bin files
3. CORS headers allow Web Serial access
4. Regular updates via automation scripts

## Browser Requirements
- ✅ Chrome/Chromium
- ✅ Microsoft Edge  
- ✅ Opera
- ❌ Firefox (no Web Serial support)
- ❌ Safari (no Web Serial support)

## File Sizes (Current)
- Bootloader: ~15KB
- Partitions: ~3KB  
- Firmware Supermini: ~1.1MB
- Firmware XIAO: ~1.1MB
