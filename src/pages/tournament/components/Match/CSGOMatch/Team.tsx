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
  const { gameMatchInfo } = useMatchContext<CSGOMatch>();

  const isReadyCheck = gameMatchInfo.matchStage === CSGOMatchStage.READY;
  const isVeto = gameMatchInfo.matchStage === CSGOMatchStage.VETO;

  if (!team) return null;

  if (isReadyCheck) {
    return (
      <Wrapper>
        {team?.players.map((player) => {
          const isLeader = team.teamLeaderId === player.userId;
          const isPlayerReady = gameMatchInfo?.veto?.playersReady?.[player.userId] ?? true;
          return (
            <PlayerContainer key={player.userId} transparent={!isPlayerReady} reversed={reversed}>
              <PlayerInfo
                userId={player.userId}
                isLeader={isLeader}
                transparent={!isPlayerReady}
                reversed={reversed}
              />
              <CurrentState>
                {isReadyCheck && <ReadyCheckAction userId={player.userId} />}
              </CurrentState>
            </PlayerContainer>
          );
        })}
      </Wrapper>
    );
  }

  if (isVeto) {
    return (
      <Wrapper>
        {team?.players.map((player) => {
          const isLeader = team.teamLeaderId === player.userId;
          const isBanningPlayer = isLeader && gameMatchInfo.veto?.teamToBanMap === team.id;

          return (
            <PlayerContainer key={player.userId} reversed={reversed} transparent={!isBanningPlayer}>
              <PlayerInfo
                userId={player.userId}
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
      {team?.players.map((player) => {
        const isLeader = team.teamLeaderId === player.userId;
        return (
          <PlayerContainer key={player.userId} reversed={reversed}>
            <PlayerInfo userId={player.userId} isLeader={isLeader} reversed={reversed} />
          </PlayerContainer>
        );
      })}
    </Wrapper>
  );
};

export default Team;
