import useMatchFeed from 'api/feeds/hooks/useMatchFeed';
import { Team1, Team2, TeamLogo, TeamLogoImage, TeamName, Wrapper } from './BracketMatch.styles';
import TeamScore from './TeamScore';
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
        <TeamScore match={match} team={match.teams?.[0]} />
      </Team1>

      <Team2>
        <TeamLogo>
          <TeamLogoImage src={placeholderTeamLogo} />
        </TeamLogo>
        <TeamName>{match.teams?.[1].teamName}</TeamName>
        <TeamScore match={match} team={match.teams?.[1]} />
      </Team2>
    </Wrapper>
  );
};

export default BracketMatch;
