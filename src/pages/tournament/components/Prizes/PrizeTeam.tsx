import { PrizeTeamProps } from 'types/prizes/Prizes';
import { Team } from './Prizes.styles';
import { useTeamFeed } from 'api/feeds';

export const PrizeTeam = ({ teamId }: PrizeTeamProps) => {
  const { team, isLoading: isLoadingTeam } = useTeamFeed({
    teamId
  });

  if (isLoadingTeam) {
    return null;
  }

  return <Team>{team ? team.teamName : 'N/A'}</Team>;
};
