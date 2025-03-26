const electron = require("electron");
const path = require("path");
const TimerTray = require("./app/timer_tray");
const MainWindow = require("./app/main_window");

const { app, ipcMain } = electron;

let mainWindow;
let tray; // Avoid garbage collection!!

app.on("ready", () => {
  process.platform === "win32" ? null : app.dock.hide(); // Hide the dock icon on macOS

  mainWindow = new MainWindow(`file://${__dirname}/src/index.html`);

  const iconName =
    process.platform === "win32" ? "windows-icon.png" : "iconTemplate.png";
  const iconPath = path.join(__dirname, `./src/assets/${iconName}`);
  tray = new TimerTray(iconPath, mainWindow);
});

ipcMain.on("update-timer", (event, timeLeft) => {
  console.log("update-timer: ", timeLeft);
  tray.setTitle(timeLeft);
});
