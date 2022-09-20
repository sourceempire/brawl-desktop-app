import { useCallback, useEffect } from 'react';
import Window from 'electron-window';
import { Notification } from 'types/notifications/Notifications';
import { getPushNotificationMessage } from '../push-notifications';
import { useServerEvents } from './useServerEvents';

export const usePushNotifications = () => {
  const { addServerEventListener, removeServerEventListener } = useServerEvents();

  const onPushNotification = useCallback(async (event: { notification: Notification }) => {
    const notification = event.notification;

    try {
      const message = await getPushNotificationMessage(notification);
      Window.notification(message);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    const listenerId = addServerEventListener<{ notification: Notification }>(
      'push-notification',
      onPushNotification
    );
    return () => removeServerEventListener('push-notification', listenerId);
  }, [onPushNotification, addServerEventListener, removeServerEventListener]);
};

export default usePushNotifications;
