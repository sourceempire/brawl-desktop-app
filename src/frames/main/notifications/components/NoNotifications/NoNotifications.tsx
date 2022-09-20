import { NoNotificationImage, NoNotificationText, Wrapper } from './NoNotifications.styles';
import noNotificationImage from 'assets/images/no-notifications.svg';

const NoNotifications = () => {
  return (
    <Wrapper>
      <NoNotificationImage src={noNotificationImage} />
      <NoNotificationText>No notifications yet</NoNotificationText>
    </Wrapper>
  );
};

export default NoNotifications;
