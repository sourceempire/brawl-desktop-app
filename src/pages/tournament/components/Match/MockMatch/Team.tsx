import { Team as TeamType } from 'types/team/Team';
import PlayerInfo from './PlayerInfo';
import { PlayerContainer, Wrapper } from './Team.styles';

type Props = {
  team?: TeamType;
  reversed?: boolean;
};

const Team = ({ team, reversed }: Props) => {
  if (!team) return null;

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
