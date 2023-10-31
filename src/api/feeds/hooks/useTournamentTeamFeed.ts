import { useFeed } from '@sourceempire/brawl-websocket';
import { TournamentTeam } from 'types/tournaments/TournamentTeam';

type FeedWithoutTeam = {
  isInTournamentTeam: false;
};

type FeedWithTeam = {
  isInTournamentTeam: true;
  tournamentTeam: TournamentTeam;
};

type Feed = FeedWithoutTeam | FeedWithTeam;

type Params = {
  tournamentHubId: string;
  userId: string;
};

function useTournamentTeamFeed({ tournamentHubId, userId }: Params) {
  const feed = useFeed<Feed>(`tournament.team.${tournamentHubId}.${userId}`);

  if (feed.loading) {
    return {
      isLoading: feed.loading
    };
  }

  if (feed.data.isInTournamentTeam) {
    return {
      isLoading: feed.loading,
      isInTournamentTeam: feed.data.isInTournamentTeam,
      tournamentTeam: feed.data.tournamentTeam
    };
  }

  return {
    isLoading: feed.loading,
    isInTournamentTeam: feed.data.isInTournamentTeam
  };
}

export default useTournamentTeamFeed;
