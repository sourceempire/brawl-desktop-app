import { useCallback, useEffect } from 'react';
import Window from 'window';
import { useServerEvents } from './useServerEvents';

export const usePushNotifications = () => {
  const { addServerEventListener, removeServerEventListener } = useServerEvents();

  const onPushNotification = useCallback((c: any) => {
    Window.notification({ title: 'HEJJ', icon: '' });
  }, []);

  useEffect(() => {
    const listenerId = addServerEventListener('push-notification', onPushNotification);
    return () => removeServerEventListener('push-notification', listenerId);
  }, [onPushNotification, addServerEventListener, removeServerEventListener]);
};

export default usePushNotifications;
