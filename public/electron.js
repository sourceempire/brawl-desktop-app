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
  if (mainWindow && !mainWindow.isDestroyed()) {
    mainWindow.focus();
  } else {
    mainWindow = await createWindow('main', {
      width: 1440,
      height: 900,
      minHeight: 900,
      minWidth: 1440
    });

    mainWindow.on('closed', () => (mainWindow = null));
  }
}

async function createLoginWindow() {
  if (loginWindow && !loginWindow.isDestroyed()) {
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
  if (loadingWindow && !loadingWindow.isDestroyed()) {
    loadingWindow.focus();
  } else {
    loadingWindow = await createWindow('loading', {
      width: 500,
      height: 500,
      resizable: false,
      frame: false
    });

    electron.dialog.showMessageBox(loadingWindow, { message: 'Testar dialog' });

    if (!isDev) {
      const checkingForUpdate = () => {
        loadingWindow.webContents.send('checking-for-update', 'Testing checking-for-update');
      };

      const updateAvailable = () => {
        loadingWindow.webContents.send('update-available', 'Testing update-available');
      };

      const downloadProgress = () => {
        loadingWindow.webContents.send('download-progress', 'Testing download-progress');
      };

      const updateDownloaded = () => {
        loadingWindow.webContents.send('update-downloaded', 'Testing update-downloaded');
      };

      const updateNotAvailable = () => {
        loadingWindow.webContents.send('update-not-available', 'Testing update-not-available');
      };

      autoUpdater.on('checking-for-update', checkingForUpdate);
      autoUpdater.on('update-available', updateAvailable);
      autoUpdater.on('download-progress', downloadProgress);
      autoUpdater.on('update-downloaded', updateDownloaded);
      autoUpdater.on('update-not-available', updateNotAvailable);

      loadingWindow.on('closed', () => {
        autoUpdater.removeListener('checking-for-update', checkingForUpdate);
        autoUpdater.removeListener('update-available', updateAvailable);
        autoUpdater.removeListener('download-progress', downloadProgress);
        autoUpdater.removeListener('update-downloaded', updateDownloaded);
        autoUpdater.removeListener('update-not-available', updateNotAvailable);
        loadingWindow = null;
      });
    }
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

electron.ipcMain.on('check-for-update', () => {
  autoUpdater.checkForUpdates();
});

electron.ipcMain.on('openMainWindow', () => createMainWindow());
electron.ipcMain.on('openLoginWindow', () => createLoginWindow());

autoUpdater.on('error', () => console.log('error'));

// SSL/TSL: this is the self signed certificate support
if (isDev) {
  app.on('certificate-error', (event, webContents, url, error, certificate, callback) => {
    // On certificate error we disable default behaviour (stop loading the page)
    // and we then say "it is all fine - true" to the callback
    event.preventDefault();
    callback(true);
  });
}

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
