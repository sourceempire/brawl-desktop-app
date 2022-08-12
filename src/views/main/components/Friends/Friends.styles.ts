import ActionButton from 'common/ui-components/components/ActionButton';
import styled, { css } from 'styled-components/macro';

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 230px;
  ${({ theme }) => css`
    height: calc(
      100vh - ${theme.titleBarHeight}px - ${theme.topBarHeight}px - ${theme.spacing.baseX4}px
    );
    padding: ${theme.spacing.baseX2}px;
    border-top-left-radius: ${theme.borderRadius.default};
    background-color: ${theme.colors.secondary};
  `}
`;

export const FriendActions = styled.div`
  display: flex;
`;

export const FriendAction = styled(ActionButton)`
  ${({ theme }) => css`
    margin-left: ${theme.spacing.base}px;
    margin-right: 0;
    background-color: ${theme.colors.lightTint};
  `}
`;
