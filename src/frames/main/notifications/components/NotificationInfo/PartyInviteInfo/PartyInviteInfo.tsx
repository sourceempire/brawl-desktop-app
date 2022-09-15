import { useUserFeed } from 'api/feeds';
import * as PartyRequests from 'api/requests/PartyRequests';
import popup from 'common/popup';
import { PartyInviteNotificationInfo } from 'types/notifications/Notifications';
import { useTimeSince } from 'utils/hooks';
import { Image, Text, TimeAgo, UserTag } from '../../NotificationCard/NotificationCard.styles';
import { Info, Wrapper } from '../NotificationInfo.styles';
import { ActionButton, Actions } from './PartyInviteInfo.styles';
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
      popup.error(error.error, { timer: 3000 })
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
          Party invite from <UserTag>{inviter?.userTag}</UserTag>
        </Text>
        <TimeAgo>{timeSince}</TimeAgo>
      </Info>
      {info.isActive && (
        <Actions>
          <ActionButton primary onClick={handleAccept}>
            Accept
          </ActionButton>
          <ActionButton onClick={handleDecline}>Decline</ActionButton>
        </Actions>
      )}
    </Wrapper>
  );
};

export default PartyInviteInfo;
