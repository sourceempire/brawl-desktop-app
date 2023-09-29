import { useFeed } from 'brawl-websocket';
import { useLoggedInUser } from 'common/hooks';

type Params = {
  tournamentId: string;
};

const useCurrentTournamentMatchFeed = ({ tournamentId }: Params) => {
  const user = useLoggedInUser();

  const { data, loading } = useFeed<{ matchId: string | null }>(
    `tournament.match.${tournamentId}.${user.id}`
  );

  return { matchId: data.matchId, isLoading: loading };
};

export default useCurrentTournamentMatchFeed;
