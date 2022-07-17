/* eslint-disable */

let Window = {
  // dummy window for use outside of electron
  version: null,
  openMainWindow: () => {
    location.href = '/#/main';
  },
  openLoginWindow: () => {
    location.href = '/#/login';
  },
  openAuthWindow: (authUrl) => {},
  closeMainWindow: () => {},
  closeLoginWindow: () => {},
  new: (args) => {
    return {
      loadURL: (url) => {
        window.open(url, '_blank');
      }
    };
  },
  openInBrowser: (url) => window.open(url, '_blank'),
  setSize: () => {},

  checkForUpdates: () => {},
  addUpdateCheckListener: (callback) => {},
  addUpdateAvailableListener: (callback) => {},
  addDownloadProgressListener: (callback) => {},
  addUpdateDownloadedListener: (callback) => {},
  addUpdateNotAvailableListener: (callback) => {},
  addUpdateErrorListener: (callback) => {},

  addLoginResultListener: (callback) => {},
  removeLoginResultListener: () => {},

  quitAndInstall: () => {},

  focus: () => {}
};

if (window.require) {
  // if in electron
  const { ipcRenderer, shell } = window.require('electron'); // window require to avoid conflict with create react app's own import system

  const addListener = (channel, callback) => ipcRenderer.on(channel, (_, args) => callback(args));
  const removeAllListeners = (channel) => ipcRenderer.removeAllListeners(channel);

  Window = {
    openMainWindow: () => ipcRenderer.send('open-main-window'),
    openLoginWindow: () => ipcRenderer.send('open-login-window'),
    openAuthWindow: (authUrl) => ipcRenderer.send('open-auth-window', authUrl),
    closeMainWindow: () => ipcRenderer.send('close-main-window'),
    closeLoginWindow: () => ipcRenderer.send('close-login-window'),

    openInBrowser: (url) => shell.openExternal(url),

    checkForUpdates: () => ipcRenderer.send('check-for-update'),
    addUpdateCheckListener: (callback) => addListener('checking-for-update', callback),
    addUpdateAvailableListener: (callback) => addListener('update-available', callback),
    addDownloadProgressListener: (callback) => addListener('download-progress', callback),
    addUpdateDownloadedListener: (callback) => addListener('update-downloaded', callback),
    addUpdateNotAvailableListener: (callback) => addListener('update-not-available', callback),
    addUpdateErrorListener: (callback) => addListener('update-error', callback),

    addLoginResultListener: (callback) => addListener('login-result', callback),
    removeLoginResultListener: () => removeAllListeners('login-result'),

    quitAndInstall: () => ipcRenderer.send('quit-and-install'),

    focus: () => ipcRenderer.send('focus')
  };
}

export default Window;
