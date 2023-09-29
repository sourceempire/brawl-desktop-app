import { useFeed } from 'brawl-websocket';
import { useLoggedInUser } from 'common/hooks';
import { Match } from 'types/match/Match';

type Params = {
  matchId: string;
};

const useMatchFeed = ({ matchId }: Params) => {
  const { data, loading } = useFeed<{ match: Match }>(`match.${matchId}`);

  const loggedInUser = useLoggedInUser();

  const teams = Object.values(data.match?.teams ?? {});

  let team1 = teams[0];
  let team2 = teams[1];

  if (teams[1]?.players.includes(loggedInUser.id)) {
    team1 = teams[1];
    team2 = teams[0];
  }

  return {
    match: data.match ?? {},
    team1,
    team2,
    isLoading: loading
  };
};

export default useMatchFeed;
