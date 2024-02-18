import { useEffect, useRef, useState } from 'react';
import Game, { GameName } from 'types/Game';
import { TournamentHub } from 'types/tournaments/TournamentInfo';
import { formatDateAndTime } from 'utils/dateUtils';
import { getTournamentModeShort } from 'utils/tournamentUtils';
import { HeaderText, InfoCard, InfoCardWrapper, InfoHeader, InfoText } from './InfoCards.styles';
import { useHint } from 'common/hooks';
import Money from 'types/Money';
import { Icons } from '@sourceempire/brawl-ui';
import { PrizePoolRange } from 'common/components/PrizePoolRange';

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

  const { Hint: EntryFeeHint } = useHint({
    hintText: `€${new Money(tournamentHub.entryFeeCut).format()} fee taken`,
    isVisible: isHintVisible,
    timeToVisibility: 300,
    relatedElementRef: entryFeeRef
  });

  const setInfoSettings = (tournamentHub: TournamentHub) => {
    switch (tournamentHub.gameId) {
      case Game.MOCK: {
        setGameInfo({
          ...gameInfo,
          name: GameName[tournamentHub.gameId],
          mode: getTournamentModeShort(tournamentHub)
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
          <Icons.GamePad />
          Game
        </InfoHeader>
        <InfoText>{gameInfo.name}</InfoText>
      </InfoCard>
      <InfoCard>
        <InfoHeader>
          <Icons.Sword />
          Game Mode
        </InfoHeader>
        <InfoText>{gameInfo.mode}</InfoText>
      </InfoCard>
      <InfoCard>
        <InfoHeader>
          <Icons.Swords />
          Match Type
        </InfoHeader>
        <InfoText>{gameInfo.type}</InfoText>
      </InfoCard>
      {/* //TODO -> Add Tournament Format */}
      {/* //TODO -> Add Side Decider */}
      <InfoCard>
        <InfoHeader>
          <Icons.Users />
          Size of Tournament
        </InfoHeader>
        <InfoText>{tournamentHub.teamsAllowed}</InfoText>
      </InfoCard>
      <InfoCard>
        <InfoHeader>
          <Icons.Unlock />
          Registration Closes
        </InfoHeader>
        <InfoText>
          {tournamentHub.registrationCloseTime &&
            formatDateAndTime(tournamentHub.registrationCloseTime)}
        </InfoText>
      </InfoCard>
      <InfoCard>
        <InfoHeader>
          <Icons.Calendar />
          Tournament Start
        </InfoHeader>
        <InfoText>{tournamentHub.startTime && formatDateAndTime(tournamentHub.startTime)}</InfoText>
      </InfoCard>
      <InfoCard>
        <InfoHeader>
          <Icons.Trophy />
          {tournamentHub.registrationClosed ? 'Prize Pool' : 'Predicted Prize Pool'}
        </InfoHeader>
        <InfoText>
          {tournamentHub.registrationClosed && <PrizePoolRange tournamentHub={tournamentHub} />}
          {!tournamentHub.registrationClosed && `€${tournamentHub.currentPrizePool}`}
        </InfoText>
      </InfoCard>
      <InfoCard>
        <InfoHeader>
          <Icons.Ticket />
          <HeaderText
            ref={entryFeeRef}
            onMouseEnter={() => setHintVisible(true)}
            onMouseLeave={() => setHintVisible(false)}>
            Buy-In
          </HeaderText>
          {EntryFeeHint}
        </InfoHeader>
        <InfoText>{`€${new Money(
          tournamentHub.entryFee + tournamentHub.entryFeeCut
        ).format()} / player`}</InfoText>
      </InfoCard>
    </InfoCardWrapper>
  );
};

export default InfoCards;
