import { csgoMaps } from 'types/csgo/maps';
import { CSGOMatch } from 'types/match/Match';
import { Team } from 'types/team/Team';
import { MapName, MapScore, Score, TeamTables } from './CSGOMatchResult.styles';
import { Backdrop, Content, Wrapper } from './MatchResult.styles';
import RoundWinnerIndicatorList from './RoundWinnerIndicatorList';
import TeamTable from './TeamTable';

type Props = {
  match: CSGOMatch;
  team1: Team;
  team2: Team;
  disableBackgroundFadeIn?: boolean;
};

const CSGOMatchResult = ({ match, team1, team2, disableBackgroundFadeIn }: Props) => {
  if (!match.mapsInfo) return null;

  const mapInfo = match.mapsInfo[0];
  const mapDisplayName = csgoMaps[match.mapsInfo[0].mapName].displayName;
  const mapImage = csgoMaps[match.mapsInfo[0].mapName].imageUrl.big;

  return (
    <Wrapper>
      <Backdrop mapImageUrl={mapImage} disableFade={disableBackgroundFadeIn} />
      <Content>
        <Score>
          <MapScore isWinner={mapInfo.mapWinner === team1.id}>{mapInfo.score[team1.id]}</MapScore>
          <MapName>{mapDisplayName}</MapName>
          <MapScore isWinner={mapInfo.mapWinner === team2.id}>{mapInfo.score[team2.id]}</MapScore>
        </Score>
        <TeamTables>
          <TeamTable team={team1} />
          <RoundWinnerIndicatorList
            team1={team1}
            team2={team2}
            gameMode={match.matchSettings.mode}
          />
          <TeamTable team={team2} />
        </TeamTables>
      </Content>
    </Wrapper>
  );
};

export default CSGOMatchResult;
