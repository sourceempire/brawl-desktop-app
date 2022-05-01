const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
// const dialog = electron.dialog
const path = require("path");
const isDev = require("electron-is-dev");

const { autoUpdater } = require("electron-updater");

let mainWindow;
let loadingWindow;
let loginWindow;

const backgroundColor = "#232333";


function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 1440,
    height: 900,
    minHeight: 900,
    minWidth: 1440,
    backgroundColor,
    titleBarStyle: "hidden",
    ...process.platform === "win32" && {
      titleBarOverlay: {
        color: backgroundColor,
        symbolColor: '#FFFFFF',
      }
    },
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  const url = isDev
    ? "http://localhost:3000/home"
    : `file://${path.join(__dirname, "../build/index.html/home")}`;
  mainWindow.loadURL(url);
  mainWindow.on("closed", () => (mainWindow = null));

  if (!isDev) {
    autoUpdater.checkForUpdatesAndNotify()
  }
}

function createLoginWindow() {
  loginWindow = new BrowserWindow({
    width: 400,
    height: 900,
    resizable: false,
    backgroundColor,
    titleBarStyle: "hidden",
    ...process.platform === "win32" && {
      titleBarOverlay: {
        color: backgroundColor,
        symbolColor: '#FFFFFF',
      }
    },
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  const url = isDev
    ? "http://localhost:3000/login"
    : `file://${path.join(__dirname, "../build/index.html/login")}`;
  loginWindow.loadURL(url);
  loginWindow.on("closed", () => (loginWindow = null));
}

// app.on("ready", createWindow);

function createLoadingWindow() {
  loadingWindow = new BrowserWindow({
    width: 500,
    height: 500,
    resizable: false,
    frame: false,
    backgroundColor,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  const url = isDev
    ? "http://localhost:3000/loading"
    : `file://${path.join(__dirname, "../build/index.htm/loading")}`;
  loadingWindow.loadURL(url);
  loadingWindow.on("closed", () => (loadingWindow = null));
}



app.on("ready", createLoadingWindow)

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();   
  }
});

app.on("activate", () => {
  if (loadingWindow === null) {
    createLoadingWindow();
  }
});

electron.ipcMain.on("openMainWindow", () => {
  createMainWindow()
})

electron.ipcMain.on("openLoginWindow", () => {
  createLoginWindow()
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
