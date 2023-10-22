import { useFeed } from '@sourceempire/brawl-websocket';
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

type Params = {
  tournamentHubId: string;
  userId: string;
};

export function isFeedWithTeam(feed: Feed): feed is FeedWithTeam {
  return feed.isInTournamentTeam;
}

function useTournamentTeamFeed({ tournamentHubId, userId }: Params): Feed {
  const { data, loading } = useFeed<Feed>(`tournament.team.${tournamentHubId}.${userId}`);

  return { ...data, isLoading: loading };
}

export default useTournamentTeamFeed;
