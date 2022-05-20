import { useState } from 'react';
import { IconType } from 'common/ui-components/types';
import Icon from '../Icon/Icon';
import { Box, Check, Label, Wrapper } from './Checkbox.styles';

type Props = {
  label?: string;
  checked: boolean;
  className?: string;
  onChange: () => void;
};

const Checkbox = ({ label, checked, onChange, className }: Props) => {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      onChange();
    }
  };

  return (
    <Wrapper onClick={onChange} className={className}>
      <Box checked={checked} tabIndex={0} onKeyDown={handleKeyPress}>
        {checked && <Check />}
      </Box>
      <Label>{label}</Label>
    </Wrapper>
  );
};

export default Checkbox;
