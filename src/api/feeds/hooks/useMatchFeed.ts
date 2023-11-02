import { useFeed } from '@sourceempire/brawl-websocket';
import { MockGameMatch } from 'types/match/Match';

type Params = {
  matchId: string;
};

const useMatchFeed = ({ matchId }: Params) => {
  const { data, loading } = useFeed<{ match: MockGameMatch }>(`match.${matchId}`);

  const defaultTeam = {
    id: '',
    teamName: '',
    players: [],
    teamLeaderId: '',
    score: 0,
    playerStats: {}
  };

  let team1 = data.match?.team1;
  let team2 = data.match?.team2;

  return {
    match: data.match ?? {},
    team1: team1 ?? defaultTeam,
    team2: team2 ?? defaultTeam,
    isLoading: loading
  };
};

export default useMatchFeed;
