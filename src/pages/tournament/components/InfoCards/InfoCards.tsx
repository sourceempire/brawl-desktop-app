import { useEffect, useState } from 'react';
import { IconEnum } from 'common/ui';
import Game, { GameName } from 'types/Game';
import { GameId } from 'types/MatchSettings';
import { TournamentHub } from 'types/tournaments/TournamentInfo';
import { formatDateAndTime } from 'utils/dateUtils';
import { getTournamentModeShort, getTournamentSeriesTypeLong } from 'utils/tournamentUtils';
import { InfoCard, InfoCardWrapper, InfoHeader, InfoText, StyledIcon } from './InfoCards.styles';

type Props = {
  tournamentHub: TournamentHub;
};

const InfoCards = ({ tournamentHub }: Props) => {
  const [gameName, setGameName] = useState('');
  const [gameMode, setGameMode] = useState('');
  const [gameType, setGameType] = useState('');

  //TODO -> Replace type with gameId from matchSettings
  const setInfoSettings = (tournamentHub: TournamentHub) => {
    if (tournamentHub.gameId === Game.CSGO) {
      setGameName(GameName[Game.CSGO]);
      tournamentHub.matchSettings.gameId = GameId.CSGO;
      setGameType(getTournamentSeriesTypeLong(tournamentHub));
      setGameMode(getTournamentModeShort(tournamentHub));
    }
  };
  useEffect(() => {
    setInfoSettings(tournamentHub);
  });

  return (
    <InfoCardWrapper isRegistrationClosed={tournamentHub.registrationClosed}>
      <InfoCard>
        <InfoHeader>
          <StyledIcon icon={IconEnum.Controller} />
          Game
        </InfoHeader>
        <InfoText>{gameName}</InfoText>
      </InfoCard>
      <InfoCard>
        <InfoHeader>
          <StyledIcon icon={IconEnum.Sword} />
          Game Mode
        </InfoHeader>
        <InfoText>{gameMode}</InfoText>
      </InfoCard>
      <InfoCard>
        <InfoHeader>
          <StyledIcon icon={IconEnum.CrossedSwords} />
          Match Type
        </InfoHeader>
        <InfoText>{gameType}</InfoText>
      </InfoCard>
      {/* //TODO -> Add Tournament Format */}
      {/* //TODO -> Add Side Decider */}
      <InfoCard>
        <InfoHeader>
          <StyledIcon icon={IconEnum.Friends} />
          Size of Tournament
        </InfoHeader>
        <InfoText>{tournamentHub.teamsAllowed}</InfoText>
      </InfoCard>
      <InfoCard>
        <InfoHeader>
          <StyledIcon icon={IconEnum.LockClosed} />
          Registration Closes
        </InfoHeader>
        <InfoText>
          {tournamentHub.registrationCloseTime &&
            formatDateAndTime(tournamentHub.registrationCloseTime)}
        </InfoText>
      </InfoCard>
      <InfoCard>
        <InfoHeader>
          <StyledIcon icon={IconEnum.Calendar} />
          Tournament Start
        </InfoHeader>
        <InfoText>{tournamentHub.startTime && formatDateAndTime(tournamentHub.startTime)}</InfoText>
      </InfoCard>
      <InfoCard>
        <InfoHeader>
          <StyledIcon icon={IconEnum.Trophy} />
          {tournamentHub.registrationClosed ? 'Prize Pool' : 'Predicted Prize Pool'}
        </InfoHeader>
        <InfoText>{tournamentHub.currentPrizePool}</InfoText>
      </InfoCard>
      <InfoCard>
        <InfoHeader>
          <StyledIcon icon={IconEnum.Ticket} />
          Entry Fee
        </InfoHeader>
        <InfoText>€{tournamentHub.entryFee} / person</InfoText>
      </InfoCard>
    </InfoCardWrapper>
  );
};

export default InfoCards;
