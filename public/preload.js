/* eslint-disable */
/*
 * This file exposes node api calls on the renderer thread.
 * NEVER allow the renderer thread to directly access system level api's
 * such as ipcRenderer och shell
 */
const { contextBridge, ipcRenderer, shell } = require('electron');

const addListener = (channel, callback) => ipcRenderer.on(channel, (_, args) => callback(args));
const removeAllListeners = (channel) => ipcRenderer.removeAllListeners(channel);

contextBridge.exposeInMainWorld('bridge', {
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
  notification: (notificationData) => ipcRenderer.send('notification', notificationData),
  focus: () => ipcRenderer.send('focus'),
  getPlatform: () => process.platform
});
