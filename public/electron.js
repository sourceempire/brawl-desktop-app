/* eslint-disable */
const { app, BrowserWindow, ipcMain, session, Notification } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
const { autoUpdater } = require('electron-updater');

let mainWindow;
let loadingWindow;
let loginWindow;
let authWindow;

const backgroundColor = '#232334';

async function createWindow(appPath, options = {}) {
  const isExternal = appPath.startsWith('http');

  const window = new BrowserWindow({
    frame: isExternal,
    backgroundColor,
    ...options,
    ...(appPath !== 'loading' && {
      titleBarStyle: isExternal ? 'default' : 'hidden',
      ...(process.platform === 'win32' && {
        titleBarOverlay: {
          color: backgroundColor,
          symbolColor: '#FFFFFF'
        }
      })
    }),
    webPreferences: {
      devTools: isDev,
      nodeIntegration: false, // SHOULD ALWAYS BE FALSE. NEVER ALLOW RENDERER THREAD NODE ACCESS. BIG SECURITY HOLE
      contextIsolation: true, // SHOULD ALWAYS BE TRUE
      preload: path.join(__dirname, 'preload.js')
    }
  });

  try {
    if (isExternal) {
      await window.loadURL(appPath);
    } else {
      if (isDev) {
        const port = process.env.APP_PORT || 5173;

        await window.loadURL(`https://localhost:${port}/#/${appPath}`);
      } else {
        await window.loadFile(path.join(__dirname, `../build/index.html`), { hash: `/${appPath}` });
      }
    }
  } catch (error) {
    console.log(error);
  }

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
      width: 800,
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
      backgroundColor
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

async function createAuthWindow(authUrl) {
  if (authWindow && !authWindow.isDestroyed) {
    authWindow.focus();
  } else {
    authWindow = await createWindow(authUrl, {
      width: 450,
      height: 620,
      resizable: false,
      backgroundColor: '#363750'
    });

    authWindow.webContents.on('did-navigate', (_event, url) => {
      const { pathname, searchParams } = new URL(url);

      if (pathname.endsWith('failed')) {
        loginWindow.webContents.send('login-result', {
          status: 'failed',
          message: searchParams.get('error_message')
        });
      } else if (pathname.endsWith('complete')) {
        loginWindow.webContents.send('login-result', {
          status: 'complete'
        });
      } else if (pathname.endsWith('registration')) {
        loginWindow.webContents.send('login-result', {
          status: 'registration'
        });
      }

      authWindow.close();
    });

    authWindow.on('closed', () => (authWindow = null));
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

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createLoadingWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

ipcMain.on('notification', (_, { title, subtitle, body, silent, icon }) => {
  new Notification({ title, subtitle, body, silent, icon }).show();
});

ipcMain.on('focus', (event) => {
  const { id: windowId } = event.sender;
  const senderWindow = BrowserWindow.fromId(windowId);
  if (senderWindow) {
    senderWindow.show();
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
ipcMain.on('open-auth-window', (_, authUrl) => {
  createAuthWindow(authUrl);
});
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
