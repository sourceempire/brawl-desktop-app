import useMatchFeed from 'api/feeds/hooks/useMatchFeed';
import useTeamScore from 'pages/tournament/hooks/useTeamScore';
import {
  Team1,
  Team2,
  TeamLogo,
  TeamLogoImage,
  TeamName,
  TeamScore,
  Wrapper
} from './BracketMatch.styles';
import placeholderTeamLogo from 'assets/images/placeholder-team-logo.png';

type Props = {
  matchId: string;
  matchIndex: number;
  roundIndex: number;
  isFirstMatch: boolean;
  isFinal: boolean;
};

const BracketMatch = ({ matchId, matchIndex, roundIndex, isFirstMatch, isFinal }: Props) => {
  const { match, isLoading } = useMatchFeed(matchId);
  const team1Score = useTeamScore({ match, teamId: match.teams?.[0].id });
  const team2Score = useTeamScore({ match, teamId: match.teams?.[1].id });

  console.log(isLoading);
  if (isLoading) return null;

  return (
    <Wrapper
      matchIndex={matchIndex}
      roundIndex={roundIndex}
      isFinal={isFinal}
      isFirstMatch={isFirstMatch}>
      <Team1>
        <TeamLogo>
          <TeamLogoImage src={placeholderTeamLogo} />
        </TeamLogo>
        <TeamName>{match.teams?.[0].teamName}</TeamName>
        <TeamScore winner={match.winnerTeamId === match.teams?.[0].id}>{team1Score}</TeamScore>
      </Team1>

      <Team2>
        <TeamLogo>
          <TeamLogoImage src={placeholderTeamLogo} />
        </TeamLogo>
        <TeamName>{match.teams?.[1].teamName}</TeamName>
        <TeamScore winner={match.winnerTeamId === match.teams?.[1].id}>{team2Score}</TeamScore>
      </Team2>
    </Wrapper>
  );
};

export default BracketMatch;
