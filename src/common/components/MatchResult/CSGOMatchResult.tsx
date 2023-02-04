import { csgoMaps } from 'types/csgo/maps';
import { CSGOMatch, MatchStats, RoundWin } from 'types/match/Match';
import { Team } from 'types/team/Team';
import { MapName, MapScore, Score, TeamTables } from './CSGOMatchResult.styles';
import { Backdrop, Content, Wrapper } from './MatchResult.styles';
import RoundWinnerIndicatorList from './RoundWinnerIndicatorList';
import TeamTable from './TeamTable';

type Props = {
  matchStats: MatchStats;
  match: CSGOMatch;
  roundWins: RoundWin[];
  team1: Team;
  team2: Team;
  disableBackgroundFadeIn?: boolean;
};

const CSGOMatchResult = ({
  matchStats,
  match,
  roundWins,
  team1,
  team2,
  disableBackgroundFadeIn
}: Props) => {
  if (!matchStats.maps) return null;
  const map = matchStats.maps[0];
  const mapDisplayName = csgoMaps[map.mapName].displayName;
  const mapImage = csgoMaps[map.mapName].imageUrl.big;
  return (
    <Wrapper>
      <Backdrop mapImageUrl={mapImage} disableFade={disableBackgroundFadeIn} />
      <Content>
        <Score>
          <MapScore isWinner={map.winner === team1.id}>{map.teams[team1.id].score}</MapScore>
          <MapName>{mapDisplayName}</MapName>
          <MapScore isWinner={map.winner === team2.id}>{map.teams[team2.id].score}</MapScore>
        </Score>
        <TeamTables>
          <TeamTable team={team1} teamStats={map.teams[team1.id]} />
          <RoundWinnerIndicatorList
            team1={team1}
            team2={team2}
            roundWins={roundWins}
            gameMode={match.matchSettings.mode}
          />
          <TeamTable team={team2} teamStats={map.teams[team2.id]} />
        </TeamTables>
      </Content>
    </Wrapper>
  );
};

export default CSGOMatchResult;
