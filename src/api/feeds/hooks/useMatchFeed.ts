import { useMemo } from 'react';
import useLoggedInUser from 'api/requests/hooks/useLoggedInUser';
import { Match } from 'types/match/Match';
import useFeed from './useFeed';

const useMatchFeed = (matchId: string) => {
  const { currentState, isLoading } = useFeed<{ match: Match }>(`match.${matchId}`);

  const user = useLoggedInUser();

  const team1 = useMemo(
    () =>
      currentState?.match?.teams?.find((team) => team.players.includes(user.id)) ??
      currentState?.match?.teams?.[0],
    [currentState?.match?.teams, user.id]
  );

  const team2 = useMemo(
    () => currentState?.match?.teams?.find((team) => team.id !== team1?.id),
    [currentState?.match?.teams, team1?.id]
  );

  return {
    match: currentState.match ?? {},
    team1,
    team2,
    isLoading
  };
};

export default useMatchFeed;
