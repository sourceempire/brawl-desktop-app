import React from 'react';
import { useUserFeed } from 'api/feeds';
import useLoggedInUser from 'api/requests/hooks/useLoggedInUser';
import EllipsisText from 'common/components/EllipsisText';
import { Team } from 'types/team/Team';
import { ProfileImage, TableData, TableHeader, TeamLogo, Wrapper } from './TeamTable.styles';
import placeholderTeamLogo from 'assets/images/placeholder-team-logo.png';

type Props = {
  team: Team;
};

const TeamTable = ({ team }: Props) => {
  return (
    <Wrapper>
      <TableHeader>
        <TeamLogo src={placeholderTeamLogo} />
        {team.teamName}
      </TableHeader>
      <TableHeader>K</TableHeader>
      <TableHeader>D</TableHeader>
      <TableHeader>A</TableHeader>
      <TableHeader>+/-</TableHeader>
      <TableHeader>K/D</TableHeader>
      <TableHeader>ADR</TableHeader>
      <TableHeader>HS%</TableHeader>

      {team.players.map((userId) => (
        <React.Fragment key={userId}>
          <PlayerCell userId={userId} />
          <TableData>-</TableData>
          <TableData>-</TableData>
          <TableData>-</TableData>
          <TableData>-</TableData>
          <TableData>-</TableData>
          <TableData>-</TableData>
          <TableData>-</TableData>
        </React.Fragment>
      ))}
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
