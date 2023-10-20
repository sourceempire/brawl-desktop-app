import React, { useRef, useState } from 'react';
import { usePushNotifications } from 'api/events';
import useNotificationFeed from 'api/feeds/hooks/useNotificationsFeed';
import { useContextMenuPosition } from 'common/hooks';
import { ActionButton, ContextMenu, ContextMenuTitle } from 'common/ui';
import NoNotifications from '../NoNotifications/NoNotifications';
import NotificationCard from '../NotificationCard';
import { NotificationCardSkeletion } from '../NotificationCard/NotificationCard.skeletion';
import { NotificationList, NotificationsCount, Wrapper } from './Notifications.styles';
import { Icons } from 'brawl-ui';

const Notifications = () => {
  usePushNotifications();

  const { notifications, unreadCount, totalCount, isLoading, requestMoreNotifications } =
    useNotificationFeed();

  const [isMenuVisible, setMenuVisible] = useState(false);

  const actionButtonRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const { contextMenuRef, position, arrowPosition } = useContextMenuPosition({
    isVisible: isMenuVisible,
    offsetX: -150,
    relatedElementRef: actionButtonRef
  });

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;
    const scrollBottom = scrollHeight - scrollTop - clientHeight;
    const offset = 450;

    if (scrollBottom < offset) {
      requestMoreNotifications();
    }
  };

  const hideMenu = () => {
    setMenuVisible(false);
  };

  const showUnreadCount = !isLoading && unreadCount !== 0;
  const unreadCountDisplay = unreadCount > 99 ? '99+' : unreadCount?.toString();

  const unfetchedNotificationsCount = totalCount - notifications.length;
  const loadingCardsCount = unfetchedNotificationsCount < 4 ? unfetchedNotificationsCount : 4;

  return (
    <>
      <Wrapper>
        <ActionButton
          ref={actionButtonRef}
          icon={<Icons.Bell />}
          onClick={() => setMenuVisible(true)}
          hint={isMenuVisible ? undefined : 'Notifications'}
        />
        {showUnreadCount && <NotificationsCount>{unreadCountDisplay}</NotificationsCount>}
      </Wrapper>

      {isMenuVisible && (
        <ContextMenu
          ref={contextMenuRef}
          position={position}
          arrowPosition={arrowPosition}
          ignoredElementOnClickOutside={actionButtonRef.current}
          onClickOutside={() => setMenuVisible(false)}>
          <ContextMenuTitle>NOTIFICATIONS</ContextMenuTitle>
          <NotificationList onScroll={handleScroll}>
            {notifications.length === 0 && <NoNotifications />}

            {notifications.map((notification) => (
              <NotificationCard
                key={notification.id}
                notification={notification}
                onClick={hideMenu}
              />
            ))}

            {Array(loadingCardsCount)
              .fill('')
              .map((_, index) => (
                <NotificationCardSkeletion key={index} />
              ))}
          </NotificationList>
        </ContextMenu>
      )}
    </>
  );
};

export default Notifications;
