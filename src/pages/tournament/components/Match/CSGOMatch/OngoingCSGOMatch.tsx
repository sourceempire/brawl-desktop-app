import { useMatchStatsFeed } from 'api/feeds/hooks/useMatchStatsFeed';
import popup from 'common/popup';
import { useMatchContext } from 'context/MatchContext';
import { SimpleLoading } from 'frames/main/friends/components/Shared.styles';
import { csgoMaps } from 'types/csgo/maps';
import { CSGOMatch, CSGOMatchStage } from 'types/match/Match';
import {
  ClipBoard,
  CopyIcon,
  JoinServerButton,
  JoinServerWrapper,
  MapImage,
  MapImageWrapper,
  MapName,
  Score,
  ServerUrl,
  ServerUrlWrapper,
  Wrapper
} from './OngoingCSGOMatch.styles';

const OngoingCSGOMatch = () => {
  const { match, team1, team2 } = useMatchContext<CSGOMatch>();
  const { matchStats } = useMatchStatsFeed({ matchId: match.id });

  if (!match.matchSettings.maps?.[0]) return null;
  if (!team1 || !team2) return null;

  const isStarting = match.matchStage === CSGOMatchStage.STARTING_MATCH;
  const isOngoing = match.matchStage === CSGOMatchStage.ONGOING;

  const map = match.matchSettings.maps[0];
  const { displayName, imageUrl } = csgoMaps[map];

  const handleCopyServerUrl = () => {
    if (!match?.serverAddress) return;
    const textToCopy = `connect ${match.serverAddress}`;

    navigator.clipboard.writeText('connect ' + match.serverAddress);
    popup.info(`Copied '${textToCopy}' to clipboard`, { timer: 2000 });
  };

  return (
    <Wrapper>
      <MapImageWrapper>
        <MapImage src={imageUrl.big} />
        <MapName>{displayName}</MapName>

        <Score>{matchStats?.maps?.[0]?.teams[team1.id].score}</Score>
        <Score>-</Score>
        <Score>{matchStats?.maps?.[0]?.teams[team2.id].score}</Score>
      </MapImageWrapper>
      {isStarting && (
        <>
          <SimpleLoading />
          <div>Starting CS:GO Server</div>
        </>
      )}
      {isOngoing && (
        <>
          <JoinServerWrapper>
            <ServerUrlWrapper onClick={handleCopyServerUrl}>
              <ClipBoard>
                <CopyIcon />
              </ClipBoard>
              <ServerUrl>connect {match.serverAddress}</ServerUrl>
            </ServerUrlWrapper>
            <JoinServerButton primary>Connect to server</JoinServerButton>
          </JoinServerWrapper>
          <div>If the game doesn{"'"}t start, paste the server url into the game console</div>
        </>
      )}
    </Wrapper>
  );
};

export default OngoingCSGOMatch;
