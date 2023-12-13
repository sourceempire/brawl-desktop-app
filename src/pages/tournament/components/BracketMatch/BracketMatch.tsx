import useMatchFeed from 'api/feeds/hooks/useMatchFeed';
import { useLoggedInUser } from 'common/hooks';
import { getMatchOutcome } from 'utils/matchUtils';
import {
  Backdrop,
  Background,
  MatchTitle,
  Team1,
  Team2,
  TeamLogo,
  TeamLogoImage,
  TeamName,
  TeamScore,
  Wrapper
} from './BracketMatch.styles';
import { MatchOutcome } from './BracketMatch.types';
import placeholderTeamLogo from 'assets/images/placeholder-team-logo.png';

type Props = {
  matchId: string;
  matchIndex: number;
  roundIndex: number;
  isFirstMatch: boolean;
  isFinal: boolean;
  isThirdPlaceMatch?: boolean;
};

const BracketMatch = ({
  matchId,
  matchIndex,
  roundIndex,
  isFirstMatch,
  isFinal,
  isThirdPlaceMatch
}: Props) => {
  const user = useLoggedInUser();
  const { match, team1, team2, isLoading } = useMatchFeed({ matchId });

  if (isLoading) return null;

  let teamIdOfLoggedInUser;

  if (team1 && team1.players.some((player) => player === user.id)) {
    teamIdOfLoggedInUser = team1.id;
  } else if (team2 && team2.players.some((player) => player === user.id)) {
    teamIdOfLoggedInUser = team2.id;
  }

  const loggedInUserMatchOutcome =
    !isLoading && teamIdOfLoggedInUser
      ? getMatchOutcome({ teamIdOfLoggedInUser, match })
      : MatchOutcome.NotDecided;

  return (
    <Background isThirdPlaceMatch={isThirdPlaceMatch}>
      <Backdrop />
      <Wrapper
        matchIndex={matchIndex}
        roundIndex={roundIndex}
        isFinal={isFinal}
        isFirstMatch={isFirstMatch}
        isThirdPlaceMatch={isThirdPlaceMatch}>
        {isThirdPlaceMatch && <MatchTitle>Third place</MatchTitle>}
        <Team1
          matchOutcome={
            team1 && team1.id === teamIdOfLoggedInUser ? loggedInUserMatchOutcome : null
          }>
          <TeamLogo>
            <TeamLogoImage src={placeholderTeamLogo} />
          </TeamLogo>
          <TeamName>{team1?.teamName ?? '-'}</TeamName>
          <TeamScore winner={team1 ? match.winnerTeamId === team1.id : false}>
            {team1?.score ?? 0}
          </TeamScore>
        </Team1>
        <Team2
          matchOutcome={
            team2 && team2.id === teamIdOfLoggedInUser ? loggedInUserMatchOutcome : null
          }>
          <TeamLogo>
            <TeamLogoImage src={placeholderTeamLogo} />
          </TeamLogo>
          <TeamName>{team2?.teamName ?? '-'}</TeamName>
          <TeamScore winner={team2 ? match.winnerTeamId === team2.id : false}>
            {team2?.score ?? 0}
          </TeamScore>
        </Team2>
      </Wrapper>
    </Background>
  );
};

BracketMatch.Skeleton = ({
  matchIndex,
  roundIndex,
  isFirstMatch,
  isFinal,
  isThirdPlaceMatch
}: Omit<Props, 'matchId'>) => {
  return (
    <Background isThirdPlaceMatch={isThirdPlaceMatch}>
      <Backdrop />
      <Wrapper
        matchIndex={matchIndex}
        roundIndex={roundIndex}
        isFinal={isFinal}
        isFirstMatch={isFirstMatch}
        isThirdPlaceMatch={isThirdPlaceMatch}>
        {isThirdPlaceMatch && <MatchTitle>Third place</MatchTitle>}
        <Team1>
          <TeamLogo />
          <TeamName></TeamName>
          <TeamScore></TeamScore>
        </Team1>
        <Team2>
          <TeamLogo />
          <TeamName></TeamName>
          <TeamScore></TeamScore>
        </Team2>
      </Wrapper>
    </Background>
  );
};

BracketMatch.Skeleton = ({
  matchIndex,
  roundIndex,
  isFirstMatch,
  isFinal,
  isThirdPlaceMatch
}: Omit<Props, 'matchId'>) => {
  return (
    <Wrapper
      matchIndex={matchIndex}
      roundIndex={roundIndex}
      isFinal={isFinal}
      isFirstMatch={isFirstMatch}
      isThirdPlaceMatch={isThirdPlaceMatch}>
      {isThirdPlaceMatch && <MatchTitle>Third place</MatchTitle>}
      <Team1>
        <TeamLogo />
        <TeamName></TeamName>
        <TeamScore></TeamScore>
      </Team1>
      <Team2>
        <TeamLogo />
        <TeamName></TeamName>
        <TeamScore></TeamScore>
      </Team2>
    </Wrapper>
  );
};

export default BracketMatch;
