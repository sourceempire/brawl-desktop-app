import { useFeed } from '@sourceempire/brawl-websocket';
import { TournamentHub } from 'types/tournaments/TournamentInfo';

type FeedType = {
  featuredTournamentHubs: TournamentHub[];
};

const useFeaturedTourmanentsFeed = () => {
  return useFeed<FeedType>('tournament.hubs.featured');
};

export default useFeaturedTourmanentsFeed;
