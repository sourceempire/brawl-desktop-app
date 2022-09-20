import { useState } from 'react';
import * as NotificationRequests from 'api/requests/NotificationRequests';
import popup from 'common/popup';
import { Notification, isPartyInviteNotification } from 'types/notifications/Notifications';
import NotificationInfo from '../NotificationInfo';
import { IsReadIndicator, Wrapper } from './NotificationCard.styles';

type Props = {
  notification: Notification;
};

const NotificationCard = ({ notification }: Props) => {
  const { id, info, isRead, createdAt } = notification;

  const handleClick = () => {
    if (isPartyInviteNotification(info) && !info.isActive) {
      popup.info('Party invite has expired', {
        timer: 2000
      });
    }

    if (!isRead) {
      NotificationRequests.setNotificationRead(id).catch(console.error);
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
