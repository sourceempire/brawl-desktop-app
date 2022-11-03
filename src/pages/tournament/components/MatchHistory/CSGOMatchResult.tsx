import useLoggedInUser from 'api/requests/hooks/useLoggedInUser';
import { csgoMaps } from 'types/csgo/maps';
import { CSGOMatchResult as CSGOMatchResultType } from 'types/match/Match';
import { Team } from 'types/team/Team';
import { MapName, MapScore, Score, TeamTables } from './CSGOMatchResult.styles';
import { Backdrop, Content, Wrapper } from './MatchResult.styles';
import TeamTable from './TeamTable';

type Props = {
  matchResult: CSGOMatchResultType;
  teams: { [teamId: string]: Team };
};

const CSGOMatchResult = ({ matchResult, teams }: Props) => {
  const { user } = useLoggedInUser();

  // const team1Id = Object.values(teams).find((team) => team.players.includes(user.id))?.id;

  const teamIds = Object.keys(teams).sort((team1Id, team2Id) => {
    const loggedInUserIsInTeam =
      teams[team1Id].players.includes(user.id) || teams[team2Id].players.includes(user.id);

    if (loggedInUserIsInTeam) {
      return -1;
    }
    return 0;
  });

  const mapInfo = matchResult.mapsInfo[0];
  const mapDisplayName = csgoMaps[matchResult.mapsInfo[0].mapName].displayName;
  const mapImage = csgoMaps[matchResult.mapsInfo[0].mapName].imageUrl.big;

  const team1 = teams[teamIds[0]];
  const team2 = teams[teamIds[1]];

  return (
    <Wrapper>
      <Backdrop mapImageUrl={mapImage} />
      <Content>
        <Score>
          <MapScore isWinner={mapInfo.mapWinner === team1.id}>{mapInfo.score[team1.id]}</MapScore>
          <MapName>{mapDisplayName}</MapName>
          <MapScore isWinner={mapInfo.mapWinner === team2.id}>{mapInfo.score[team2.id]}</MapScore>
        </Score>
        <TeamTables>
          <TeamTable team={team1} />
          <div>ds</div>
          <TeamTable team={team2} />
        </TeamTables>
      </Content>
    </Wrapper>
  );
};

export default CSGOMatchResult;
