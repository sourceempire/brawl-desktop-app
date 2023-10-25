import { useFeed } from '@sourceempire/brawl-websocket';
import { TournamentHub } from 'types/tournaments/TournamentInfo';

type FeedType = {
  featuredTournamentHubs: TournamentHub[];
};

const useFeaturedTourmanentsFeed = () => {
  const feed = useFeed<FeedType>('tournament.hubs.featured');

  if (feed.loading) {
    return { isLoading: feed.loading };
  }
  return {
    featuredTournamentHubs: feed.data.featuredTournamentHubs,
    isLoading: feed.loading
  };
};

export default useFeaturedTourmanentsFeed;
