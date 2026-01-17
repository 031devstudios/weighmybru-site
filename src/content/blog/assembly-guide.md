---
title: 'WeighMyBru Assembly Guide'
description: 'Complete step-by-step video guide for assembling your WeighMyBru smart coffee scale.'
pubDate: 'Sep 25 2025'
heroImage: '../../assets/images/pic2.png'
tags: ['assembly', 'hardware', 'diy', 'weighmybru']
---

Ready to build your WeighMyBru smart coffee scale? This comprehensive assembly guide will walk you through every step of the process, from unpacking your components to your first brew.

## Assembly Video Tutorial

Follow along with our detailed assembly video guide:

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin: 2rem 0;">
  <iframe 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
    src="https://www.youtube.com/embed/O5SP40Liuq0" 
    title="WeighMyBru Assembly Guide" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
  </iframe>
</div>

## Bill Of Materials
> ⚠️ **Warning** ⚠️ <br>
There is a known issue with certain ESP32-S3 Supermini board where they are NOT discoverable using GaggiMate. The recommended board is the Seeed Studio XIAO ESP32S3 listed in the BOM below. <br> <br>
**NOTE** <br>
Ensure the correct items are selected when purchasing. Some of the links have multiple options. It is always a good idea to purchase extra boards for items like HX711 or Capacitive Touch Pads, as sometimes depinning these can destroy the boards traces.

| Qty |                 Item                |             Aliexpress Link                |        Amazon Link       |
|-----|-------------------------------------|--------------------------------------------|--------------------------|
|  1  | 500g Mini Loadcell (I-shaped)       | https://s.click.aliexpress.com/e/_c4C1w6PZ | https://a.co/d/6kvxZ0H |  
|  1  | HX711                               | https://s.click.aliexpress.com/e/_c3TSpcUT | https://a.co/d/3KiYRkA |  
|  1  | Seeed Studio XIAO ESP32S3           | https://s.click.aliexpress.com/e/_c2R3kzRZ | https://a.co/d/iER4CEr |  
|  2  | Capacitive Tocuh Pads               | https://s.click.aliexpress.com/e/_c3WIlVuX | https://a.co/d/014di6l |  
|  1  | 0.91" SSD1306 OLED Display          | https://s.click.aliexpress.com/e/_c3kybwLD | https://a.co/d/9UClWku |  
|  1  | JST-PH 2.0 Male Connector           | https://s.click.aliexpress.com/e/_c3F8rJlv | https://a.co/d/3BZGuHW |  
|  1  | Slide Switch (5mm handle)           | https://s.click.aliexpress.com/e/_c4nZfmFD | https://a.co/d/9KRqMyF |  
|  1  | Hookup Wire (Various Colors)        || https://a.co/d/1Fs8os9 |  
|  2  | M3x5x4 Heat Set Inserts             || https://a.co/d/bnQD7Iu |  
|  16 | M1.7x4 Self Tapping Screws          || https://a.co/d/1np5Nes |  
|  4  | M3x12 Button Head Screws            || https://a.co/d/iqM3d6E |  
|  2  | 100K ohm 1% 1/4w resistors          || https://a.co/d/3R0YmGM |  
|  4  | Self-Adhesive Rubber Feet           || https://a.co/d/0q9TRmR |  
|  1  | Double Sided Tape (To hold Battery) || https://a.co/d/gM5SWwH |
|  1  | 800mAh Li-ion Battery               || https://a.co/d/gbr1Yft |
<br>    

## Wiring Diagram

Seeed Studio XIAO ESP32S3
<img src="/images/xiao-wiring.png" alt="XIAO Wiring Diagram" width="600" height="600"><br>

ESP32 Supermini
<img src="/images/wiring-diagram.png" alt="Supermini Wiring Diagram" width="600" height="600"><br>

## Assembly Steps Overview

### 1. PCB Preparation
- Install ESP32 headers
- Mount load cell amplifier
- Check all connections

### 2. Load Cell Mounting
- Secure load cell to base plate
- Connect load cell wires to PCB
- Test weight measurements

### 3. Enclosure Assembly
- Install PCB in bottom case
- Route cables properly
- Secure top and bottom halves

### 4. Calibration
- Power on the scale
- Connect to WeighMyBru app
- Run calibration sequence

## Troubleshooting

**Scale not powering on?**
- Check battery connections
- Verify power switch position
- Test with USB power

**Weight readings incorrect?**
- Recalibrate with known weights
- Check load cell connections
- Verify mounting is secure

**Bluetooth not connecting?**
- Reset ESP32
- Check app permissions
- Verify pairing mode

## Next Steps

Once assembled:
1. 📱 Download compatible brewing apps (Bean Conqueror, GaggiMate)
2. ⚖️ Calibrate with precision weights
3. ☕ Start brewing amazing coffee!

## Need Help?

Join our community Discord for assembly help and brewing tips: [WeighMyBru Discord](https://discord.gg/vacg6QbQEh)

---

*Happy brewing! ☕*
