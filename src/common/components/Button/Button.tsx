import { Wrapper } from './Button.styles';
import { getIcon } from 'assets/icons/Icons.model';
import { SVGComponent } from 'assets/icons/Icons.types';

type Props = {
  children: React.ReactNode;
  className?: string;
  primary?: boolean;
  accent?: boolean;
  alert?: boolean;
  small?: boolean;
  icon?: SVGComponent | string;
  tabIndex?: number;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({
  children,
  className,
  primary,
  accent,
  alert,
  small,
  icon,
  onClick,
  tabIndex = 0
}: Props) => {
  return (
    <Wrapper
      onClick={onClick}
      className={className}
      primary={primary}
      accent={accent}
      alert={alert}
      small={small}
      hasIcon={icon !== undefined}
      tabIndex={tabIndex}>
      {getIcon(icon, 'button-icon')}
      {children}
    </Wrapper>
  );
};

export default Button;
