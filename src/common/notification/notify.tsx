import ReactDOM from 'react-dom/client';
import { NotificationLevel } from 'types/Notification';
import { Notification } from './Notification';

const sendNotification = (message: string, level: NotificationLevel) => {
  const element = document.createElement('div');
  document.body.appendChild(element);
  const root = ReactDOM.createRoot(element as HTMLDivElement);

  root.render(
    <Notification
      text={message}
      level={level}
      onClose={() => {
        root.unmount();
        document.body.removeChild(element);
      }}
    />
  );
};

export const notify = {
  info: (message: string) => sendNotification(message, NotificationLevel.INFO),
  warning: (message: string) => sendNotification(message, NotificationLevel.WARNING),
  error: (message: string) => sendNotification(message, NotificationLevel.ERROR)
};
