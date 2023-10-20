import { useParams } from 'react-router-dom';
import { Content, Score, TeamScore, TeamTables, Wrapper } from '../MatchResult.styles';
import { useTournamentHubFeed } from 'api/feeds';
import { Team } from 'types/team/Team';
import { MockGameMatch } from 'types/match/Match';
import { BackgroundImage, Overlay, ScoreMiddleSection } from './MockMatchResult.styles';
import TeamTable from './MockTeamTable';
import useTournamentFeed from 'api/feeds/hooks/useTournamentFeed';

type Props = {
  match: MockGameMatch;
  team1: Team;
  team2: Team;
  disableBackgroundFadeIn?: boolean;
};

const MockMatchResult = ({ match, team1, team2 }: Props) => {
  const { tournamentId } = useParams() as { tournamentId: string };
  const { tournament } = useTournamentFeed({ tournamentId });
  const { tournamentHub } = useTournamentHubFeed({
    tournamentHubId: tournament.tournamentHubId
  });

  return (
    <Wrapper>
      <BackgroundImage imageId={tournamentHub.imageId} />
      <Overlay />
      <Content>
        <Score>
          <TeamScore isWinner={match.winner === team1.id}>{team1.score}</TeamScore>
          <ScoreMiddleSection>Result</ScoreMiddleSection>
          <TeamScore isWinner={match.winner === team2.id}>{team2.score}</TeamScore>
        </Score>
        <TeamTables>
          <TeamTable team={team1} />
          <div />
          <TeamTable team={team2} />
        </TeamTables>
      </Content>
    </Wrapper>
  );
};

export default MockMatchResult;
