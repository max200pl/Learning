const electron = require("electron");
const { app, BrowserWindow, ipcMain } = electron;

let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    webPreferences: {
      webPreferences: { nodeIntegration: true, contextIsolation: false },
    },
  });
  mainWindow.loadURL(`file://${__dirname}/main.html`);
});

ipcMain.on("video:submit", (event, filePath) => {});
