import { useEffect } from 'react';
import { useAuth } from 'api/requests';
import Window from 'electron-window';
import { useAppUpdater } from 'common/hooks';
import { ProgressBar } from 'common/ui';
import { LoadingAnimation, LoadingStatusText, Wrapper } from './LoadingView.styles';
import { UpdateStatus } from './types';
import loadingExample from 'assets/animations/loading-example.json';

const LoadingView = () => {
  const { checkForUpdates, updateStatus, hasProgressInfo, progressInfo } = useAppUpdater();
  const { loginValidate, isLoading: tryingToLogIn, error } = useAuth();

  console.log(tryingToLogIn);

  useEffect(() => {
    checkForUpdates();
  }, [checkForUpdates]);

  useEffect(() => {
    if (updateStatus === UpdateStatus.UPDATE_DOWNLOADED) {
      Window.quitAndInstall();
    }
    if (updateStatus === UpdateStatus.NO_UPDATE_AVAILABLE) {
      loginValidate();
    }
  }, [updateStatus, loginValidate]);

  if (error) {
    console.error(error);
    return null;
  }

  const status = tryingToLogIn ? 'Trying to log in...' : updateStatus;

  return (
    <Wrapper>
      <LoadingAnimation src={loadingExample} />
      <LoadingStatusText>{status}</LoadingStatusText>
      {hasProgressInfo && (
        <>
          <ProgressBar value={progressInfo?.percent} unit={'percent'} />
        </>
      )}
    </Wrapper>
  );
};

export default LoadingView;
