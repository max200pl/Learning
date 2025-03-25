# Electron - Organisation Code

## Organisation Tray

[Organisation Tray](./diagrams/003%20-%20tray.png)

```javascript
const electron = require("electron");
const { Tray } = electron;

class TimerTray extends Tray {
  constructor(iconPath, window) {
    this.window = window;
    super(iconPath);
  }

    render() {
        this.setToolTip("Timer App");
        this.on("click", this.onClick);
        this.on("right-click", this.onRightClick);
    }

    onClick(event, bounds) {
        const { x, y } = bounds;
        const { height, width } = this.window.getBounds();

        if (this.window.isVisible()) {
            this.window.hide();
        } else {
            const yPosition = process.platform === "win32" ? y : y - height;
            this.window.setBounds({
                x: x - width / 2,
                y: yPosition,
                height,
                width
            });
            this.window.show();
        }
    }
}

module.exports = TimerTray;
```
