import { Box, Check, Label, Wrapper } from './Checkbox.styles';

type Props = {
  label?: string;
  checked: boolean;
  className?: string;
  tabIndex?: number;
  onChange: () => void;
};

export const Checkbox = ({ label, checked, onChange, className, tabIndex = 0 }: Props) => {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      onChange();
    }
  };

  return (
    <Wrapper onClick={onChange} className={className}>
      <Box checked={checked} tabIndex={tabIndex} onKeyDown={handleKeyPress}>
        {checked && <Check />}
      </Box>
      <Label>{label}</Label>
    </Wrapper>
  );
};
