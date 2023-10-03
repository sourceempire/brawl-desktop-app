import styled from '@emotion/styled';
import { css } from '@emotion/react';

type Props = {
  width?: string;
  height?: string;
  padding: boolean;
};

export const Wrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;
  position: relative;

  ${({ theme, padding, width, height }) => css`
    background-color: ${theme.colors.surface.base};
    border-radius: ${theme.borderRadius.default};

    ${padding ? 'padding: 12px;' : ''}
    ${width ? `width: ${width};` : ''}
    ${height ? `height: ${height};` : ''}
  `}
`;
