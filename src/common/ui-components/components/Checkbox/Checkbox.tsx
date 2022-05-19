import { Box, Check, Label, Wrapper } from './Checkbox.styles';

type Props = {
  label?: string;
  checked: boolean;
  className?: string;
  onChange: () => void;
};

const Checkbox = ({ label, checked, onChange, className }: Props) => {
  return (
    <Wrapper onClick={onChange} className={className}>
      <Box>{checked && <Check />}</Box>
      <Label>{label}</Label>
    </Wrapper>
  );
};

export default Checkbox;
