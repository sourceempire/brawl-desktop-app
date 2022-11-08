import { useContext } from 'react';
import { MatchResultModalContext } from 'context/MatchResultModalContext';
import { MatchEndNotificationInfo } from 'types/notifications/Notifications';
import { useTimeSince } from 'utils/hooks';
import { Image, Text, TimeAgo } from '../../NotificationCard/NotificationCard.styles';
import { Info, Wrapper } from '../NotificationInfo.styles';
import csgoLogo from 'assets/images/csgo-logo.svg';

type Props = {
  info: MatchEndNotificationInfo;
  createdAt: Date;
};

//TODO: Check the actual game of the match and change logo accordingly
const MatchEndInfo = ({ info, createdAt }: Props) => {
  const timeSince = useTimeSince(createdAt);

  const { setMatchResultId } = useContext(MatchResultModalContext);

  const handleClick = () => {
    setMatchResultId(info.matchId);
  };

  return (
    <Wrapper onClick={handleClick}>
      <Image src={csgoLogo} />
      <Info>
        <Text>Match ended, click here for result</Text>
        <TimeAgo>{timeSince}</TimeAgo>
      </Info>
    </Wrapper>
  );
};

export default MatchEndInfo;
