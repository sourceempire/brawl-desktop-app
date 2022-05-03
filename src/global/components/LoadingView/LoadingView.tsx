import { Wrapper } from './LoadingView.styles';
import Window from '../../../window/Window';
import { useEffect } from 'react';

const openMainWindow = () => {
  Window.openMainWindow();
};

const openLoginWindow = () => {
  Window.openLoginWindow();
};

const LoadingView = () => {
  const testing = (test: string) => {
    console.log(test);
  };

  useEffect(() => {
    Window.checkForUpdates();
    Window.addUpdateCheckListener(testing);
    Window.addUpdateAvailableListener(testing);
    Window.addUpdateDownloadedListener(testing);
    Window.addUpdateNotAvailableListener(testing);
  }, []);

  return (
    <Wrapper>
      <p>This is where the loading should happen</p>
      <button onClick={openMainWindow}>Open main window</button>
      <button onClick={openLoginWindow}>Open login window</button>
    </Wrapper>
  );
};

export default LoadingView;
