import { useFeed } from 'brawl-websocket';
import { useLoggedInUser } from 'common/hooks';
import { Match } from 'types/match/Match';

type Params = {
  matchId: string;
};

const useMatchFeed = ({ matchId }: Params) => {
  const { data, loading } = useFeed<{ gameMatchInfo: Match }>(`match.${matchId}`);

  const loggedInUser = useLoggedInUser();

  let team1 = data.gameMatchInfo?.team1;
  let team2 = data.gameMatchInfo?.team2;

  if (team2 && team2.players.some((player) => player.userId === loggedInUser.id)) {
    team1 = data.gameMatchInfo?.team2;
    team2 = data.gameMatchInfo?.team1;
  }

  return {
    gameMatchInfo: data.gameMatchInfo ?? {},
    team1,
    team2,
    isLoading: loading
  };
};

export default useMatchFeed;
