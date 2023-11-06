import useMatchFeed from 'api/feeds/hooks/useMatchFeed';
import { Wrapper } from './TeamContainer.styles';

type Props = {
  currentMatchId: string;
  teamNumber: 1 | 2;
};

export const TeamContainer = ({ currentMatchId, teamNumber }: Props) => {
  const { team1, team2, isLoading } = useMatchFeed({ matchId: currentMatchId });

  if (isLoading) return null;

  return <Wrapper>{teamNumber === 1 ? team1.teamName : team2.teamName}</Wrapper>;
};
