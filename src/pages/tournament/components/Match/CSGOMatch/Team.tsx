import { useMatchContext } from 'context/MatchContext';
import { CSGOMatch, CSGOMatchStage } from 'types/match/Match';
import { Team as TeamType } from 'types/team/Team';
import PlayerInfo from './PlayerInfo';
import ReadyCheckAction from './ReadyCheckAction';
import { CurrentState, PlayerContainer, Wrapper } from './Team.styles';

type Props = {
  team?: TeamType;
  reversed?: boolean;
};

const Team = ({ team, reversed }: Props) => {
  const { match } = useMatchContext<CSGOMatch>();

  const isReadyCheck = match.matchStage === CSGOMatchStage.READY;
  const isVeto = match.matchStage === CSGOMatchStage.VETO;

  if (!team) return null;

  return (
    <Wrapper>
      {team?.players.map((playerId) => {
        console.log(match);
        const isPlayerReady = match?.veto?.playersReady?.[playerId] ?? true;
        return (
          <PlayerContainer key={playerId} transparent={!isPlayerReady} reversed={reversed}>
            <PlayerInfo userId={playerId} transparent={!isPlayerReady} />
            <CurrentState>
              {isReadyCheck && <ReadyCheckAction userId={playerId} />}
              {isVeto && <div>veto</div>}
            </CurrentState>
          </PlayerContainer>
        );
      })}
    </Wrapper>
  );
};

export default Team;
