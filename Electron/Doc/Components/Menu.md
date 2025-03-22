# Menu Electron

## Notice

- If we using custom `Menu` we broken all keyboard shortcuts
- We need to implement all keyboard shortcuts manually

## Menu principal

### File

- New Todo
- Open Todo
- Save Todo
- Save As
- Exit

## How to use

```javascript
const { Menu } = require('electron')

const menu = Menu.buildFromTemplate([
  {
    label: 'File',
    submenu: [
      { label: 'New Todo' },
      { label: 'Open Todo' },
      { label: 'Save Todo' },
      { label: 'Save As' },
      { label: 'Exit' }
    ]
  }
])

Menu.setApplicationMenu(menu)
```

## Cross Platform Menu

```javascript
const { Menu } = require('electron')

const mainMenu = Menu.buildFromTemplate(menuTemplate);

Menu.setApplicationMenu(mainMenu);

if (process.platform === 'darwin') {
   menuTemplate.unshift({ label: "" });
}

const menuTemplate = [
  {
    label: 'File',
        submenu: [
        { label: 'New Todo' },
        { label: 'Open Todo' },
        { label: 'Save Todo' },
        { label: 'Save As' },
        { label: 'Exit' }
        ]
  }
]
```
