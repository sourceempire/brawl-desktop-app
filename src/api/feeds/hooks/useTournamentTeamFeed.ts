import { useFeed } from 'brawl-websocket';
import { TournamentTeam } from 'types/tournaments/TournamentTeam';

const useTournamentTeamFeed = (tournamentHubId: string, userId: string) => {
  const { data, loading } = useFeed<{
    isInTournamentTeam: boolean;
    tournamentTeam?: TournamentTeam;
  }>(`tournament.team.${tournamentHubId}.${userId}`);
  return {
    isInTournamentTeam: data.isInTournamentTeam,
    tournamentTeam: data.tournamentTeam,
    isLoading: loading
  };
};

export default useTournamentTeamFeed;
