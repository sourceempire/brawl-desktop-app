import { useFeed } from 'brawl-websocket';
import { useLoggedInUser } from 'hooks/useLoggedInUser';

const useCurrentTournamentMatchFeed = (touramentId: string) => {
  const user = useLoggedInUser();

  const { data, loading } = useFeed<{ matchId: string | null }>(
    `tournament.match.${touramentId}.${user.id}`
  );

  return { matchId: data.matchId, isLoading: loading };
};

export default useCurrentTournamentMatchFeed;
