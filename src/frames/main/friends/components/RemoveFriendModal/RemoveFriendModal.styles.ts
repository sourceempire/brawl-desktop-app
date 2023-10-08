import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Wrapper = styled.div``;

export const ConfirmationText = styled.div`
  ${({ theme }) => css`
    font: ${theme.textStyles.body};
  `}
`;
export const FriendToRemove = styled.p`
  display: inline;
  ${({ theme }) => css`
    font: ${theme.textStyles.body};
    color: ${theme.colors.accent.base};
  `}
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;

  ${({ theme }) => css`
    margin-top: ${theme.spacing.baseX5}px;
  `}
`;
