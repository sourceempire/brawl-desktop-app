import { Team } from './Prizes.styles';
import { useTeamFeed } from 'api/feeds';
import { TeamId } from 'types/team/Team';

type Props = {
  teamId: TeamId;
};

export const PrizeTeam = ({ teamId }: Props) => {
  const { team, isLoading: isLoadingTeam } = useTeamFeed({
    teamId
  });

  if (isLoadingTeam) {
    return null;
  }

  return <Team>{team ? team.teamName : 'N/A'}</Team>;
};
