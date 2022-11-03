import { Tournament } from 'types/tournaments/TournamentInfo';
import CountDown from '../CountDown';
import { TeamContainer } from './TeamContainer';
import { MiddleInfo, SmallText, TournamentName, Wrapper } from './TournamentInfo.styles';

type Props = {
  tournament: Tournament;
  currentMatchId: string | null;
};

const TournamentInfo = ({ tournament, currentMatchId }: Props) => {
  return (
    <Wrapper>
      {currentMatchId ? <TeamContainer currentMatchId={currentMatchId} teamNumber={1} /> : <div />}

      <MiddleInfo>
        <TournamentName>
          {tournament.name} {tournament.tournamentNumber}
        </TournamentName>
        <SmallText>Round 1 of 4 starts in</SmallText>
        <CountDown startTime={tournament.startTime} />
      </MiddleInfo>

      {currentMatchId ? <TeamContainer currentMatchId={currentMatchId} teamNumber={2} /> : <div />}
    </Wrapper>
  );
};

export default TournamentInfo;
