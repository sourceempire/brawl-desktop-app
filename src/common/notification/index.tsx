import ReactDOM from 'react-dom/client';
import { NotificationLevel } from 'types/Notification';
import Notification from './components/Notification';

const sendNotification = (message: string, level: NotificationLevel) => {
  console.log(message);
  const root = ReactDOM.createRoot(document.getElementById('notification-root') as HTMLDivElement);
  root.render(<Notification text={message} level={level} />);
};

export const notify = {
  info: (message: string) => sendNotification(message, NotificationLevel.INFO),
  warning: (message: string) => sendNotification(message, NotificationLevel.WARNING),
  error: (message: string) => sendNotification(message, NotificationLevel.ERROR)
};
