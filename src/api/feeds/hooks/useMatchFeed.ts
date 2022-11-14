import useLoggedInUser from 'api/requests/hooks/useLoggedInUser';
import { Match } from 'types/match/Match';
import useFeed from './useFeed';

const useMatchFeed = (matchId: string) => {
  const { currentState, isLoading } = useFeed<{ match: Match }>(`match.${matchId}`);

  const loggedInUser = useLoggedInUser();

  const teams = Object.values(currentState.match?.teams ?? {});

  let team1 = teams[0];
  let team2 = teams[1];

  if (teams[1]?.players.includes(loggedInUser.id)) {
    team1 = teams[1];
    team2 = teams[0];
  }

  return {
    match: currentState.match ?? {},
    team1,
    team2,
    isLoading
  };
};

export default useMatchFeed;
