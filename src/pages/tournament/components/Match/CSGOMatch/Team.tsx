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

  if (isReadyCheck) {
    return (
      <Wrapper>
        {team?.players.map((playerId) => {
          const isLeader = team.teamLeaderId === playerId;
          const isPlayerReady = match?.veto?.playersReady?.[playerId] ?? true;
          return (
            <PlayerContainer key={playerId} transparent={!isPlayerReady} reversed={reversed}>
              <PlayerInfo
                userId={playerId}
                isLeader={isLeader}
                transparent={!isPlayerReady}
                reversed={reversed}
              />
              <CurrentState>{isReadyCheck && <ReadyCheckAction userId={playerId} />}</CurrentState>
            </PlayerContainer>
          );
        })}
      </Wrapper>
    );
  }

  if (isVeto) {
    return (
      <Wrapper>
        {team?.players.map((playerId) => {
          const isLeader = team.teamLeaderId === playerId;
          const isBanningPlayer = isLeader && match.veto?.teamToBanMap === team.id;

          return (
            <PlayerContainer key={playerId} reversed={reversed} transparent={!isBanningPlayer}>
              <PlayerInfo
                userId={playerId}
                isLeader={isLeader}
                transparent={!isBanningPlayer}
                reversed={reversed}
              />
            </PlayerContainer>
          );
        })}
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {team?.players.map((playerId) => {
        const isLeader = team.teamLeaderId === playerId;
        return (
          <PlayerContainer key={playerId} reversed={reversed}>
            <PlayerInfo userId={playerId} isLeader={isLeader} reversed={reversed} />
          </PlayerContainer>
        );
      })}
    </Wrapper>
  );
};

export default Team;
