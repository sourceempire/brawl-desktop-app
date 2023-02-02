import { useEffect, useMemo, useRef, useState } from 'react';
import { useFeed } from 'brawl-websocket';
import { useLoggedInUser } from 'hooks';
import type { Notification, NotificationFeed } from 'types/notifications/Notifications';
import { useDebounce } from 'utils/hooks';

const useNotificationFeed = () => {
  const user = useLoggedInUser();

  const shouldUpdateLimit = useRef(true);
  const [limit, setLimit] = useState(10);
  const debouncedLimit = useDebounce(limit, 100);

  useEffect(() => {
    shouldUpdateLimit.current = true;
  }, [debouncedLimit]);

  const { data, loading } = useFeed<NotificationFeed>(
    `notifications.${user.id}?limit=${debouncedLimit}`
  );

  const requestMoreNotifications = () => {
    // No need to get more notifications if there are none
    if (limit >= data.totalCount) return;

    if (shouldUpdateLimit.current) {
      shouldUpdateLimit.current = false;
      setLimit(limit + 10);
    }
  };

  const notifications = useMemo<Notification[]>(() => {
    return data.notifications?.map((notification) => ({
      ...notification,
      createdAt: new Date(notification.createdAt)
    }));
  }, [data.notifications]);

  return {
    totalCount: data.totalCount ?? 0,
    unreadCount: data.unreadNotificationsCount ?? 0,
    notifications: notifications ?? [],
    requestMoreNotifications,
    isLoading: loading
  };
};

export default useNotificationFeed;
