# New Windows in Electron

## Create Main Window

```javascript
const { app, BrowserWindow } = electron;

mainWindow = new BrowserWindow({
    webPreferences: {
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
    },
});

mainWindow.loadURL(`file://${__dirname}/main.html`);
mainWindow.on("closed", () => app.quit());
```

## Create Child Window

```javascript

function createChildWindow() {
    childWindow = new BrowserWindow({
        parent: mainWindow,
        modal: true,
        show: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
    });

    childWindow.loadURL(`file://${__dirname}/child.html`);
    childWindow.once("ready-to-show", () => childWindow.show());
    childWindow.on("closed", () => childWindow = null);
}
```
