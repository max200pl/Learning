# Tray

[Tray Windows](./diagrams/003%20-%20tray%20windows.png)
[Tray OSX](./diagrams/003%20-%20tray%20osx.png)

## Create Tray

```javascript
const { app, Tray, Menu } = require('electron');

let tray = null;

app.on('ready', () => {
  tray = new Tray('./icon.png');
});
```

## Set position bounds System Tray

[on CLick bounds position](./diagrams/003%20-%20window%20bounds.png)
[Window bounds](./diagrams/003%20-%20windows%20bounds.png)

```javascript

tray = new Tray('./icon.png');

tray.on('click', (event, bounds) => {
    const { x, y } = bounds;
    const { width, height } = window.getBounds();
    const yPosition = process.platform === 'darwin' ? y : y - height;

    mainWindow.setBounds({
        x: x - width / 2
        y:  y,
        width,
        height
    });

    if (mainWindow.isVisible()) {
        mainWindow.hide();
    } else {
        mainWindow.show();
    }
});

```
