/* eslint-disable */

let Window = {
  // dummy window for use outside of electron
  version: null,
  openMainWindow: () => {},
  openLoginWindow: () => {},
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
  addUpdateDownloadedListener: (callback) => {},
  addUpdateNotAvailableListener: (callback) => {}
};

if (window.require) {
  // if in electron
  const { ipcRenderer, shell } = window.require('electron'); // window require to avoid conflict with create react app's own import system

  const addListener = (channel, callback) => ipcRenderer.on(channel, (_, args) => callback(args));

  Window = {
    openMainWindow: () => ipcRenderer.send('openMainWindow'),
    openLoginWindow: () => ipcRenderer.send('openLoginWindow'),
    openInBrowser: (url) => shell.openExternal(url),

    checkForUpdates: () => ipcRenderer.send('check-for-update'),
    addUpdateCheckListener: (callback) => addListener('checking-for-update', callback),
    addUpdateAvailableListener: (callback) => addListener('update-available', callback),
    addUpdateDownloadedListener: (callback) => addListener('update-downloaded', callback),
    addUpdateNotAvailableListener: (callback) => addListener('update-not-available', callback)
  };
}

export default Window;
