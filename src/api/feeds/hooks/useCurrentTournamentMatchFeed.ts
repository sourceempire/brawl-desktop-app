import useLoggedInUser from 'api/requests/hooks/useLoggedInUser';
import useFeed from './useFeed';

const useCurrentTournamentMatchFeed = (touramentId: string) => {
  const { user } = useLoggedInUser();

  const { currentState, isLoading } = useFeed<{ matchId: string | null }>(
    `tournament.match.${touramentId}.${user.id}`
  );

  return { matchId: currentState.matchId, isLoading };
};

export default useCurrentTournamentMatchFeed;
