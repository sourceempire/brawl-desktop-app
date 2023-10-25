import { useFeed } from '@sourceempire/brawl-websocket';
import { TournamentHub } from 'types/tournaments/TournamentInfo';

export default function useTournamentHubsFeed() {
  const feed = useFeed<{ tournamentHubs: TournamentHub[] }>('tournament.hubs');

  if (feed.loading) {
    return {
      isLoading: feed.loading
    };
  }

  return {
    tournamentHubs: feed.data.tournamentHubs,
    isLoading: feed.loading
  };
}
