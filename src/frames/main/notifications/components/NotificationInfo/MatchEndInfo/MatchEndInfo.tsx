import { useTimeSince } from 'common/hooks';
import { MatchEndNotificationInfo } from 'types/notifications/Notifications';
import { Image, Text, TimeAgo } from '../../NotificationCard/NotificationCard.styles';
import { Info, Wrapper } from '../NotificationInfo.styles';
import placeholderImage from 'assets/images/placeholder-team-logo.png';

type Props = {
  info: MatchEndNotificationInfo;
  createdAt: Date;
};

//TODO: Check the actual game of the match and change logo accordingly
const MatchEndInfo = ({ createdAt }: Props) => {
  const timeSince = useTimeSince(createdAt);

  return (
    <Wrapper>
      <Image src={placeholderImage} />
      <Info>
        <Text>Match ended, click here for result</Text>
        <TimeAgo>{timeSince}</TimeAgo>
      </Info>
    </Wrapper>
  );
};

export default MatchEndInfo;
