*# LCD1602 (HD44780) — Quick Reference

## Type

- LCD 16x2
- Controller: HD44780
- Interface: parallel
- Mode: 4-bit (recommended)

---

## LCD1602 Pinout

```
1  VSS  GND
2  VDD  +5V
3  V0   Contrast (usually GND or through 10k)
4  RS   Register Select
5  RW   Read/Write (GND = write only)
6  E    Enable
7  D0   Data (not used in 4-bit mode)
8  D1   Data (not used)
9  D2   Data (not used)
10 D3   Data (not used)
11 D4   Data
12 D5   Data
13 D6   Data
14 D7   Data
15 A    Backlight +
16 K    Backlight -
```

---

## Connection to ATmega16 (4-bit)

```
LCD → ATmega16

1  VSS → GND
2  VDD → +5V
3  V0  → GND
4  RS  → PD4
5  RW  → GND
6  E   → PD5
11 D4  → PA4
12 D5  → PA5
13 D6  → PA6
14 D7  → PA7
15 A   → +5V (preferably through 150–220Ω)
16 K   → GND
```

LCD pins 7–10 (D0–D3) — do not connect.

---

## Mandatory Requirements

- Common GND between LCD and MCU
- RW always connected to GND
- Contrast (V0) must be connected
- D4–D7 used strictly in order

---

## Notes

- Jumper 1–3 is acceptable (max contrast)
- Jumper 14–16 is not acceptable
- Backlight (15–16) does not affect logic

---

## Operating Modes

- 8-bit: D0–D7 (pins 7–14)
- 4-bit: D4–D7 (pins 11–14)

*
