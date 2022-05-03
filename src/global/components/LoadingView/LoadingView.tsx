import { Text, Wrapper } from './LoadingView.styles';
import Window from '../../../window/Window';
import { useEffect, useState } from 'react';
import type { ProgressInfo } from 'electron-updater';

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
  UPDATE_DOWNLOADED = 'Update cownload completed',
  NO_TEXT = ''
}

const LoadingView = () => {
  const [loadingText, setLoadingText] = useState<LoadingText>(LoadingText.NO_TEXT);
  const [downloadInfo, setDowloadInfo] = useState<ProgressInfo>();

  // progress ProgressInfo
  // bytesPerSecond
  // percent
  // total
  // transferred

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
    setLoadingText(LoadingText.DOWNLOAD_PROGRESS);
    // TODO
    // restart app
  };

  const onUpdateNotAvailable = () => {
    console.log('Update not available');
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
      <p>This is where the loading should happen</p>
      <button onClick={openMainWindow}>Open main window</button>
      <button onClick={openLoginWindow}>Open login window</button>

      {loadingText === LoadingText.DOWNLOAD_PROGRESS && downloadInfo !== undefined && (
        <>
          <Text>{downloadInfo.bytesPerSecond}</Text>
          <Text>{downloadInfo.delta}</Text>
          <Text>{downloadInfo.percent}</Text>
          <Text>{downloadInfo.total}</Text>
          <Text>{downloadInfo.transferred}</Text>
        </>
      )}
      <Text>{loadingText}</Text>
    </Wrapper>
  );
};

export default LoadingView;
