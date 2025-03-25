# Electron - Organisation Code

## Organisation Tray

[Organisation Tray](./diagrams/003%20-%20tray.png)

```javascript
const electron = require("electron");
const { Tray } = electron;

class TimerTray extends Tray {
  constructor(iconPath) {
    super(iconPath);
  }
}

module.exports = TimerTray;
```
