import { useFeed } from '@sourceempire/brawl-websocket';
import { useLoggedInUser } from 'common/hooks';

type Params = {
  tournamentHubId: string;
};

export default function useTournamentIdFeed({ tournamentHubId }: Params) {
  const { id: userId } = useLoggedInUser();

  const { data } = useFeed<{ tournamentId: string | null }>(
    `tournament.id.${tournamentHubId}.${userId}`
  );

  return {
    tournamentId: data.tournamentId
  };
}
