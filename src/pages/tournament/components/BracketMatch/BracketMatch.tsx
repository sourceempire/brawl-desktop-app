import useMatchFeed from 'api/feeds/hooks/useMatchFeed';
import { useLoggedInUser } from 'common/hooks';
import { getMatchOutcome } from 'utils/matchUtils';
import {
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
};

const BracketMatch = ({ matchId, matchIndex, roundIndex, isFirstMatch, isFinal }: Props) => {
  const user = useLoggedInUser();
  const { match, team1, team2, isLoading } = useMatchFeed({ matchId });

  if (!team1 || !team2) return null;

  let teamIdOfLoggedInUser;

  if (team1.players.some((player) => player === user.id)) {
    teamIdOfLoggedInUser = team1.id;
  } else if (team2.players.some((player) => player === user.id)) {
    teamIdOfLoggedInUser = team2.id;
  }

  const loggedInUserMatchOutcome =
    !isLoading && teamIdOfLoggedInUser
      ? getMatchOutcome({ teamIdOfLoggedInUser, match })
      : MatchOutcome.NotDecided;

  return (
    <Wrapper
      matchIndex={matchIndex}
      roundIndex={roundIndex}
      isFinal={isFinal}
      isFirstMatch={isFirstMatch}>
      <Team1 matchOutcome={team1.id === teamIdOfLoggedInUser ? loggedInUserMatchOutcome : null}>
        <TeamLogo>
          <TeamLogoImage src={placeholderTeamLogo} />
        </TeamLogo>
        <TeamName>{team1.teamName}</TeamName>
        <TeamScore winner={match.winnerTeamId === team1.id}>
          {team1.score ? team1.score : 0}
        </TeamScore>
      </Team1>
      <Team2 matchOutcome={team2.id === teamIdOfLoggedInUser ? loggedInUserMatchOutcome : null}>
        <TeamLogo>
          <TeamLogoImage src={placeholderTeamLogo} />
        </TeamLogo>
        <TeamName>{team2.teamName}</TeamName>
        <TeamScore winner={match.winnerTeamId === team2.id}>
          {team2.score ? team2.score : 0}
        </TeamScore>
      </Team2>
    </Wrapper>
  );
};

export default BracketMatch;
