import { useEffect, useRef, useState } from 'react';
import { ProgressInfo } from 'electron-updater';
import Window from 'window';

export enum UpdateStatus {
  CHECKING_UPDATE = 'Checking for updates',
  UPDATE_AVAILABLE = 'New update available',
  DOWNLOAD_PROGRESS = 'Downloading update...',
  UPDATE_DOWNLOADED = 'Download completed',
  NO_UPDATE_AVAILABLE = ''
}

type AppUpdaterHook = () => {
  checkForUpdates: () => void;
  updateStatus?: UpdateStatus;
  hasProgressInfo: boolean;
  progressInfo?: ProgressInfo;
};

export const useAppUpdater: AppUpdaterHook = () => {
  const [updateStatus, setUpdateStatus] = useState<UpdateStatus>();
  const [progressInfo, setProgressInfo] = useState<ProgressInfo>();

  // Below code is for testing in development
  /* useEffect(() => {
    testUpdate(0);
  }, []);

  const testUpdate = (index: number) => {
    const currentStatus = Object.values(UpdateStatus)[index];
    if (currentStatus === UpdateStatus.DOWNLOAD_PROGRESS) {
      let percent = 0;
      const interval = setInterval(() => {
        if (percent === 100) clearInterval(interval);
        setProgressInfo({ percent, delta: 0, transferred: 0, total: 0, bytesPerSecond: 0 });
        percent += 2;
      }, 75);
    }
    setUpdateStatus(currentStatus);
    setTimeout(
      () => {
        testUpdate((index + 1) % 4);
      },
      currentStatus === UpdateStatus.DOWNLOAD_PROGRESS ? 5000 : 2000
    );
  }; */

  const { current: checkForUpdates } = useRef(() => {
    Window.checkForUpdates();
  });

  const onUpdateCheck = () => {
    setUpdateStatus(UpdateStatus.CHECKING_UPDATE);
  };

  const onUpdateAvailable = () => {
    setUpdateStatus(UpdateStatus.UPDATE_AVAILABLE);
  };

  const onDownloadProgress = (info: ProgressInfo) => {
    setProgressInfo(info);
    setUpdateStatus(UpdateStatus.DOWNLOAD_PROGRESS);
  };

  const onUpdateDownloaded = () => {
    setUpdateStatus(UpdateStatus.UPDATE_DOWNLOADED);
  };

  const onUpdateNotAvailable = () => {
    setUpdateStatus(UpdateStatus.NO_UPDATE_AVAILABLE);
  };

  useEffect(() => {
    Window.addUpdateCheckListener(onUpdateCheck);
    Window.addUpdateAvailableListener(onUpdateAvailable);
    Window.addDownloadProgressListener(onDownloadProgress);
    Window.addUpdateDownloadedListener(onUpdateDownloaded);
    Window.addUpdateNotAvailableListener(onUpdateNotAvailable);
  }, []);

  return {
    checkForUpdates,
    updateStatus,
    progressInfo,
    hasProgressInfo: updateStatus === UpdateStatus.DOWNLOAD_PROGRESS && progressInfo !== undefined
  };
};
