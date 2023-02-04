import { OptionWrapper, SelectWrapper } from './Select.styled';

type SelectProps = {
  onSelect?: (value: string) => void;
  children?: React.ReactElement<OptionProps> | React.ReactElement<OptionProps>[];
};

export function Select({ onSelect, children }: SelectProps) {
  return (
    <SelectWrapper onChange={(e) => onSelect && onSelect(e.target.value)}>{children}</SelectWrapper>
  );
}

type OptionProps = {
  value: string;
  children: string;
};

export function Option({ value, children: name }: OptionProps) {
  return <OptionWrapper value={value}>{name}</OptionWrapper>;
}
