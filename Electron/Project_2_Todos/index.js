const electron = require("electron");
const { app, BrowserWindow, ipcMain, Menu } = electron;

let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    webPreferences: {
      webPreferences: { nodeIntegration: true, contextIsolation: false },
    },
  });
  mainWindow.loadURL(`file://${__dirname}/main.html`);

  const mainMenu = Menu.buildFromTemplate(menuTemplate);

  Menu.setApplicationMenu(mainMenu);
});

const menuTemplate = [
  {
    label: "File",
    submenu: [
      {
        label: "Add New Todo",
        click() {
          mainWindow.webContents.send("add-todo");
        },
      },
      {
        label: "Clear Todos",
      },
      {
        label: "Quit",
        accelerator: process.platform === "darwin" ? "Command+Q" : "Ctrl+Q",
        click() {
          app.quit();
        },
      },
    ],
  },
];

if (process.platform === "darwin") {
  menuTemplate.unshift({});
}
