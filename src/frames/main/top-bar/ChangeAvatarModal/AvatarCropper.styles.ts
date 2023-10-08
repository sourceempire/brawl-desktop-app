import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  gap: 12px;
  width: 400px;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  ${({ theme }) => css`
    border-radius: ${theme.borderRadius.default};
  `}
`;
