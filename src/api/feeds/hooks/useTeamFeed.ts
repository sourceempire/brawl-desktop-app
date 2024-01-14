import { useFeed } from '@sourceempire/brawl-websocket';
import { Team } from 'types/team/Team';

type Params = {
  teamId: string;
};

const useTeamFeed = ({ teamId }: Params) => {
  const feed = useFeed<{ team: Team }>(`team.${teamId}`);

  if (feed.loading) {
    return { isLoading: feed.loading };
  }

  return {
    team: feed.data.team,
    isLoading: feed.loading
  };
};

export default useTeamFeed;
