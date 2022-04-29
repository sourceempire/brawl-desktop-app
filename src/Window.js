

let Window = { // dummy window for use outside of electron
  version: null,
  current: () => {
    return {
      setMinimumSize: () => {},
      setSize: () => {},
      setResizable: () => {},
      setPosition: () => {},
      on: () => {},
      isFullScreen: () => false,
      close: () => {},
      minimize: () => {},
      center: () => {},
      getBounds: () => {}, 
      setLoggedInSize: ()   => {},
      setLoggedOutSize: ()  => {},
      setLoadingSize: ()    => {}
    };
  },
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
    current: () => ipcRenderer.send("maximizeWindow"),
    //version: remote.app.getVersion(),
    //current:       ()     => remote.getCurrentWindow(),
    //new:           (args) => new remote.BrowserWindow(args),
    openInBrowser: (url)  => shell.openExternal(url),
    setSize: ({resizable, height, width}) => {
      // const win = remote.getCurrentWindow();
      // win.setResizable(resizable);
      // win.setMinimumSize(width, height);
      // win.setSize(width, height);
      // win.center()
    }
  };
}

export default Window;