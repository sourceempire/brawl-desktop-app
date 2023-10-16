import useMatchFeed from 'api/feeds/hooks/useMatchFeed';
import { Wrapper } from './TeamContainer.styles';

type Props = {
  currentMatchId: string;
  teamNumber: 1 | 2;
};

export const TeamContainer = ({ currentMatchId, teamNumber }: Props) => {
  const { team1, team2 } = useMatchFeed({ matchId: currentMatchId });
  return <Wrapper>{teamNumber === 1 ? team1?.name : team2?.name}</Wrapper>;
};
