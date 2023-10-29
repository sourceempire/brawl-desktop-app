import { Content, Score, TeamScore, TeamTables, Wrapper } from '../MatchResult.styles';
import { Team } from 'types/team/Team';
import { MockGameMatch } from 'types/match/Match';
import { BackgroundImage, Overlay, ScoreMiddleSection } from './MockMatchResult.styles';
import TeamTable from './MockTeamTable';
import defaultImage from 'assets/images/temporary-space.webp';

type Props = {
  gameMatchInfo: MockGameMatch;
  team1: Team;
  team2: Team;
  imageId?: string;
  disableBackgroundFadeIn?: boolean;
};

const MockMatchResult = ({ gameMatchInfo, team1, team2, imageId }: Props) => {
  const backgroundImage = imageId ? imageId : defaultImage;

  return (
    <Wrapper>
      <BackgroundImage src={backgroundImage} />
      <Overlay />
      <Content>
        <Score>
          <TeamScore isWinner={gameMatchInfo.winner === team1.id}>{team1.score}</TeamScore>
          <ScoreMiddleSection>Result</ScoreMiddleSection>
          <TeamScore isWinner={gameMatchInfo.winner === team2.id}>{team2.score}</TeamScore>
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
