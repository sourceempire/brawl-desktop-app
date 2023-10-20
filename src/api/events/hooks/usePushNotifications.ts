import { useCallback } from 'react';
import { useEvent } from '@sourceempire/brawl-websocket';
import Window from 'electron-window';
import { Notification } from 'types/notifications/Notifications';
import { getPushNotificationMessage } from '../push-notifications';

export const usePushNotifications = () => {
  const onPushNotification = useCallback(async (event: { notification: Notification }) => {
    const notification = event.notification;

    try {
      const message = await getPushNotificationMessage(notification);
      Window.notification(message);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEvent('push-notification', onPushNotification);
};

export default usePushNotifications;
