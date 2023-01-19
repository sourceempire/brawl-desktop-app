import React from 'react';
import { useUserFeed } from 'api/feeds';
import useLoggedInUser from 'api/requests/hooks/useLoggedInUser';
import EllipsisText from 'common/components/EllipsisText';
import Icons from 'common/components/Icon/Icons';
import { TeamStats } from 'types/match/Match';
import { Team } from 'types/team/Team';
import {
  MVPCount,
  ProfileImage,
  TableData,
  TableHeader,
  TeamLogo,
  Wrapper
} from './TeamTable.styles';
import placeholderTeamLogo from 'assets/images/placeholder-team-logo.png';

type Props = {
  team: Team;
  teamStats: TeamStats;
};

const TeamTable = ({ team, teamStats }: Props) => {
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
      <TableHeader>MVP</TableHeader>
      <TableHeader>HS</TableHeader>

      {team.players.map((userId) => {
        const { kills, deaths, assists, mvp, headshotKills } = teamStats.players[userId];

        const headshotPercentage = isNaN(headshotKills / kills)
          ? 0
          : `${((headshotKills / kills) * 100).toFixed(1)}`;

        return (
          <React.Fragment key={userId}>
            <PlayerCell userId={userId} />
            <TableData>{kills}</TableData>
            <TableData>{deaths}</TableData>
            <TableData>{assists}</TableData>
            <TableData>{kills - deaths}</TableData>
            <TableData>
              {mvp === 0 ? (
                mvp
              ) : (
                <>
                  <Icons.Star fill="yellow" height={14} />
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
