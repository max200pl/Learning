# Electron Project Setuping

## Project Setuping

### Step 1: Create a new project

- Create a new project folder.
- Open the terminal and navigate to the project folder.
- Run the following command to create a new project:

```bash
npm init -y
```

### Step 2: Install Electron

- Run the following command to install Electron:

```bash
npm install --save electron
```

### Step 3: Create the index.js file

- Create a new file named `index.js` in the project folder.
- Add the following code to the `index.js` file:

```javascript
const { app, BrowserWindow } = require('electron')
```

### Step 4: Add the start script to the package.json file

- Open the `package.json` file.

- Add the following code to the `scripts` section:

``` json
"scripts": {
  "start": "electron ."
}
```

### Step 5: Run the project

- Run the following command to start the Electron app:

```bash
npm run electron
```

### Step 6: Verify the Electron app

- The Electron app should open a new window with a blank page.

```javascript
const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')
}

