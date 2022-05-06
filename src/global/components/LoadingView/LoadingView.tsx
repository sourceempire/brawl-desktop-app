import { useEffect } from 'react';
import { useAppUpdater, useAuth } from 'global/hooks';
import { UpdateStatus } from 'global/types';
import { ProgressBar } from 'ui';
import Window from 'window';
import { LoadingAnimation, LoadingStatusText, Wrapper } from './LoadingView.styles';
import loadingExample from 'assets/animations/loading-example.json';

const LoadingView = () => {
  const { checkForUpdates, updateStatus, hasProgressInfo, progressInfo } = useAppUpdater();
  const { loginValidate, isLoading: tryingToLogIn, error } = useAuth();

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
    console.log(error);
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
