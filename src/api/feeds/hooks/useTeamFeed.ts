import { useFeed } from '@sourceempire/brawl-websocket';
import { TournamentTeam } from 'types/tournaments/TournamentTeam';

type Params = {
  teamId: string;
};

const useTeamFeed = ({ teamId }: Params) => {
  const feed = useFeed<{ team: TournamentTeam }>(`team.${teamId}`);

  if (feed.loading) {
    return { isLoading: feed.loading };
  }

  return {
    team: feed.data.team,
    isLoading: feed.loading
  };
};

export default useTeamFeed;
