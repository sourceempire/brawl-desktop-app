import { useFeed } from 'brawl-websocket';
import { TournamentHub } from 'types/tournaments/TournamentInfo';

type FeedType = {
  featuredTournamentHubs: TournamentHub[];
};

const useFeaturedTourmanentsFeed = () => {
  const { data, loading } = useFeed<FeedType>('tournament.hubs.featured');

  return {
    featuredTournamentHubs: data.featuredTournamentHubs || [],
    isLoading: loading
  };
};

export default useFeaturedTourmanentsFeed;
