import { useUserFeed } from 'api/feeds';
import * as PartyRequests from 'api/requests/PartyRequests';
import { useTimeSince } from 'common/hooks';
import popup from 'common/popup';
import { PartyInviteNotificationInfo } from 'types/notifications/Notifications';
import { Highlight, Image, Text, TimeAgo } from '../../NotificationCard/NotificationCard.styles';
import { ActionButton, Actions, Info, Wrapper } from '../NotificationInfo.styles';
import temporaryProfileImage from 'assets/images/temporary-profile-image.jpg';
import { useAcceptInviteRequest } from 'api/requests/party';

type Props = {
  info: PartyInviteNotificationInfo;
  createdAt: Date;
};

const PartyInviteInfo = ({ info, createdAt }: Props) => {
  const { user: inviter } = useUserFeed({ userId: info?.inviterId });
  const timeSince = useTimeSince(createdAt);
  const { acceptInvite } = useAcceptInviteRequest();

  const handleAccept = () => {
    acceptInvite({
      partyId: info.partyId
    });
  };

  const handleDecline = () => {
    PartyRequests.declineInvite(info.partyId).catch((error) =>
      popup.error(error.error, { timer: 3000 })
    );
  };

  return (
    <Wrapper>
      <Image src={inviter?.imageUrl ?? temporaryProfileImage} />
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
