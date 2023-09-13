import { useEffect, useRef, useState } from 'react';
import { IconEnum } from 'common/ui';
import Game, { GameName } from 'types/Game';
import { TournamentHub } from 'types/tournaments/TournamentInfo';
import { formatDateAndTime } from 'utils/dateUtils';
import { getTournamentModeShort, getTournamentSeriesTypeLong } from 'utils/tournamentUtils';
import {
  HeaderText,
  InfoCard,
  InfoCardWrapper,
  InfoHeader,
  InfoText,
  StyledIcon
} from './InfoCards.styles';
import { formatCentsToCurrency } from 'utils/moneyUtils';
import { useHint } from 'common/hooks';

type Props = {
  tournamentHub: TournamentHub;
};

const InfoCards = ({ tournamentHub }: Props) => {
  const [gameInfo, setGameInfo] = useState({
    name: '',
    mode: '',
    type: ''
  });

  const [isHintVisible, setHintVisible] = useState(false);
  const entryFeeRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const { Hint } = useHint({
    hintText: `${formatCentsToCurrency(tournamentHub.entryFeeCut)} fee taken`,
    isVisible: isHintVisible,
    timeToVisibility: 300,
    relatedElementRef: entryFeeRef
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
          <HeaderText
            ref={entryFeeRef}
            onMouseEnter={() => setHintVisible(true)}
            onMouseLeave={() => setHintVisible(false)}>
            Buy-In
          </HeaderText>
          {Hint}
        </InfoHeader>
        <InfoText>
          {formatCentsToCurrency(tournamentHub.entryFee, tournamentHub.entryFeeCut)} / player
        </InfoText>
      </InfoCard>
    </InfoCardWrapper>
  );
};

export default InfoCards;
