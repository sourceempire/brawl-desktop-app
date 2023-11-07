import { useFeed } from '@sourceempire/brawl-websocket';
import { useLoggedInUser } from 'common/hooks';
import { Match } from 'types/match/Match';

type Params = {
  matchId: string;
};

const useMatchFeed = ({ matchId }: Params) => {
  const feed = useFeed<{ match: Match }>(`match.${matchId}`);

  if (feed.loading) {
    return { isLoading: feed.loading };
  }

  const loggedInUser = useLoggedInUser();

  let team1 = feed.data.match.team1;
  let team2 = feed.data.match.team2;

  if (team2 && team2.players.some((player) => player.userId === loggedInUser.id)) {
    team1 = feed.data.match.team2;
    team2 = feed.data.match.team1;
  }

  return {
    match: feed.data.match,
    team1,
    team2,
    isLoading: feed.loading
  };
};

export default useMatchFeed;
