import React from 'react';
import { useUserFeed } from 'api/feeds';
import { useLoggedInUser } from 'common/hooks';
import { EllipsisText } from 'common/ui';
import { Team } from 'types/team/Team';
import {
  ProfileImage,
  ProfileWrapper,
  TableData,
  TableHeader,
  TeamLogo,
  Wrapper
} from './MockTeamTable.styles';
import placeholderTeamLogo from 'assets/images/placeholder-team-logo.png';
import { LeaderStar } from 'frames/main/friends/components/Shared.styles';

type TeamTableProps = {
  team: Team;
};

type PlayerCellProps = {
  userId: string;
  team: Team;
};

const TeamTable = ({ team }: TeamTableProps) => {
  return (
    <Wrapper>
      <TableHeader>
        <TeamLogo src={placeholderTeamLogo} />
        {team.teamName}
      </TableHeader>
      <TableHeader>Kills</TableHeader>

      {team.players.map((playerId) => {
        const kills = team.playerStats?.[playerId]?.kills || '-';

        return (
          <React.Fragment key={playerId}>
            <PlayerCell userId={playerId} team={team} />
            <TableData>{kills}</TableData>
          </React.Fragment>
        );
      })}
    </Wrapper>
  );
};

export default TeamTable;

const PlayerCell = ({ userId, team }: PlayerCellProps) => {
  const loggedInUser = useLoggedInUser();
  const { user } = useUserFeed({ userId });

  if (!user) return <TableData />;

  const isLoggedInUser = loggedInUser.id === user.id;

  const isLeader = user.id === team.teamLeaderId;

  return (
    <TableData bold={isLoggedInUser}>
      <ProfileWrapper>
        {isLeader && <LeaderStar size="small" />}
        <ProfileImage src={user?.imageUrl} />
      </ProfileWrapper>
      <EllipsisText>{user?.userTag}</EllipsisText>
    </TableData>
  );
};
