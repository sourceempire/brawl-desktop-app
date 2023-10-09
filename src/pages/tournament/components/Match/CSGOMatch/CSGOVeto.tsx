import { useState } from 'react';
import CSGOMatchRequests from 'api/requests/match/CSGOMatchRequests';
import { useLoggedInUser } from 'common/hooks';
import popup from 'common/popup';
import { useMatchContext } from 'context/MatchContext';
import { csgoMaps } from 'types/csgo/maps';
import { CSGOMatch } from 'types/match/Match';
import CountDown from '../../CountDown';
import {
  ActionContainer,
  CSGOMapImage,
  CSGOMapName,
  CSGOMapWrapper,
  DropMapButton,
  Maps,
  Wrapper
} from './CSGOVeto.styles';

const CSGOVeto = () => {
  const user = useLoggedInUser();
  const { match } = useMatchContext<CSGOMatch>();
  const [mapToBan, setMapToBan] = useState<string>();

  let loggedInUsersTeam;
  if (match.team1?.players.includes(user.id)) {
    loggedInUsersTeam = match.team1;
  } else if (match.team2?.players.includes(user.id)) {
    loggedInUsersTeam = match.team2;
  }

  if (!match.veto) return null;
  if (!loggedInUsersTeam) return null;

  let banningTeam;
  if (match.team1?.id === match.veto?.teamToBanMap) {
    banningTeam = match.team1;
  } else if (match.team2?.id === match.veto?.teamToBanMap) {
    banningTeam = match.team2;
  }

  const isBanningTeam = match.veto?.teamToBanMap === loggedInUsersTeam.id;
  const loggedInUserIsLeader = loggedInUsersTeam.teamLeaderId === user.id;
  const loggedInUserIsBanningPlayer = isBanningTeam && loggedInUserIsLeader;

  const maps = Object.keys(match.veto.bannedMaps).sort((mapNameA, mapNameB) =>
    mapNameA > mapNameB ? 1 : -1
  );

  const handleMapBan = () => {
    if (!mapToBan) return;
    setMapToBan(undefined);

    CSGOMatchRequests.banMap(match.id, mapToBan).catch((error) => {
      setMapToBan(mapToBan);
      popup.error(error.error);
    });
  };

  return (
    <Wrapper>
      <Maps>
        {maps.map((mapName) => {
          const isBanned = Boolean(match.veto?.bannedMaps[mapName]);
          const isActive = mapToBan === mapName;
          const isDisabled = !loggedInUserIsBanningPlayer || isBanned;
          return (
            <CSGOMapWrapper
              key={mapName}
              banned={isBanned}
              active={isActive}
              disabled={isDisabled}
              onClick={() => setMapToBan(mapName)}>
              <CSGOMapImage src={csgoMaps[mapName].imageUrl.small} />
              <CSGOMapName>{csgoMaps[mapName].displayName}</CSGOMapName>
            </CSGOMapWrapper>
          );
        })}
      </Maps>

      {isBanningTeam ? (
        <ActionContainer>
          {loggedInUserIsLeader ? (
            mapToBan ? (
              <DropMapButton primary onClick={handleMapBan}>
                Drop {csgoMaps[mapToBan].displayName}
              </DropMapButton>
            ) : (
              'Choose a map to drop'
            )
          ) : (
            <div>Your team{"'"}s turn to drop a map</div>
          )}
        </ActionContainer>
      ) : (
        <ActionContainer>
          <strong>
            {banningTeam?.teamName}
            {"'"}s
          </strong>
          &nbsp; turn to drop a map
        </ActionContainer>
      )}

      <div>A random map is dropped in</div>
      <CountDown startTime={match.veto.currentMapBanExpiration || 0} />
    </Wrapper>
  );
};

export default CSGOVeto;
