import { Text, Wrapper } from './LoadingView.styles';
import Window from '../../../window/Window';
import { useEffect, useState } from 'react';
import type { ProgressInfo } from 'electron-updater';
import { ProgressBar } from '../../../ui';

const openMainWindow = () => {
  Window.openMainWindow();
};

const openLoginWindow = () => {
  Window.openLoginWindow();
};

enum LoadingText {
  CHECKING_UPDATE = 'Checking for updates',
  UPDATE_AVAILABLE = 'New update available',
  DOWNLOAD_PROGRESS = 'Downloading new update',
  UPDATE_DOWNLOADED = 'Download completed',
  NO_TEXT = ''
}

const LoadingView = () => {
  const [loadingText, setLoadingText] = useState<LoadingText>(LoadingText.NO_TEXT);
  const [downloadInfo, setDowloadInfo] = useState<ProgressInfo>();

  const onUpdateCheck = () => {
    setLoadingText(LoadingText.CHECKING_UPDATE);
  };

  const onUpdateAvailable = () => {
    setLoadingText(LoadingText.UPDATE_AVAILABLE);
  };

  const onDownloadProgress = (info: ProgressInfo) => {
    setDowloadInfo(info);
    setLoadingText(LoadingText.DOWNLOAD_PROGRESS);
  };

  const onUpdateDownloaded = () => {
    setLoadingText(LoadingText.UPDATE_DOWNLOADED);
    // TODO
    // restart app
  };

  const onUpdateNotAvailable = () => {
    setLoadingText(LoadingText.NO_TEXT);
    // TODO
    // Check auth
    // if logged in -> openMainWindow
    // if logged out -> openLoginWindow
  };

  useEffect(() => {
    Window.checkForUpdates();
    Window.addUpdateCheckListener(onUpdateCheck);
    Window.addUpdateAvailableListener(onUpdateAvailable);
    Window.addDownloadProgressListener(onDownloadProgress);
    Window.addUpdateDownloadedListener(onUpdateDownloaded);
    Window.addUpdateNotAvailableListener(onUpdateNotAvailable);
  }, []);

  return (
    <Wrapper>
      <button onClick={openMainWindow}>Open main window</button>
      <button onClick={openLoginWindow}>Open login window</button>

      <Text>{loadingText}</Text>
      {loadingText === LoadingText.DOWNLOAD_PROGRESS && downloadInfo !== undefined && (
        <>
          <ProgressBar percent={downloadInfo.percent} />
        </>
      )}

      {loadingText === LoadingText.UPDATE_DOWNLOADED && (
        <button onClick={() => Window.quitAndInstall()}>Quit and install</button>
      )}
    </Wrapper>
  );
};

export default LoadingView;
