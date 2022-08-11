import { Wrapper } from './TopBarItem.styles';

type Props = {
  onClick: () => void;
  icon: React.ReactNode;
};

const TopBarItem = ({ onClick, icon }: Props) => {
  return <Wrapper onClick={onClick}>{icon}</Wrapper>;
};

export default TopBarItem;
