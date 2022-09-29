import { Tournament } from 'types/tournaments/TournamentInfo';
import useFeed from './useFeed';

const useTournamentFeed = (tournamentId: string) => {
  const { currentState, isLoading } = useFeed<{ tournament: Tournament }>(
    `tournament.${tournamentId}`
  );

  return {
    tournament: currentState.tournament ?? {},
    isLoading
  };
};

export default useTournamentFeed;
