import ActionButton from 'common/ui-components/components/ActionButton';
import styled, { css } from 'styled-components/macro';
import { theme } from 'assets/styles/Theme';

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

export const Title = styled.div`
  display: flex;
  align-items: center;
  ${({ theme }) =>
    css`
      ${theme.textStyles.title};
      margin-bottom: ${theme.spacing.base}px;
    `}
`;

type ProfileImageSize = 'small' | 'medium' | 'large';

const getProfileImageSize = (size?: ProfileImageSize) => {
  switch (size) {
    case 'small':
      return theme.spacing.baseX5 + 'px';
    case 'medium':
      return theme.spacing.baseX6 + 'px';
    case 'large':
      return theme.spacing.baseX7 + 'px';
  }
};

export const ProfileImage = styled.img<{ size?: ProfileImageSize }>`
  ${({ theme, size }) => css`
    height: ${getProfileImageSize(size ?? 'medium')};
    width: ${getProfileImageSize(size ?? 'medium')};
    border-radius: ${theme.borderRadius.default};
  `}
`;
