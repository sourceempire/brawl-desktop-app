declare global {
  interface Window {
    bridge: any | undefined;
  }
}

export function getPlatform() {
  if (window.bridge) {
    return window.bridge.getPlatform();
  } else {
    return '';
  }
}
