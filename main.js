const { app, BrowserWindow } = require('electron')
const path = require('node:path')

function createWindow () {
    const mainWindow = new BrowserWindow({
        autoHideMenuBar: true,
        resizable: false,
        icon: "./app/favicon.ico",
        width: 1200,
        height: 850,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })
    mainWindow.loadFile('./app/index.html')
}

app.whenReady().then(() => {
    createWindow()
    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})