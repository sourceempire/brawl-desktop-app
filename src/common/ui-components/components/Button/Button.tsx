import { IconType } from 'common/ui-components/types';
import Icon from '../Icon/Icon';
import { Wrapper } from './Button.styles';

type Props = {
  children: React.ReactNode;
  className?: string;
  primary?: boolean;
  accent?: boolean;
  icon?: IconType | string;
  tabIndex?: number;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ children, className, primary, accent, icon, onClick, tabIndex = 0 }: Props) => {
  return (
    <Wrapper
      onClick={onClick}
      className={className}
      primary={primary}
      accent={accent}
      hasIcon={icon !== undefined}
      tabIndex={tabIndex}>
      {getIcon(icon)}
      {children}
    </Wrapper>
  );
};

function isIconType(icon: IconType | string): icon is IconType {
  return icon in IconType;
}

function getIcon(icon: IconType | string | undefined) {
  if (icon !== undefined) {
    if (isIconType(icon)) {
      return <Icon type={icon} />;
    } else {
      return <img src={icon} />;
    }
  }
}

export default Button;
