import useLoggedInUser from 'api/requests/hooks/useLoggedInUser';
import useFeed from './useFeed';

type FeedType = {
  unreadNotificationsCount: number;
  notifications: Notification[];
};

type Options = {
  limit: number;
};

const useNotificationFeed = ({ limit }: Options) => {
  const { user } = useLoggedInUser();
  const { currentState, isLoading } = useFeed<FeedType>(`notifications.${user.id}?limit=${limit}`);

  return {
    unreadCount: currentState.unreadNotificationsCount,
    isLoading
  };
};

export default useNotificationFeed;
