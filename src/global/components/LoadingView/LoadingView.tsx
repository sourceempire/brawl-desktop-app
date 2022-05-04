import { useEffect } from 'react';
import { UpdateStatus, useAppUpdater } from 'global/hooks/useAppUpdater';
import { Animation, ProgressBar } from 'ui';
import Window from 'window';
import { LoadingStatusText, TemporaryButton, Wrapper } from './LoadingView.styles';
import loadingExample from 'assets/animations/loading-example.json';

const LoadingView = () => {
  const { checkForUpdates, updateStatus, hasProgressInfo, progressInfo } = useAppUpdater();
  loadingExample.layers[0];
  useEffect(() => {
    checkForUpdates();
  }, [checkForUpdates]);

  useEffect(() => {
    if (updateStatus === UpdateStatus.UPDATE_DOWNLOADED) {
      console.log('Should quit and install updates');
      Window.quitAndInstall();
    }
    if (updateStatus === UpdateStatus.NO_UPDATE_AVAILABLE) {
      console.log('Should determine auth');
      Window.openLoginWindow();
      // TODO
      // Check auth
      // if logged in -> openMainWindow
      // if logged out -> openLoginWindow
    }
  }, [updateStatus]);

  return (
    <Wrapper>
      <TemporaryButton style={{ left: 0 }} onClick={Window.openLoginWindow}>
        Open login windosf
      </TemporaryButton>
      <TemporaryButton style={{ right: 0 }} onClick={Window.openMainWindow}>
        Open main window tes
      </TemporaryButton>

      <Animation src={loadingExample} />
      <LoadingStatusText>{updateStatus}</LoadingStatusText>
      {hasProgressInfo && (
        <>
          <ProgressBar value={progressInfo?.percent} unit={'percent'} />
        </>
      )}
    </Wrapper>
  );
};

export default LoadingView;
