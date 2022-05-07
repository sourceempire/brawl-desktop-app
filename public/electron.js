/* eslint-disable */
const { app, BrowserWindow, ipcMain, session } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
const { autoUpdater } = require('electron-updater');

let mainWindow;
let loadingWindow;
let loginWindow;

const backgroundColor = '#232333';

async function createWindow(appPath, options = {}) {
  const window = new BrowserWindow({
    frame: false,
    backgroundColor,
    ...options,
    ...(appPath !== 'loading' && {
      titleBarStyle: 'hidden',
      ...(process.platform === 'win32' && {
        titleBarOverlay: {
          color: backgroundColor,
          symbolColor: '#FFFFFF'
        }
      })
    }),
    webPreferences: {
      devTools: isDev,
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

    if (loadingWindow && !loadingWindow.isDestroyed()) {
      loadingWindow.close();
    }
  }
}

async function createLoginWindow() {
  if (loginWindow && !loginWindow.isDestroyed()) {
    loginWindow.focus();
  } else {
    loginWindow = await createWindow('login', {
      width: 300,
      height: 500,
      resizable: false
    });

    loginWindow.on('closed', () => (loginWindow = null));

    if (loadingWindow && !loadingWindow.isDestroyed()) {
      loadingWindow.close();
    }
  }
}

async function createLoadingWindow() {
  if (loadingWindow && !loadingWindow.isDestroyed()) {
    loadingWindow.focus();
  } else {
    loadingWindow = await createWindow('loading', {
      width: 300,
      height: 300,
      resizable: false,
      backgroundColor: '#363750'
    });

    if (!isDev) {
      const checkingForUpdate = () => {
        loadingWindow.webContents.send('checking-for-update', 'Testing checking-for-update');
      };

      const updateAvailable = () => {
        loadingWindow.webContents.send('update-available', 'Testing update-available');
      };

      const downloadProgress = (progressInfo) => {
        loadingWindow.webContents.send('download-progress', progressInfo);
      };

      const updateDownloaded = () => {
        loadingWindow.webContents.send('update-downloaded', 'Testing update-downloaded');
      };

      const updateNotAvailable = () => {
        loadingWindow.webContents.send('update-not-available', 'Testing update-not-available');
      };

      const updateError = () => {
        loadingWindow.webContents.send('update-not-available', 'Testing update-error');
      };

      autoUpdater.on('checking-for-update', checkingForUpdate);
      autoUpdater.on('update-available', updateAvailable);
      autoUpdater.on('download-progress', downloadProgress);
      autoUpdater.on('update-downloaded', updateDownloaded);
      autoUpdater.on('update-not-available', updateNotAvailable);
      autoUpdater.on('error', updateError);

      loadingWindow.on('closed', () => {
        autoUpdater.removeListener('checking-for-update', checkingForUpdate);
        autoUpdater.removeListener('update-available', updateAvailable);
        autoUpdater.removeListener('download-progress', downloadProgress);
        autoUpdater.removeListener('update-downloaded', updateDownloaded);
        autoUpdater.removeListener('update-not-available', updateNotAvailable);
        autoUpdater.removeListener('error', updateError);
        loadingWindow = null;
      });
    }
  }
}

app.on('ready', () => {
  session.defaultSession.webRequest.onBeforeSendHeaders((details, callback) => {
    // fix undefined origin headers when running from file. Cases: GET -> undefined, POST -> 'null', websocket -> 'file://'
    if (
      details.requestHeaders['Origin'] === undefined ||
      details.requestHeaders['Origin'] == 'null' ||
      details.requestHeaders['Origin'] == 'file://'
    ) {
      details.requestHeaders['Origin'] = 'electron://brawl-gaming-app';
    }
    callback({ cancel: false, requestHeaders: details.requestHeaders });
  });
  createLoadingWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// TODO -> This is not evaluated, should probably be implemented in a different way to prevent unwanted behaviour
app.on('activate', () => {
  if (loadingWindow === null) {
    createLoadingWindow();
  }
});

ipcMain.on('check-for-update', (event) => {
  if (!isDev) {
    //TODO -> determine difference with checkForUpdatesAndNotify
    autoUpdater.checkForUpdates();
  } else {
    const { id: windowId } = event.sender;
    const senderWindow = BrowserWindow.fromId(windowId);
    if (senderWindow) {
      senderWindow.webContents.send('update-not-available');
    }
  }
});

ipcMain.on('open-main-window', () => createMainWindow());
ipcMain.on('open-login-window', () => createLoginWindow());
ipcMain.on('close-main-window', () => {
  if (mainWindow && !mainWindow.isDestroyed()) mainWindow.close();
});
ipcMain.on('close-login-window', () => {
  if (loginWindow && !loginWindow.isDestroyed()) loginWindow.close();
});
ipcMain.on('quit-and-install', () => autoUpdater.quitAndInstall());

// SSL/TSL: this is the self signed certificate support
if (isDev) {
  app.on('certificate-error', (event, webContents, url, error, certificate, callback) => {
    // On certificate error we disable default behaviour (stop loading the page)
    // and we then say "it is all fine - true" to the callback
    event.preventDefault();
    callback(true);
  });
}

app.commandLine.appendSwitch('ignore-certificate-errors');
