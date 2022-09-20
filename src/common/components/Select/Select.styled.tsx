import styled from 'styled-components';

export const SelectWrapper = styled.select`
  /* RESET */
  appearance: none;
  background-color: transparent;
  border: none;
  padding: 0 1em 0 0;
  margin: 0;
  line-height: inherit;
  cursor: pointer;
  // -----

  color: ${(props) => props.theme.colors.textPrimaryLight};
  border-radius: ${(props) => props.theme.borderRadius.default};
  padding: 0 15px;
  ${(props) => props.theme.textStyles.button}
  height: 30px;
  background-color: ${(props) => props.theme.colors.lightTint.base};

  &:focus-visible {
    outline: none;
  }
`;

export const OptionWrapper = styled.option``;
