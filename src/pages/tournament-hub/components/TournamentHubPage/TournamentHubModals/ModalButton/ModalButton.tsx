import { Wrapper } from './ModalButtons.styles';

type Props = {
  active: boolean;
  className?: string;
  tabIndex?: number;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
};

export const ModalButton = ({ active, className, onClick, tabIndex = 0, text }: Props) => {
  return (
    <Wrapper onClick={onClick} className={className} active={active} tabIndex={tabIndex}>
      {text}
    </Wrapper>
  );
};
