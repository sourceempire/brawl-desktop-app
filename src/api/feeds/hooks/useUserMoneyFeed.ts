import { useFeed } from 'brawl-websocket';

type Options = {
  userId: string;
};

function useUserMoneyFeed({ userId }: Options) {
  const { data, loading } = useFeed<{ balance: number }>(`user.money.${userId}`);

  return {
    isLoading: loading,
    balance: data.balance,
    display: loading ? 'loading' : `€${(data.balance / 100).toFixed(2)}`
  };
}

export default useUserMoneyFeed;
