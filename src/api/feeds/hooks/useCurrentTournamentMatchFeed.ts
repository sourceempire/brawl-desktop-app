import { useMemo } from 'react';
import useLoggedInUser from 'api/requests/hooks/useLoggedInUser';
import { Match } from 'types/match/Match';
import useFeed from './useFeed';

const useCurrentTournamentMatchFeed = (touramentId: string) => {
  const { user } = useLoggedInUser();

  const { currentState, isLoading } = useFeed<{ match: Match }>(
    `tournament.match.${touramentId}.${user.id}`
  );

  const loggedInUserTeam = useMemo(
    () => currentState?.match?.teams?.find((team) => team.players.includes(user.id)),
    [currentState?.match?.teams, user.id]
  );

  const secondTeam = useMemo(
    () => currentState?.match?.teams?.find((team) => !team.players.includes(user.id)),
    [currentState?.match?.teams, user.id]
  );

  return { currentMatch: currentState?.match, loggedInUserTeam, secondTeam, isLoading };
};

export default useCurrentTournamentMatchFeed;
