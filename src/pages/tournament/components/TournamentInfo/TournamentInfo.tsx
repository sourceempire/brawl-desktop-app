import useCurrentTournamentMatchFeed from 'api/feeds/hooks/useCurrentTournamentMatchFeed';
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
};

const TournamentInfo = ({ tournament }: Props) => {
  const { loggedInUserTeam, secondTeam, isLoading } = useCurrentTournamentMatchFeed(tournament.id);

  if (isLoading) return null;

  return (
    <Wrapper>
      <TeamContainer>{loggedInUserTeam?.teamName}</TeamContainer>

      <MiddleInfo>
        <TournamentName>
          {tournament.name} {tournament.tournamentNumber}
        </TournamentName>
        <SmallText>Round 1 of 4 starts in</SmallText>
        <CountDown startTime={tournament.startTime} />
      </MiddleInfo>

      <TeamContainer>{secondTeam?.teamName}</TeamContainer>
    </Wrapper>
  );
};

export default TournamentInfo;
