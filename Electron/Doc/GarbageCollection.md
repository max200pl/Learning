# Garbage Collection with Electron

## Garbage Collection in JavaScript

- JavaScript is a garbage-collected language, which means that it has an automatic memory management system.
- The garbage collector runs periodically to find and delete objects that are no longer needed by the program.

## Garbage Collection in Electron

- Electron uses the V8 JavaScript engine, which has a garbage collector that runs in the background to manage memory.
- The garbage collector in V8 is generational, which means that it divides objects into different generations based on their age.
- The garbage collector in V8 uses a mark-and-sweep algorithm to find and delete objects that are no longer needed.

## Problems with Garbage Collection in Electron

- Garbage collection in Electron can be a problem if not managed properly.
- If there are memory leaks in the program, the garbage collector may not be able to free up memory, leading to performance issues.

## Problems with New Windows Clearing Memory

- When a new window is created in Electron, it creates a new JavaScript context, which can lead to memory leaks if not managed properly.

![Creating a new Window](./diagrams/002%20-%20gc.png)

```javascript
ipcMain.on("todo:add", (event, todo) => {
    //! MEMORY LEAK
   addWindow.close();
});
```

```javascript

// Create a new BrowserWindow
let win = new BrowserWindow({ width: 800, height: 600 })

// Load a URL in the new window
win.loadURL('https://www.example.com')

// When the window is closed, dereference the window object
win.on('closed', () => {
  win = null
})

```
