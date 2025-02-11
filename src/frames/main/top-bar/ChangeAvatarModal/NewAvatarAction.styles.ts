import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Wrapper = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => css`
    border-radius: ${theme.borderRadius.default};
    background-color: ${theme.colors.surface.base};

    :hover {
      background-color: ${theme.colors.surface.hover};
    }
    :active {
      background-color: ${theme.colors.surface.active};
    }
  `}
`;
