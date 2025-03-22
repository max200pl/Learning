# Window Developer Tools

## Fixe the Developer Tools

```javascript
if (process.env.NODE_ENV !== "production") {
  // "production" or "development" or "staging"

  menuTemplate.push({
    label: "View",
    submenu: [
      {
        label: "Toggle Developer Tools",
        accelerator:
          process.platform === "darwin" ? "Command+Alt+I" : "Ctrl+Shift+I",
        click(item, focusedWindow) {
          focusedWindow.toggleDevTools();
        },
      },
    ],
  });
}
```
