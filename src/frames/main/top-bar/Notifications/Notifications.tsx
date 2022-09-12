import { useState } from 'react';
import usePushNotifications from 'api/events/hooks/usePushNotifications';
import useNotificationFeed from 'api/feeds/hooks/useNotificationsFeed';
import { ActionButton, ContextMenu } from 'common/components';
import { useContextMenuPosition } from 'common/hooks';
import { NotificationsCount, Wrapper } from './Notifications.styles';
import Icons from 'assets/icons/Icons';

const Notifications = () => {
  usePushNotifications();
  const { unreadCount, isLoading } = useNotificationFeed({ limit: 10 });

  const [isMenuVisible, setMenuVisible] = useState(false);

  const { contextMenuRef, relatedElementRef, position, arrowPosition } = useContextMenuPosition({
    isVisible: isMenuVisible
  });

  const showUnreadCount = !isLoading && unreadCount !== 0;
  const unreadCountDisplay = unreadCount > 99 ? '99+' : unreadCount?.toString();

  return (
    <>
      <Wrapper>
        <ActionButton
          ref={relatedElementRef}
          icon={<Icons.Notification />}
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
          ignoredElementOnClickOutside={relatedElementRef.current}
          onClickOutside={() => setMenuVisible(false)}>
          <div>d</div>
        </ContextMenu>
      )}
    </>
  );
};

export default Notifications;
