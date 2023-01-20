import useLoggedInUser from 'api/requests/hooks/useLoggedInUser';
import { useFeed } from 'brawl-websocket';

const useCurrentTournamentMatchFeed = (touramentId: string) => {
  const user = useLoggedInUser();

  const { data, loading } = useFeed<{ matchId: string | null }>(
    `tournament.match.${touramentId}.${user.id}`
  );

  return { matchId: data.matchId, isLoading: loading };
};

export default useCurrentTournamentMatchFeed;
