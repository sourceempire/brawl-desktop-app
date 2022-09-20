import { useEffect, useMemo, useRef, useState } from 'react';
import useLoggedInUser from 'api/requests/hooks/useLoggedInUser';
import type { Notification, NotificationFeed } from 'types/notifications/Notifications';
import { useDebounce } from 'utils/hooks';
import useFeed from './useFeed';

const useNotificationFeed = () => {
  const { user } = useLoggedInUser();

  const shouldUpdateLimit = useRef(true);
  const [limit, setLimit] = useState(10);
  const debouncedLimit = useDebounce(limit, 100);

  useEffect(() => {
    shouldUpdateLimit.current = true;
  }, [debouncedLimit]);

  const requestMoreNotifications = () => {
    // No need to get more notifications if there are none
    if (limit >= currentState.totalCount) return;

    if (shouldUpdateLimit.current) {
      shouldUpdateLimit.current = false;
      setLimit(limit + 10);
    }
  };

  const { currentState, isLoading } = useFeed<NotificationFeed>(
    `notifications.${user.id}?limit=${debouncedLimit}`
  );

  const notifications = useMemo<Notification[]>(() => {
    return currentState.notifications?.map((notification) => ({
      ...notification,
      createdAt: new Date(notification.createdAt)
    }));
  }, [currentState.notifications]);

  return {
    totalCount: currentState.totalCount ?? 0,
    unreadCount: currentState.unreadNotificationsCount ?? 0,
    notifications: notifications ?? [],
    requestMoreNotifications,
    isLoading
  };
};

export default useNotificationFeed;
