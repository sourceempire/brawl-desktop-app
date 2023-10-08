import styled from '@emotion/styled';

export const SelectWrapper = styled.select`
  /* RESET */
  appearance: none;
  background-color: transparent;
  border: none;
  padding: 0 1em 0 0;
  margin: 0;
  line-height: inherit;
  // -----

  color: ${(props) => props.theme.colors.textPrimaryLight};
  border-radius: ${(props) => props.theme.borderRadius.default};
  padding: 0 15px;
  ${(props) => props.theme.textStyles.button}
  height: 30px;
  background-color: ${(props) => props.theme.colors.secondary.base};

  :focus-visible {
    outline: none;
  }

  :hover {
    background-color: ${(props) => props.theme.colors.secondary.hover};
  }
`;

export const OptionWrapper = styled.option``;
