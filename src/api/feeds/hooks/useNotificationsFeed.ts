import { useEffect, useRef, useState } from 'react';
import { useFeed } from '@sourceempire/brawl-websocket';
import { useDebounce, useLoggedInUser } from 'common/hooks';
import type { NotificationFeed } from 'types/notifications/Notifications';

const useNotificationFeed = () => {
  const user = useLoggedInUser();

  const shouldUpdateLimit = useRef(true);
  const [limit, setLimit] = useState(10);
  const debouncedLimit = useDebounce(limit, 100);

  useEffect(() => {
    shouldUpdateLimit.current = true;
  }, [debouncedLimit]);

  const feed = useFeed<NotificationFeed>(`notifications.${user.id}?limit=${debouncedLimit}`);

  const requestMoreNotifications = () => {
    if (feed.loading) return;
    // No need to get more notifications if there are none
    if (limit >= feed.data.totalCount) return;

    if (shouldUpdateLimit.current) {
      shouldUpdateLimit.current = false;
      setLimit(limit + 10);
    }
  };

  if (feed.loading) {
    return { isLoading: feed.loading };
  }

  const notifications = feed.data.notifications?.map((notification) => ({
    ...notification,
    createdAt: new Date(notification.createdAt)
  }));

  return {
    totalCount: feed.data.totalCount,
    unreadCount: feed.data.unreadNotificationsCount,
    notifications: notifications,
    requestMoreNotifications,
    isLoading: feed.loading
  };
};

export default useNotificationFeed;
