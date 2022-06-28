import { Wrapper } from './Button.styles';

type Props = {
  children: React.ReactNode;
  className?: string;
  primary?: boolean;
  accent?: boolean;
  tabIndex?: number;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ children, className, primary, accent, onClick, tabIndex = 0 }: Props) => {
  return (
    <Wrapper
      onClick={onClick}
      className={className}
      primary={primary}
      accent={accent}
      tabIndex={tabIndex}>
      {children}
    </Wrapper>
  );
};

export default Button;
