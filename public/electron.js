/* eslint-disable */

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
// const dialog = electron.dialog
const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');

const { autoUpdater } = require('electron-updater');

let mainWindow;
let loadingWindow;
let loginWindow;

const backgroundColor = '#232333';
/**
 *
 * @param {*} windowObject
 * @param {*} options
 */
async function createWindow(appPath, options = {}) {
  const window = new BrowserWindow({
    ...options,
    backgroundColor,
    ...(options.frame !== false && {
      titleBarStyle: 'hidden',
      ...(process.platform === 'win32' && {
        titleBarOverlay: {
          color: backgroundColor,
          symbolColor: '#FFFFFF'
        }
      })
    }),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  await window.loadURL(
    isDev
      ? `http://localhost:3000/#/${appPath}`
      : `${path.join(__dirname, `../build/index.html`)}#/${appPath}`
  );

  return window;
}

async function createMainWindow() {
  if (mainWindow) {
    mainWindow.focus();
  } else {
    const mainWindow = await createWindow('main', {
      width: 1440,
      height: 900,
      minHeight: 900,
      minWidth: 1440
    });

    mainWindow.on('closed', () => (mainWindow = null));
  }
}

async function createLoginWindow() {
  if (loginWindow) {
    loginWindow.focus();
  } else {
    loginWindow = await createWindow('login', {
      width: 400,
      height: 900,
      resizable: false
    });

    loginWindow.on('closed', () => (loginWindow = null));
  }
}

async function createLoadingWindow() {
  loadingWindow = await createWindow('loading', {
    width: 500,
    height: 500,
    resizable: false,
    frame: false
  });

  loadingWindow.on('closed', () => (loadingWindow = null));

  if (!isDev) {
    autoUpdater.checkForUpdatesAndNotify();

    setInterval(() => {
      loadingWindow.webContents.send('testing', 'Testing testing');
    }, 1000);

    autoUpdater.on('checking-for-update', () => {
      loadingWindow.webContents.send('checking-for-update', 'Testing checking-for-update');
    });

    autoUpdater.on('update-available', () => {
      loadingWindow.webContents.send('update-available', 'Testing update-available');
    });

    autoUpdater.on('update-downloaded', () => {
      loadingWindow.webContents.send('update-downloaded', 'Testing update-downloaded');
    });

    autoUpdater.on('update-not-available', () => {
      loadingWindow.webContents.send('update-not-available', 'Testing update-not-available');
    });
  }
}

app.on('ready', createLoadingWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (loadingWindow === null) {
    createLoadingWindow();
  }
});

electron.ipcMain.on('openMainWindow', () => {
  createMainWindow();
});

electron.ipcMain.on('openLoginWindow', () => {
  createLoginWindow();
});

autoUpdater.on('error', () => console.log('error'));

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
