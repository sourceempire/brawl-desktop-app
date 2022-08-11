import { Wrapper } from './Friends.styles';
type Props = {
  visible: boolean;
};
const Friends = ({ visible }: Props) => {
  if (!visible) return null;

  return <Wrapper></Wrapper>;
};

export default Friends;
