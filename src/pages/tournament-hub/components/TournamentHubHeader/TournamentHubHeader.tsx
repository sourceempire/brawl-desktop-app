import { useTournamentHubFeed } from 'api/feeds';
import { useParams } from 'react-router-dom';
import { Icons } from 'common/ui';
import { formatDateAndTime } from 'utils/dateUtils';
import CountDown from 'pages/tournament/components/CountDown';
import {
  HubHeaderWrapper,
  HeaderInfo,
  HeaderHub,
  CountDownInfo,
  TournamentInfo,
  InfoContainer,
  InfoIcon,
  InfoText,
  InfoHeader,
  InfoSubText
} from './TournamentHubHeader.styles';

const TournamentHubHeader = () => {
  const { hubId } = useParams() as { hubId: string };
  const { tournamentHub } = useTournamentHubFeed({ tournamentHubId: hubId });

  const TournamentInfoArray = [
    {
      key: 'prizePool',
      header: `€${tournamentHub.currentPrizePool}`,
      subtext: 'Predicted Prize Pool',
      icon: Icons.Trophy
    },
    {
      key: 'entryFee',
      header: `€${tournamentHub.entryFee} / person`,
      subtext: 'Entry Fee',
      icon: Icons.Ticket
    },
    {
      key: 'startTime',
      header: tournamentHub.startTime && formatDateAndTime(tournamentHub.startTime),
      subtext: 'Tournament Start',
      icon: Icons.Clock
    }
  ];

  return (
    <HubHeaderWrapper>
      <HeaderInfo>
        <HeaderHub>{tournamentHub.name}</HeaderHub>
        <CountDownInfo>Registration closes in</CountDownInfo>
        <CountDown startTime={Number(tournamentHub.registrationCloseTime)} />
        <TournamentInfo>
          {TournamentInfoArray.map((info) => (
            <InfoContainer key={info.key}>
              <InfoIcon icon={info.icon} />
              <InfoText>
                <InfoHeader>{info.header}</InfoHeader>
                <InfoSubText>{info.subtext}</InfoSubText>
              </InfoText>
            </InfoContainer>
          ))}
        </TournamentInfo>
      </HeaderInfo>
    </HubHeaderWrapper>
  );
};

export default TournamentHubHeader;
