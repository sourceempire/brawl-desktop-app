import { useFeed } from 'brawl-websocket';
import Game, { GameName } from 'types/Game';
import { GameId } from 'types/MatchSettings';
import { TournamentHub } from 'types/tournaments/TournamentInfo';

export default function useTournamentHubsFeed() {
  const { data, loading } = useFeed<{ tournamentHubs: TournamentHub[] }>('tournament.hubs');

  let tournamentHubsWithTypedMatchSettings = fixMatchSettingType(data.tournamentHubs ?? []);

  // TODO remove this when server provides everything
  tournamentHubsWithTypedMatchSettings = tournamentHubsWithTypedMatchSettings.map((tournament) => {
    tournament.image = 'https://picsum.photos/600/200?random=' + simepleHash(tournament.name);
    tournament.currentPrizePool = '200.00';
    tournament.region = 'europe';
    return tournament;
  });

  return {
    tournamentHubs: tournamentHubsWithTypedMatchSettings,
    isLoading: loading
  };
}

function fixMatchSettingType(tournamentHubs: TournamentHub[]): TournamentHub[] {
  return tournamentHubs.map((tournamentHub) => {
    if (tournamentHub.gameId === Game.CSGO) {
      tournamentHub.matchSettings.gameId = GameId.CSGO;
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
