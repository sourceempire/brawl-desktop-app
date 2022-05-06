export enum UpdateStatus {
  CHECKING_UPDATE = 'Checking for updates',
  UPDATE_AVAILABLE = 'New update available',
  DOWNLOAD_PROGRESS = 'Downloading update...',
  UPDATE_DOWNLOADED = 'Download completed',
  NO_UPDATE_AVAILABLE = ''
}

export enum PlatformName {
  MAC = 'darwin',
  WINDOWS = 'win32'
}

export type AuthType = 'password' | 'openid';
