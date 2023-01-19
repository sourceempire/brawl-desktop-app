import { IconEnum, SVGComponent } from '../Icon/Icon.types';
import { ButtonIcon, Wrapper } from './Button.styles';

type Props = {
  children: React.ReactNode;
  className?: string;
  primary?: boolean;
  accent?: boolean;
  alert?: boolean;
  small?: boolean;
  icon?: IconEnum | SVGComponent | string;
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
      {icon && <ButtonIcon icon={icon} />}
      {children}
    </Wrapper>
  );
};

export default Button;
