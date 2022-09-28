import { TournamentHub } from 'types/tournaments/TournamentInfo';
import useFeed from './useFeed';

type FeedType = {
  tournamentHub: TournamentHub;
  tournamentIds: string[];
};

const useTournamentHubFeed = (tournamentHubId: string) => {
  const { currentState, isLoading } = useFeed<FeedType>(`tournament.hub.${tournamentHubId}`);

  return {
    tournamentHub: currentState.tournamentHub ?? {},
    tournamentIds: currentState.tournamentIds ?? [],
    isLoading
  };
};

export default useTournamentHubFeed;
