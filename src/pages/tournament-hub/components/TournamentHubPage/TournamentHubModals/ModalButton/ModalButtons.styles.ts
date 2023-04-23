import styled, { css } from 'styled-components';

type Props = {
  active?: boolean;
};

export const Wrapper = styled.button<Props>`
  display: inline-flex;
  width: auto;
  border: none;
  color: white;
  align-items: center;
  justify-content: center;
  outline-color: transparent;
  background-color: transparent;

  ${({ theme }) => theme.textStyles.button}

  :focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.accent.base};
    outline-offset: 2px;
    transition: outline-color 0.3s;
  }

  ${({ theme, active }) => css`
    padding: ${theme.spacing.base}px ${theme.spacing.baseX4}px ${theme.spacing.base}px
      ${theme.spacing.baseX2}px;
    border-radius: ${theme.borderRadius.default};
    :hover {
      background-color: ${theme.colors.secondary.hover};
    }
    ${active &&
    css`
      background-color: ${theme.colors.secondary.active};
    `}
  `}
`;
