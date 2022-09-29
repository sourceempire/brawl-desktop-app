import { Tournament } from 'types/tournaments/TournamentInfo';
import CountDown from '../CountDown';
import { MiddleInfo, TeamContainer, TournamentName, Wrapper } from './TournamentInfo.styles';

type Props = {
  tournament: Tournament;
};

const TournamentInfo = ({ tournament }: Props) => {
  return (
    <Wrapper>
      <TeamContainer>team1</TeamContainer>

      <MiddleInfo>
        <TournamentName>
          {tournament.name} {tournament.tournamentNumber}
        </TournamentName>
        <CountDown startTime={tournament.startTime} />
      </MiddleInfo>

      <TeamContainer>team2</TeamContainer>
    </Wrapper>
  );
};

export default TournamentInfo;
