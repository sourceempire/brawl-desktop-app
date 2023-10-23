import useMatchFeed from 'api/feeds/hooks/useMatchFeed';
import { useMatchStatsFeed } from 'api/feeds/hooks/useMatchStatsFeed';
import { useLoggedInUser } from 'common/hooks';
import { getMatchOutcome, getTeamScore } from 'utils/matchUtils';
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
  const { gameMatchInfo, team1, team2, isLoading } = useMatchFeed({ matchId });

  let teamIdOfLoggedInUser;

  if (gameMatchInfo.team1?.players.some((player) => player.userId === user.id)) {
    teamIdOfLoggedInUser = gameMatchInfo.team1.id;
  } else if (gameMatchInfo.team2?.players.some((player) => player.userId === user.id)) {
    teamIdOfLoggedInUser = gameMatchInfo.team2.id;
  }

  const loggedInUserMatchOutcome =
    !isLoading && teamIdOfLoggedInUser
      ? getMatchOutcome({ teamIdOfLoggedInUser, gameMatchInfo })
      : MatchOutcome.NotDecided;

  if (isLoading) return null;

  return (
    <Wrapper
      matchIndex={matchIndex}
      roundIndex={roundIndex}
      isFinal={isFinal}
      isFirstMatch={isFirstMatch}>
      <Team1
        matchOutcome={
          gameMatchInfo.team1?.id === teamIdOfLoggedInUser ? loggedInUserMatchOutcome : null
        }>
        <TeamLogo>
          <TeamLogoImage src={placeholderTeamLogo} />
        </TeamLogo>
        <TeamName>{gameMatchInfo.team1?.name}</TeamName>
        <TeamScore winner={gameMatchInfo.winner === gameMatchInfo.team1?.id}>
          {team1.score}
        </TeamScore>
      </Team1>
      <Team2
        matchOutcome={
          gameMatchInfo.team2?.id === teamIdOfLoggedInUser ? loggedInUserMatchOutcome : null
        }>
        <TeamLogo>
          <TeamLogoImage src={placeholderTeamLogo} />
        </TeamLogo>
        <TeamName>{gameMatchInfo.team2?.name}</TeamName>
        <TeamScore winner={gameMatchInfo.winner === gameMatchInfo.team2?.id}>
          {team2.score}
        </TeamScore>
      </Team2>
    </Wrapper>
  );
};

export default BracketMatch;
