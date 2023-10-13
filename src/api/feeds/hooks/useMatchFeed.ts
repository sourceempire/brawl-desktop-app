import { useFeed } from 'brawl-websocket';
import { useLoggedInUser } from 'common/hooks';
import { Match } from 'types/match/Match';

type Params = {
  matchId: string;
  gameId: string;
};

const useMatchFeed = ({ matchId, gameId }: Params) => {
  const { data, loading } = useFeed<{ match: Match }>(`match.${matchId}.${gameId}`);

  const loggedInUser = useLoggedInUser();

  let team1 = data.match?.team1;
  let team2 = data.match?.team2;

  if (team2 && team2?.players.includes(loggedInUser.id)) {
    team1 = data.match?.team2;
    team2 = data.match?.team1;
  }

  return {
    match: data.match ?? {},
    team1,
    team2,
    isLoading: loading
  };
};

export default useMatchFeed;
