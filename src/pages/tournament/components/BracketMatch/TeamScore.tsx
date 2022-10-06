import { Match, isCSGOMatch } from 'types/match/Match';
import { Team } from 'types/team/Team';
import { TeamScoreWrapper } from './BracketMatch.styles';

type Props = {
  match: Match;
  team: Team | undefined;
};

const TeamScore = ({ match, team }: Props) => {
  if (isCSGOMatch(match) && match.mapsInfo?.[0]?.score && team) {
    return (
      <TeamScoreWrapper>
        {match.mapsInfo[0].score && match.mapsInfo[0].score[team.id]}
      </TeamScoreWrapper>
    );
  }

  return <TeamScoreWrapper />;
};

export default TeamScore;
