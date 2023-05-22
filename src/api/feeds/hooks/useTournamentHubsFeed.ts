import { useFeed } from 'brawl-websocket';
import { TournamentHub } from 'types/tournaments/TournamentInfo';

export default function useTournamentHubsFeed() {
  const { data, loading } = useFeed<{ tournamentHubs: TournamentHub[] }>('tournament.hubs');

  return {
    tournamentHubs: data.tournamentHubs || [],
    isLoading: loading
  };
}
