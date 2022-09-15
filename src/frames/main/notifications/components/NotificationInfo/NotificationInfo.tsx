import {
  NotificationInfo as NotificationInfoType,
  isPartyInviteNotification
} from 'types/notifications/Notifications';
import PartyInviteInfo from './PartyInviteInfo/PartyInviteInfo';

type Props = {
  info: NotificationInfoType;
  createdAt: Date;
};

const NotificationInfo = ({ info, createdAt }: Props) => {
  if (isPartyInviteNotification(info)) return <PartyInviteInfo info={info} createdAt={createdAt} />;

  return null;
};

export default NotificationInfo;
