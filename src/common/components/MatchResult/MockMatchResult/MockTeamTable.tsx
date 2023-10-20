import React from 'react';
import { useUserFeed } from 'api/feeds';
import { useLoggedInUser } from 'common/hooks';
import { EllipsisText } from 'common/ui';
import { Team } from 'types/team/Team';
import { ProfileImage, TableData, TableHeader, TeamLogo, Wrapper } from './MockTeamTable.styles';
import placeholderTeamLogo from 'assets/images/placeholder-team-logo.png';

type Props = {
  team: Team;
};

const TeamTable = ({ team }: Props) => {
  return (
    <Wrapper>
      <TableHeader>
        <TeamLogo src={placeholderTeamLogo} />
        {team.name}
      </TableHeader>

      {team.players.map((player) => {
        return <PlayerCell userId={player.userId} />;
      })}
    </Wrapper>
  );
};

export default TeamTable;

const PlayerCell = ({ userId }: { userId: string }) => {
  const loggedInUser = useLoggedInUser();
  const { user } = useUserFeed({ userId });

  if (!user) return <TableData />;

  const isLoggedInUser = loggedInUser.id === user.id;

  return (
    <TableData bold={isLoggedInUser}>
      <ProfileImage src={user?.imageUrl} />
      <EllipsisText>{user?.userTag}</EllipsisText>
    </TableData>
  );
};
