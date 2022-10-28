import { useMemo } from 'react';
import useLoggedInUser from 'api/requests/hooks/useLoggedInUser';
import { CSGOMatch, CSGOMatchStage, CSGOVetoStatus, Match } from 'types/match/Match';
import useFeed from './useFeed';

const useMatchFeed = (matchId: string) => {
  const { currentState, isLoading } = useFeed<{ match: Match }>(`match.${matchId}`);

  const { user } = useLoggedInUser();

  const team1 = useMemo(
    () =>
      currentState?.match?.teams?.find((team) => team.players.includes(user.id)) ??
      currentState?.match?.teams?.[0],
    [currentState?.match?.teams, user.id]
  );

  // // MOCK starts
  // if (currentState.match) {
  //   (currentState.match as CSGOMatch).matchStage = CSGOMatchStage.READY;
  //   (currentState.match as CSGOMatch).veto = {
  //     matchId: 'b362f62f-2c4c-4ab9-97a7-dc8003fb096c',
  //     teamToBanMap: 'cfa40387-b55d-45d4-a0e7-abd54ebc14b5',
  //     status: CSGOVetoStatus.READY_CHECK,
  //     playersReady: {
  //       '23e63a4a-bf94-4a7c-97d5-a6cd9be6dfe6': false,
  //       '674b144b-0ff6-45f9-94fc-a5ae2e20a14b': false
  //     },
  //     bannedMaps: {},
  //     mapBanTime: 60000,
  //     readyCheckTime: 60000,
  //     readyCheckExpiration: Date.now() + 1000 * 60 * 60 * 24 // 24 hours
  //   };
  // }
  // MOCK ends

  const team2 = useMemo(
    () => currentState?.match?.teams?.find((team) => team.id !== team1?.id),
    [currentState?.match?.teams, team1?.id]
  );

  console.log(currentState.match);

  return {
    match: currentState.match ?? {},
    team1,
    team2,
    isLoading
  };
};

export default useMatchFeed;
