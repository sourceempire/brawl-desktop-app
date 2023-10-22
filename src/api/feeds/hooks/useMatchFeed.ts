import { useFeed } from '@sourceempire/brawl-websocket';
import { useLoggedInUser } from 'common/hooks';
import { Match } from 'types/match/Match';

type Params = {
  matchId: string;
};

const useMatchFeed = ({ matchId }: Params) => {
  const { data, loading } = useFeed<{ gameMatchInfo: Match; internalMatchInfo: Match }>(
    `match.${matchId}`
  );

  const loggedInUser = useLoggedInUser();

  const defaultTeam = {
    id: '',
    name: '',
    players: [],
    teamLeaderId: '',
    score: 0
  };

  let team1 = data.gameMatchInfo?.team1
    ? {
        ...data.gameMatchInfo.team1,
        teamLeaderId: data.internalMatchInfo?.team1?.teamLeaderId
      }
    : defaultTeam;

  let team2 = data.gameMatchInfo?.team2
    ? {
        ...data.gameMatchInfo.team2,
        teamLeaderId: data.internalMatchInfo?.team2?.teamLeaderId
      }
    : defaultTeam;

  if (team2 && team2.players.some((player) => player.userId === loggedInUser.id)) {
    [team1, team2] = [team2, team1];
  }

  return {
    gameMatchInfo: data.gameMatchInfo ?? {},
    team1,
    team2,
    isLoading: loading
  };
};

export default useMatchFeed;
