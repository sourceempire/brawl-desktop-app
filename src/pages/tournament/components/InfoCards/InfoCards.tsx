import { useEffect, useState } from 'react';
import Game, { GameName } from 'types/Game';
import { MatchSettingsTypes } from 'types/MatchSettings';
import { TournamentHub } from 'types/tournaments/TournamentInfo';
import { formatDateAndTime } from 'utils/dateUtils';
import { getTournamentModeShort, getTournamentSeriesTypeLong } from 'utils/tournamentUtils';
import {
  EntryFeeIcon,
  GameModeIcon,
  GameNameIcon,
  InfoCard,
  InfoHeader,
  InfoText,
  MatchTypeIcon,
  PrizePoolIcon,
  RegistrationCloseIcon,
  TournamentSizeIcon,
  TournamentStartIcon
} from './InfoCards.styles';

type Props = {
  tournamentHub: TournamentHub;
};

const InfoCards = ({ tournamentHub }: Props) => {
  const [gameName, setGameName] = useState('');
  const [gameMode, setGameMode] = useState('');
  const [gameType, setGameType] = useState('');

  const setInfoSettings = (tournamentHub: TournamentHub) => {
    if (tournamentHub.gameId === Game.CSGO) {
      setGameName(GameName[Game.CSGO]);
      tournamentHub.matchSettings.__type = MatchSettingsTypes.CSGO;
      setGameType(getTournamentSeriesTypeLong(tournamentHub));
      setGameMode(getTournamentModeShort(tournamentHub));
    }
  };
  useEffect(() => {
    setInfoSettings(tournamentHub);
  });

  return (
    <>
      <InfoCard>
        <InfoHeader>
          <GameNameIcon />
          Game
        </InfoHeader>
        <InfoText>{gameName}</InfoText>
      </InfoCard>
      <InfoCard>
        <InfoHeader>
          <GameModeIcon />
          Game Mode
        </InfoHeader>
        <InfoText>{gameMode}</InfoText>
      </InfoCard>
      <InfoCard>
        <InfoHeader>
          <MatchTypeIcon />
          Match Type
        </InfoHeader>
        <InfoText>{gameType}</InfoText>
      </InfoCard>
      {/* //TODO Add Tournament Format */}
      {/* //TODO Add Side Decider */}
      <InfoCard>
        <InfoHeader>
          <TournamentSizeIcon />
          Size of Tournament
        </InfoHeader>
        <InfoText>{tournamentHub.teamsAllowed}</InfoText>
      </InfoCard>
      <InfoCard>
        <InfoHeader>
          <RegistrationCloseIcon />
          Registration Closes
        </InfoHeader>
        <InfoText>
          {tournamentHub.registrationCloseTime &&
            formatDateAndTime(tournamentHub.registrationCloseTime)}
        </InfoText>
      </InfoCard>
      <InfoCard>
        <InfoHeader>
          <TournamentStartIcon />
          Tournament Start
        </InfoHeader>
        <InfoText>{tournamentHub.startTime && formatDateAndTime(tournamentHub.startTime)}</InfoText>
      </InfoCard>
      <InfoCard>
        <InfoHeader>
          <PrizePoolIcon />
          Prize Pool
        </InfoHeader>
        <InfoText>{tournamentHub.currentPrizePool}</InfoText>
      </InfoCard>
      <InfoCard>
        <InfoHeader>
          <EntryFeeIcon />
          Entry Fee
        </InfoHeader>
        <InfoText>€{tournamentHub.entranceFee} / person</InfoText>
      </InfoCard>
    </>
  );
};

export default InfoCards;
