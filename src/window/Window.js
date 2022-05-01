

let Window = { // dummy window for use outside of electron
  version: null,
  openMainWindow: () => {},
  openLoginWindow: () => {},
  new: (args) => {
    return {
      loadURL: (url) => {
        window.open(url, '_blank');
      }
    }
  },
  openInBrowser: (url) => window.open(url, '_blank'),
  setSize: () => {},
};



if (window.require) { // if in electron
  const { ipcRenderer, shell } = window.require('electron'); // window require to avoid conflict with create react app's own import system
  Window = {
    openMainWindow: () => ipcRenderer.send("openMainWindow"),
    openLoginWindow: () => ipcRenderer.send("openLoginWindow"),
    openInBrowser: (url)  => shell.openExternal(url),
  };
}

export default Window;