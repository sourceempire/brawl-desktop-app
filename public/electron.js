const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
// const dialog = electron.dialog
const path = require("path");
const isDev = require("electron-is-dev");

const { autoUpdater } = require("electron-updater");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1440,
    height: 900,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  
  const url = isDev
    ? "http://localhost:3000"
    : `file://${path.join(__dirname, "../build/index.html")}`;
  mainWindow.loadURL(url);
  mainWindow.on("closed", () => (mainWindow = null));

  if (!isDev) {
    autoUpdater.checkForUpdatesAndNotify()
  }
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});

electron.ipcMain.on("toggleFullScreen", () => {
  const currentWindow = BrowserWindow.getFocusedWindow()
  currentWindow.setFullScreen(!currentWindow.isFullScreen())
})


// autoUpdater.on("update-available", (_event, releaseNotes, releaseName) => {
// 	const dialogOpts = {
// 		type: 'info',
// 		buttons: ['Ok'],
// 		title: 'Application Update',
// 		message: process.platform === 'win32' ? releaseNotes : releaseName,
// 		detail: 'A new version is being downloaded.'
// 	}
// 	dialog.showMessageBox(dialogOpts, (response) => {

// 	});
// })

// autoUpdater.on("update-downloaded", (_event, releaseNotes, releaseName) => {
// 	const dialogOpts = {
// 		type: 'info',
// 		buttons: ['Restart', 'Later'],
// 		title: 'Application Update',
// 		message: process.platform === 'win32' ? releaseNotes : releaseName,
// 		detail: 'A new version has been downloaded. Restart the application to apply the updates.'
// 	};
// 	dialog.showMessageBox(dialogOpts).then((returnValue) => {
// 		if (returnValue.response === 0) autoUpdater.quitAndInstall()
// 	})
// });
