import { useContext } from 'react';
import * as NotificationRequests from 'api/requests/NotificationRequests';
import popup from 'common/popup';
import { MatchResultModalContext } from 'context/MatchResultModalContext';
import {
  Notification,
  isMatchEndNotification,
  isPartyInviteNotification
} from 'types/notifications/Notifications';
import NotificationInfo from '../NotificationInfo';
import { IsReadIndicator, Wrapper } from './NotificationCard.styles';

type Props = {
  notification: Notification;
  onClick: () => void;
};

const NotificationCard = ({ notification, onClick }: Props) => {
  const { id, info, isRead, createdAt } = notification;

  const { setMatchResultId } = useContext(MatchResultModalContext);

  const handleClick = () => {
    if (isPartyInviteNotification(info) && !info.isActive) {
      popup.info('Party invite has expired', {
        timer: 2000
      });
    } else if (isMatchEndNotification(info)) {
      setMatchResultId(info.matchId);
    }

    if (!isRead) {
      NotificationRequests.setNotificationRead(id).then(onClick).catch(console.error);
    } else {
      onClick();
    }
  };

  return (
    <Wrapper isRead={isRead} onClick={handleClick}>
      <NotificationInfo info={info} createdAt={createdAt} />
      <IsReadIndicator isRead={isRead} />
    </Wrapper>
  );
};

export default NotificationCard;
