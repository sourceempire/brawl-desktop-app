import { NotificationLevel } from 'types/Notification';
import { Wrapper } from './Notification.styles';

type Props = {
  text: string;
  level: NotificationLevel;
};

export const Notification = ({ text, level }: Props) => {
  return <Wrapper level={level}>{text}</Wrapper>;
};
