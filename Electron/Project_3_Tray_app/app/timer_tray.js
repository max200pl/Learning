const electron = require("electron");
const { Tray } = electron;

class TimerTray extends Tray {
  constructor(iconPath, mainWindow) {
    super(iconPath);

    this.mainWindow = mainWindow;

    this.setToolTip("Timer App");
    this.on("click", this.onClick.bind(this));
  }

  onClick(event, bounds) {
    const { x, y } = bounds;

    const { height, width } = this.mainWindow.getBounds();
    const yPosition = process.platform === "darwin" ? y : y - height;
    const xPosition = x - width / 2;

    this.mainWindow.setBounds({
      x: xPosition,
      y: yPosition,
      height,
      width,
    });

    if (this.mainWindow.isVisible()) {
      this.mainWindow.hide();
    }
    this.mainWindow.show();
  }
}

module.exports = TimerTray;
