import { Wrapper } from './Card.styles';

type Props = {
  children: React.ReactNode;
  className?: string;
  width?: string;
  height?: string;
  padding: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
};

export function Card({ children, className, width, height, padding = true, onClick }: Props) {
  return (
    <Wrapper
      onClick={onClick}
      className={className}
      width={width}
      height={height}
      padding={padding}>
      {children}
    </Wrapper>
  );
}
