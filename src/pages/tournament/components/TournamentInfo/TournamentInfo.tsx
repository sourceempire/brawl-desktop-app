import useMatchFeed from 'api/feeds/hooks/useMatchFeed';
import { Tournament } from 'types/tournaments/TournamentInfo';
import CountDown from '../CountDown';
import {
  MiddleInfo,
  SmallText,
  TeamContainer,
  TournamentName,
  Wrapper
} from './TournamentInfo.styles';

type Props = {
  tournament: Tournament;
  currentMatchId: string;
};

const TournamentInfo = ({ tournament, currentMatchId }: Props) => {
  const { team1, team2, isLoading } = useMatchFeed(currentMatchId);

  if (isLoading) return null;

  return (
    <Wrapper>
      <TeamContainer>{team1?.teamName}</TeamContainer>

      <MiddleInfo>
        <TournamentName>
          {tournament.name} {tournament.tournamentNumber}
        </TournamentName>
        <SmallText>Round 1 of 4 starts in</SmallText>
        <CountDown startTime={tournament.startTime} />
      </MiddleInfo>

      <TeamContainer>{team2?.teamName}</TeamContainer>
    </Wrapper>
  );
};

export default TournamentInfo;
