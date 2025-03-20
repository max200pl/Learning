const electron = require("electron");

const { app, BrowserWindow } = electron; // Replace BaseWindow with BrowserWindow

app.on("ready", () => {
  console.log("App is ready");
  const mainWindow = new BrowserWindow({}); // Replace BaseWindow with BrowserWindow
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});
