import { useEffect } from 'react';
import { loginValidate } from 'api/requests/AuthRequests';
import { UpdateStatus, useAppUpdater } from 'global/hooks/useAppUpdater';
import { Animation, ProgressBar } from 'ui';
import Window from 'window';
import { LoadingStatusText, TemporaryButton, Wrapper } from './LoadingView.styles';
import loadingExample from 'assets/animations/loading-example2.json';

const LoadingView = () => {
  const { checkForUpdates, updateStatus, hasProgressInfo, progressInfo } = useAppUpdater();
  loadingExample.layers[0];
  useEffect(() => {
    checkForUpdates();
  }, [checkForUpdates]);

  const tryLogin = async () => {
    try {
      await loginValidate();
      Window.openMainWindow();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.status === 200) {
        Window.openLoginWindow();
      } else {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (updateStatus === UpdateStatus.UPDATE_DOWNLOADED) {
      Window.quitAndInstall();
    }
    if (updateStatus === UpdateStatus.NO_UPDATE_AVAILABLE) {
      tryLogin();
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
