export function getPlatform() {
  try {
    return process.platform;
  } catch (e) {
    return '';
  }
}
