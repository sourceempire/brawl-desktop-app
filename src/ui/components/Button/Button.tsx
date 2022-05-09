import { Wrapper } from './Button.styles';

type Props = {
  children: React.ReactNode;
  className?: string;
  primary?: boolean;
  accent?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ children, className, primary, accent, onClick }: Props) => {
  return (
    <Wrapper onClick={onClick} className={className} primary={primary} accent={accent}>
      {children}
    </Wrapper>
  );
};

export default Button;
