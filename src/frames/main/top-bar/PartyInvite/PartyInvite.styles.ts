import styled, { css } from 'styled-components/macro';
import { ActionButton, EllipsisText, Input } from 'common/ui';

export const InvitePlayerAction = styled(ActionButton)`
  ${({ theme }) => css`
    margin-right: ${theme.spacing.baseX2}px;
  `}
`;

export const Wrapper = styled.div`
  width: 262px;
`;

export const FriendSearchInput = styled(Input)`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacing.base * 1.5}px;
    input {
      background-color: ${theme.colors.surfaceSecondary.base};
    }
  `}
`;

export const Players = styled.div`
  max-height: 150px;
  overflow: scroll;
  margin-left: -6px;
  margin-right: -6px;

  ${({ theme }) => css`
    margin-top: ${theme.spacing.base}px;
  `}
`;

export const InvitePlayerCard = styled.div<{ hasInvite: boolean }>`
  display: flex;
  align-items: center;
  padding: 6px;
  border-radius: 3px;

  ${({ theme, hasInvite }) => css`
    :hover {
      background-color: ${hasInvite ? 'transparent' : theme.colors.surface.base};
    }
  `}
`;

export const UserInfoContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${({ theme }) => css`
    margin-left: calc(${theme.spacing.base}px * 1.5);
  `}
`;

export const UserTag = styled(EllipsisText)`
  ${({ theme }) => css`
    ${theme.textStyles.title}
  `}
`;

export const PendingText = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.textSecondaryLight};
  `}
`;

export const CancelInviteAction = styled(ActionButton)`
  ${({ theme }) => css`
    background-color: ${theme.colors.surface.base};
    :hover {
      background-color: ${theme.colors.surface.hover};
    }
  `}
`;
