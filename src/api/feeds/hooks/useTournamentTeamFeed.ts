import { useFeed } from 'brawl-websocket';
import { TournamentTeam } from 'types/tournaments/TournamentTeam';

type FeedWithoutTeam = {
  isLoading: boolean;
  isInTournamentTeam: false;
};

type FeedWithTeam = {
  isLoading: boolean;
  isInTournamentTeam: true;
  tournamentTeam: TournamentTeam;
};

type Feed = FeedWithoutTeam | FeedWithTeam;

export function isFeedWithTeam(feed: Feed): feed is FeedWithTeam {
  return feed.isInTournamentTeam;
}

function useTournamentTeamFeed(tournamentHubId: string, userId: string): Feed {
  const { data, loading } = useFeed<Feed>(`tournament.team.${tournamentHubId}.${userId}`);

  if (isFeedWithTeam(data)) {
    return {
      isLoading: loading,
      isInTournamentTeam: true,
      tournamentTeam: data.tournamentTeam
    };
  }

  return {
    isInTournamentTeam: false,
    isLoading: loading
  };
}

export default useTournamentTeamFeed;
