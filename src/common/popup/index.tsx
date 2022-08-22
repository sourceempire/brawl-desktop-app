import ReactDOM from 'react-dom/client';
import { NotificationLevel } from 'types/Notification';
import { Notification } from './Popup';

type NotificationOptions = {
  timer?: number;
};

const setNotification = (
  message: string,
  level: NotificationLevel,
  options?: NotificationOptions
) => {
  const element = document.createElement('div');
  document.body.appendChild(element);
  const root = ReactDOM.createRoot(element as HTMLDivElement);

  root.render(
    <Notification
      text={message}
      level={level}
      timer={options?.timer}
      onClose={() => {
        root.unmount();
        document.body.removeChild(element);
      }}
    />
  );
};

const popup = {
  info: (message: string, options?: NotificationOptions) =>
    setNotification(message, NotificationLevel.INFO, options),
  warning: (message: string, options?: NotificationOptions) =>
    setNotification(message, NotificationLevel.WARNING, options),
  error: (message: string, options?: NotificationOptions) =>
    setNotification(message, NotificationLevel.ERROR, options)
};

export default popup;
