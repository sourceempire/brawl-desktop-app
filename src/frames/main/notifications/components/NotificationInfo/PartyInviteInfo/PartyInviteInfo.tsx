import { useUserFeed } from 'api/feeds';
import * as PartyRequests from 'api/requests/PartyRequests';
import popup from 'common/popup';
import { PartyInviteNotificationInfo } from 'types/notifications/Notifications';
import { useTimeSince } from 'utils/hooks';
import { Highlight, Image, Text, TimeAgo } from '../../NotificationCard/NotificationCard.styles';
import { ActionButton, Actions, Info, Wrapper } from '../NotificationInfo.styles';
import temporaryProfileImage from 'assets/images/temporary-profile-image.jpg';

type Props = {
  info: PartyInviteNotificationInfo;
  createdAt: Date;
};

const PartyInviteInfo = ({ info, createdAt }: Props) => {
  const inviter = useUserFeed({ userId: info?.inviterId });
  const timeSince = useTimeSince(createdAt);

  const handleAccept = () => {
    PartyRequests.acceptInvite(info.partyId).catch((error) =>
      popup.warning(error.error, { timer: 3000 })
    );
  };

  const handleDecline = () => {
    PartyRequests.declineInvite(info.partyId).catch((error) =>
      popup.error(error.error, { timer: 3000 })
    );
  };

  return (
    <Wrapper>
      <Image src={temporaryProfileImage} />
      <Info>
        <Text>
          Party invite from <Highlight>{inviter?.userTag}</Highlight>
        </Text>
        <TimeAgo>{timeSince}</TimeAgo>
      </Info>
      {info.isActive && (
        <Actions>
          <ActionButton onClick={handleDecline}>Decline</ActionButton>
          <ActionButton primary onClick={handleAccept}>
            Accept
          </ActionButton>
        </Actions>
      )}
    </Wrapper>
  );
};

export default PartyInviteInfo;
