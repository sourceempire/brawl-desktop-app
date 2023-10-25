import { useTournamentHubFeed } from 'api/feeds';
import { useParams } from 'react-router-dom';
import { formatDateAndTime } from 'utils/dateUtils';
import CountDown from 'pages/tournament/components/CountDown';
import {
  HubHeaderWrapper,
  HeaderInfo,
  HeaderHub,
  CountDownInfo,
  TournamentInfo,
  InfoContainer,
  InfoText,
  InfoHeader,
  InfoSubText
} from './TournamentHubHeader.styles';
import { TournamentHubInfoRow } from 'types/tournaments/TournamentInfo';
import { useRef, useState } from 'react';
import { useHint } from 'common/hooks';
import Money from 'types/Money';
import { Icons } from '@sourceempire/brawl-ui';

const TournamentHubHeader = () => {
  const { hubId } = useParams() as { hubId: string };
  const state = useTournamentHubFeed({ tournamentHubId: hubId });

  const [isEntryFeeHintVisible, setEntryFeeHintVisible] = useState(false);
  const entryFeeRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const { Hint: EntryFeeHint } = useHint({
    hintText: `€${new Money(
      !state.isLoading ? state.tournamentHub.entryFeeCut : 0
    ).format()} fee taken`,
    isVisible: isEntryFeeHintVisible,
    timeToVisibility: 300,
    relatedElementRef: entryFeeRef
  });

  if (state.isLoading) return null;

  const { tournamentHub } = state;

  const TournamentInfoArray: TournamentHubInfoRow[] = [
    {
      name: 'prizePool',
      header: `€${tournamentHub.currentPrizePool}`,
      subtext: 'Predicted Prize Pool',
      icon: <Icons.Trophy />
    },
    {
      name: 'entryFee',
      header: `€${new Money(tournamentHub.entryFee + tournamentHub.entryFeeCut).format()} / player`,
      subtext: 'Buy-In',
      icon: <Icons.Ticket />,
      ref: entryFeeRef
    },
    {
      name: 'startTime',
      header: tournamentHub.startTime && formatDateAndTime(tournamentHub.startTime),
      subtext: 'Tournament Start',
      icon: <Icons.Clock />
    }
  ];

  const handleMouseEnter = (name: string, shouldShowHint: boolean) => {
    if (name === 'entryFee') {
      setEntryFeeHintVisible(shouldShowHint);
    }
  };
  return (
    <HubHeaderWrapper>
      <HeaderInfo>
        <HeaderHub>{tournamentHub.name}</HeaderHub>
        <CountDownInfo>Registration closes in</CountDownInfo>
        <CountDown startTime={Number(tournamentHub.registrationCloseTime)} />
        <TournamentInfo>
          {TournamentInfoArray.map(({ name, header, subtext, ref, icon }) => (
            <InfoContainer key={name}>
              {icon}
              <InfoText
                ref={ref}
                onMouseEnter={() => handleMouseEnter(name, true)}
                onMouseLeave={() => handleMouseEnter(name, false)}>
                <InfoHeader>{header}</InfoHeader>
                <InfoSubText>{subtext}</InfoSubText>
                {isEntryFeeHintVisible && name === 'entryFee' ? EntryFeeHint : null}
              </InfoText>
            </InfoContainer>
          ))}
        </TournamentInfo>
      </HeaderInfo>
    </HubHeaderWrapper>
  );
};

export default TournamentHubHeader;
