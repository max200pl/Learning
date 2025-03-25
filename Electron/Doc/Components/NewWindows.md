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

## On Blue Window

1. `doc` is a reference to the document object in the main window.
2. `doc.hide` is a function that hides the document object.

```javascript

app.on("ready", () => {
    app.doc.hide();

    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
    });


    mainWindow.on("blur", () => {
        mainWindow.hide();
    });
});
```
