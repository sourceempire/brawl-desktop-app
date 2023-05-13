import { useFeed } from 'brawl-websocket';
import Game, { GameName } from 'types/Game';
import { MatchSettingsTypes } from 'types/MatchSettings';
import { TournamentHub } from 'types/tournaments/TournamentInfo';

type FeedType = {
  featuredTournamentHubs: TournamentHub[];
};

const useFeaturedTourmanentsFeed = () => {
  const { data, loading } = useFeed<FeedType>('tournament.hubs.featured');

  // TODO remove this when server provides everything
  let tournamentHubsWithSettings = fixMatchSettingType(data.featuredTournamentHubs ?? []);

  if (data.featuredTournamentHubs) {
    tournamentHubsWithSettings = data.featuredTournamentHubs.map((tournamentHub) => {
      tournamentHub.image =
        'https://picsum.photos/600/200?random=' + simepleHash(tournamentHub.name);
      tournamentHub.currentPrizePool = '200.00';
      tournamentHub.region = 'europe';
      return tournamentHub;
    });
  }

  return {
    featuredTournamentHubs: tournamentHubsWithSettings,
    isLoading: loading
  };
};

export default useFeaturedTourmanentsFeed;

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
