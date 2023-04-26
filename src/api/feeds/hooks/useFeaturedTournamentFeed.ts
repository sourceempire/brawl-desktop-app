import { useFeed } from 'brawl-websocket';
import { TournamentHub } from 'types/tournaments/TournamentInfo';

type FeedType = {
  featuredTournamentHubs: TournamentHub[];
  limit: number;
};

const useFeaturedTournamentFeed = () => {
  const { data, loading } = useFeed<FeedType>('tournament.hubs.featured');
  console.log('DATA', data);

  return {
    featuredTournamentHubs: data.featuredTournamentHubs,
    limit: data.limit,
    isLoading: loading
  };
};

export default useFeaturedTournamentFeed;
