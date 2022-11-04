import {
  NotificationInfo as NotificationInfoType,
  isMatchEndNotification,
  isPartyInviteNotification
} from 'types/notifications/Notifications';
import MatchEndInfo from './MatchEndInfo';
import PartyInviteInfo from './PartyInviteInfo/PartyInviteInfo';

type Props = {
  info: NotificationInfoType;
  createdAt: Date;
};

const NotificationInfo = ({ info, createdAt }: Props) => {
  if (isPartyInviteNotification(info)) return <PartyInviteInfo info={info} createdAt={createdAt} />;
  if (isMatchEndNotification(info)) return <MatchEndInfo info={info} createdAt={createdAt} />;

  return null;
};

export default NotificationInfo;
