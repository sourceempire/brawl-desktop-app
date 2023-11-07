import { useFeed } from '@sourceempire/brawl-websocket';
import { useLoggedInUser } from 'common/hooks';

type Params = {
  tournamentHubId: string;
};

export default function useTournamentIdFeed({ tournamentHubId }: Params) {
  const { id: userId } = useLoggedInUser();

  const feed = useFeed<{ tournamentId: string | null }>(
    `tournament.id.${tournamentHubId}.${userId}`
  );

  if (feed.loading) {
    return { isLoading: feed.loading };
  }

  return {
    tournamentId: feed.data.tournamentId,
    isLoading: feed.loading
  };
}
