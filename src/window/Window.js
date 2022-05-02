/* eslint-disable */

const listeners = {};

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
  addUpdateCheckListener: (callback) => {},
  addListener: (channel, callback) => {},
  removeListener: (channel) => {}
};

if (window.require) {
  // if in electron
  const { ipcRenderer, shell } = window.require('electron'); // window require to avoid conflict with create react app's own import system
  Window = {
    openMainWindow: () => ipcRenderer.send('openMainWindow'),
    openLoginWindow: () => ipcRenderer.send('openLoginWindow'),
    openInBrowser: (url) => shell.openExternal(url),
    addUpdateCheckListener: (callback) =>
      ipcRenderer.on('checking-for-update', (_, args) => callback(args)),

    addListener: (channel, callback) =>
      (listeners[channel] = ipcRenderer.on(channel, (event, args) => callback(args))),
    removeListener: (channel) => ipcRenderer.removeListener(channel, listeners[channel])
  };
}

export default Window;
