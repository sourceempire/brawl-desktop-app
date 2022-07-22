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

if (window.bridge) {
  // if electron renderer thread

  Window = {
    openMainWindow: window.bridge.openMainWindow,
    openLoginWindow: window.bridge.openLoginWindow,
    openAuthWindow: window.bridge.openAuthWindow,
    closeMainWindow: window.bridge.closeMainWindow,
    closeLoginWindow: window.bridge.closeLoginWindow,
    openInBrowser: window.bridge.openInBrowser,
    checkForUpdates: window.bridge.checkForUpdates,
    addUpdateCheckListener: window.bridge.addUpdateCheckListener,
    addUpdateAvailableListener: window.bridge.addUpdateAvailableListener,
    addDownloadProgressListener: window.bridge.addDownloadProgressListener,
    addUpdateDownloadedListener: window.bridge.addUpdateDownloadedListener,
    addUpdateNotAvailableListener: window.bridge.addUpdateNotAvailableListener,
    addUpdateErrorListener: window.bridge.addUpdateErrorListener,
    addLoginResultListener: window.bridge.addLoginResultListener,
    removeLoginResultListener: window.bridge.removeLoginResultListener,
    quitAndInstall: window.bridge.quitAndInstall,
    focus: window.bridge.focus
  };
}

export default Window;
