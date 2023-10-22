import React from 'react';
import { useUserFeed } from 'api/feeds';
import { useLoggedInUser } from 'common/hooks';
import { EllipsisText } from 'common/ui';
import { TeamStats } from 'types/match/Match';
import { Team } from 'types/team/Team';
import {
  MVPCount,
  ProfileImage,
  TableData,
  TableHeader,
  TeamLogo,
  Wrapper
} from './CSGOTeamTable.styles';
import placeholderTeamLogo from 'assets/images/placeholder-team-logo.png';
import { Icons } from '@sourceempire/brawl-ui';

type Props = {
  team: Team;
  teamStats: TeamStats;
};

const TeamTable = ({ team, teamStats }: Props) => {
  return (
    <Wrapper>
      <TableHeader>
        <TeamLogo src={placeholderTeamLogo} />
        {team.name}
      </TableHeader>
      <TableHeader>K</TableHeader>
      <TableHeader>D</TableHeader>
      <TableHeader>A</TableHeader>
      <TableHeader>+/-</TableHeader>
      <TableHeader>MVP</TableHeader>
      <TableHeader>HS</TableHeader>

      {team.players.map((player) => {
        const { kills, deaths, assists, mvp, headshotKills } = teamStats.players[player.userId];

        const headshotPercentage = isNaN(headshotKills / kills)
          ? 0
          : `${((headshotKills / kills) * 100).toFixed(1)}`;

        return (
          <React.Fragment key={player.userId}>
            <PlayerCell userId={player.userId} />
            <TableData>{kills}</TableData>
            <TableData>{deaths}</TableData>
            <TableData>{assists}</TableData>
            <TableData>{kills - deaths}</TableData>
            <TableData>
              {mvp === 0 ? (
                mvp
              ) : (
                <>
                  <Icons.Star color="yellow" height={14} />
                  <MVPCount>{mvp}</MVPCount>
                </>
              )}
            </TableData>
            <TableData>{headshotPercentage}%</TableData>
          </React.Fragment>
        );
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
