import { CSGOMatch as CSGOMatchType } from 'types/match/Match';
import { Team } from 'types/team/Team';
import PlayerInfo from '../PlayerInfo';
import { Action, MiddleContainer, PlayerContainer, TeamContainer, Wrapper } from './Match.styles';

type Props = {
  match: CSGOMatchType;
  team1?: Team;
  team2?: Team;
};
const CSGOMatch = ({ match, team1, team2 }: Props) => {
  return (
    <Wrapper>
      <TeamContainer>
        {team1?.players.map((playerId) => (
          <PlayerContainer key={playerId}>
            <PlayerInfo userId={playerId} />
            <Action />
          </PlayerContainer>
        ))}
      </TeamContainer>
      <MiddleContainer>middle</MiddleContainer>
      <TeamContainer>
        {team2?.players.map((playerId) => (
          <PlayerContainer key={playerId} reversed>
            <PlayerInfo userId={playerId} />
            <Action />
          </PlayerContainer>
        ))}
      </TeamContainer>
    </Wrapper>
  );
};

export default CSGOMatch;
