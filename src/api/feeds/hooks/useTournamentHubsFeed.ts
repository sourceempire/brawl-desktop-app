import Game, { GameName } from 'types/Game';
import { MatchSettingsTypes } from 'types/MatchSettings';
import { TournamentHub } from 'types/tournaments/TournamentInfo';
import useFeed from './useFeed';

export default function useTournamentHubsFeed() {
  const { currentState, isLoading } = useFeed<{ tournamentHubs: TournamentHub[] }>(
    'tournament.hubs'
  );

  let tournamentHubsWithTypedMatchSettings = fixMatchSettingType(currentState.tournamentHubs ?? []);

  // TODO remove this when server provides everything
  tournamentHubsWithTypedMatchSettings = tournamentHubsWithTypedMatchSettings.map((tournament) => {
    tournament.image = 'https://picsum.photos/600/200?random=' + simepleHash(tournament.name);
    tournament.currentPrizePool = '200.00';
    tournament.region = 'europe';
    return tournament;
  });

  return {
    tournamentHubs: tournamentHubsWithTypedMatchSettings,
    isLoading
  };
}

function fixMatchSettingType(tournamentHubs: TournamentHub[]): TournamentHub[] {
  return tournamentHubs.map((tournamentHub) => {
    if (tournamentHub.gameId === Game.CSGO) {
      tournamentHub.matchSettings.__type = MatchSettingsTypes.CSGO;
      tournamentHub.gameName = GameName[Game.CSGO];
    }
    return tournamentHub;
  });
}

function simepleHash(str: string): number {
  return (
    str
      .split('')
      .map((c) => c.charCodeAt(0))
      .reduce((acc, c) => acc + c) % 10
  );
}
