import { useFeed } from '@sourceempire/brawl-websocket';

type Params = {
  userId: string;
};

function useUserMoneyFeed({ userId }: Params) {
  const feed = useFeed<{ balance: number }>(`user.money.${userId}`);

  if (feed.loading) {
    return {
      isLoading: feed.loading
    };
  }

  return {
    isLoading: feed.loading,
    balance: feed.data.balance,
    display: feed.loading ? 'loading' : `€${(feed.data.balance / 100).toFixed(2)}`
  };

  return {};
}

export default useUserMoneyFeed;
