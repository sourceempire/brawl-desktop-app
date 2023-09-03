import { useEffect, useState } from 'react';
import { IconEnum } from 'common/ui';
import Game, { GameId, GameName } from 'types/Game';
import { TournamentHub } from 'types/tournaments/TournamentInfo';
import { formatDateAndTime } from 'utils/dateUtils';
import { getTournamentModeShort, getTournamentSeriesTypeLong } from 'utils/tournamentUtils';
import { InfoCard, InfoCardWrapper, InfoHeader, InfoText, StyledIcon } from './InfoCards.styles';
import { formatMoney } from 'utils/moneyUtils';

type Props = {
  tournamentHub: TournamentHub;
};

const InfoCards = ({ tournamentHub }: Props) => {
  const [gameInfo, setGameInfo] = useState({
    name: '',
    mode: '',
    type: ''
  });

  const setInfoSettings = (tournamentHub: TournamentHub) => {
    setGameInfo({
      ...gameInfo,
      name: GameName[tournamentHub.gameId]
    });

    switch (tournamentHub.gameId) {
      case Game.CSGO: {
        setGameInfo({
          ...gameInfo,
          mode: getTournamentModeShort(tournamentHub),
          type: getTournamentSeriesTypeLong(tournamentHub)
        });
        break;
      }
    }
  };

  useEffect(() => {
    setInfoSettings(tournamentHub);
  }, [tournamentHub]);

  return (
    <InfoCardWrapper isRegistrationClosed={tournamentHub.registrationClosed}>
      <InfoCard>
        <InfoHeader>
          <StyledIcon icon={IconEnum.Controller} />
          Game
        </InfoHeader>
        <InfoText>{gameInfo.name}</InfoText>
      </InfoCard>
      <InfoCard>
        <InfoHeader>
          <StyledIcon icon={IconEnum.Sword} />
          Game Mode
        </InfoHeader>
        <InfoText>{gameInfo.mode}</InfoText>
      </InfoCard>
      <InfoCard>
        <InfoHeader>
          <StyledIcon icon={IconEnum.CrossedSwords} />
          Match Type
        </InfoHeader>
        <InfoText>{gameInfo.type}</InfoText>
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
        <InfoText>€{tournamentHub.currentPrizePool}</InfoText>
      </InfoCard>
      <InfoCard>
        <InfoHeader>
          <StyledIcon icon={IconEnum.Ticket} />
          Entry Fee ({tournamentHub.entryFeeCutPercentage}% fee taken)
        </InfoHeader>
        <InfoText>€{formatMoney(tournamentHub.entryFee)} / person</InfoText>
      </InfoCard>
    </InfoCardWrapper>
  );
};

export default InfoCards;
