import { useState } from 'react';
import useMatchFeed from 'api/feeds/hooks/useMatchFeed';
import { useMatchStatsFeed } from 'api/feeds/hooks/useMatchStatsFeed';
import { useLoggedInUser } from 'common/hooks';
import { getTeamScore } from 'utils/matchUtils';
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
  const [matchOutcome, setMatchOutcome] = useState<MatchOutcome>(MatchOutcome.DEFAULT);
  const [isUserInMatch, setIsUserInMatch] = useState(false);
  const user = useLoggedInUser();
  const { match, isLoading } = useMatchFeed(matchId);
  const { hasMatchStats, matchStats, isLoading: isLoadingMatchStats } = useMatchStatsFeed(matchId);

  const team1Score = hasMatchStats
    ? getTeamScore({ matchStats, teamId: match.teams?.[0].id })
    : null;
  const team2Score = hasMatchStats
    ? getTeamScore({ matchStats, teamId: match.teams?.[1].id })
    : null;

  const userIsInMatchTeamId = match.teams?.find((team) => team.players.includes(user.id))?.id;
  const teamIndex = userIsInMatchTeamId
    ? match.teams?.findIndex((team) => team.id === userIsInMatchTeamId)
    : -1;

  if (hasMatchStats && userIsInMatchTeamId) {
    if (matchStats.winner === userIsInMatchTeamId) {
      setMatchOutcome(MatchOutcome.WIN);
      setIsUserInMatch(true);
    } else {
      setMatchOutcome(MatchOutcome.LOSS);
      setIsUserInMatch(true);
    }
  }

  if (isLoading || isLoadingMatchStats) return null;

  return (
    <Wrapper
      matchIndex={matchIndex}
      roundIndex={roundIndex}
      isFinal={isFinal}
      isFirstMatch={isFirstMatch}
      isMatchOver={hasMatchStats}
      isUserInMatch={isUserInMatch}>
      <Team1 matchOutcome={userIsInMatchTeamId && teamIndex === 0 ? matchOutcome : undefined}>
        <TeamLogo>
          <TeamLogoImage src={placeholderTeamLogo} />
        </TeamLogo>
        <TeamName>{match.teams?.[0].teamName}</TeamName>
        <TeamScore winner={matchStats.winner === match.teams?.[0].id}>{team1Score}</TeamScore>
      </Team1>
      <Team2 matchOutcome={userIsInMatchTeamId && teamIndex === 1 ? matchOutcome : undefined}>
        <TeamLogo>
          <TeamLogoImage src={placeholderTeamLogo} />
        </TeamLogo>
        <TeamName>{match.teams?.[1].teamName}</TeamName>
        <TeamScore winner={matchStats.winner === match.teams?.[1].id}>{team2Score}</TeamScore>
      </Team2>
    </Wrapper>
  );
};

export default BracketMatch;
