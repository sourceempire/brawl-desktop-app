import useMatchFeed from 'api/feeds/hooks/useMatchFeed';
import { Wrapper } from './TeamContainer.styles';

type Props = {
  currentMatchId: string;
  teamNumber: 1 | 2;
  gameId: string;
};

export const TeamContainer = ({ currentMatchId, teamNumber, gameId }: Props) => {
  const { team1, team2 } = useMatchFeed({ matchId: currentMatchId, gameId });
  return <Wrapper>{teamNumber === 1 ? team1?.teamName : team2?.teamName}</Wrapper>;
};
