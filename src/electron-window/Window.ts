/* eslint-disable */

let Window = {
  // dummy window for use outside of electron
  // version: null,
  openMainWindow: () => {
    location.href = '/#/main';
  },
  openLoginWindow: () => {
    location.href = '/#/login';
  },
  openAuthWindow: (authUrl: any) => {},
  closeMainWindow: () => {},
  closeLoginWindow: () => {},
  // new: (args: any) => {
  //   return {
  //     loadURL: (url: any) => {
  //       window.open(url, '_blank');
  //     }
  //   };
  // },
  openInBrowser: (url: any) => window.open(url, '_blank'),
  // setSize: () => {},

  checkForUpdates: () => {},
  addUpdateCheckListener: (callback: any) => {},
  addUpdateAvailableListener: (callback: any) => {},
  addDownloadProgressListener: (callback: any) => {},
  addUpdateDownloadedListener: (callback: any) => {},
  addUpdateNotAvailableListener: (callback: any) => {},
  addUpdateErrorListener: (callback: any) => {},

  addLoginResultListener: (callback: any) => {},
  removeLoginResultListener: () => {},

  quitAndInstall: () => {},

  //@ts-ignore
  notification: ({
    title,
    subtitle,
    body,
    silent,
    icon
  }: {
    title?: string;
    subtitle?: string;
    body?: string;
    silent?: string;
    icon?: string;
  }) => {},

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
    notification: window.bridge.notification,
    focus: window.bridge.focus
  };
}

export default Window;
