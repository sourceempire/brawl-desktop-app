import styled, { css } from 'styled-components';
import { Animation } from 'common/ui';
import { InnerWrapper, OuterWrapper } from 'common/ui/EllipsisText/EllipsisText.styles';
import simpleLoading from 'assets/animations/simple-loading.json';
import { theme } from 'assets/styles/Theme';

export const UserCard = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  ${({ theme }) => css`
    margin-left: -${theme.spacing.base}px;
    margin-right: -${theme.spacing.base}px;
    padding: ${theme.spacing.base}px;
    border-radius: ${theme.borderRadius.default};

    :hover {
      outline: 2px solid ${theme.colors.secondary.hover};
    }
  `};
`;

export const UserImage = styled.img`
  object-fit: cover;

  ${({ theme }) => css`
    width: ${theme.spacing.baseX5}px;
    height: ${theme.spacing.baseX5}px;
    border-radius: ${theme.borderRadius.default};
  `}
`;

type ProfileImageSize = 'small' | 'medium' | 'large';

export const getProfileImageSize = (size?: ProfileImageSize) => {
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

const LoadingAnimation = styled(Animation)`
  ${({ theme }) => css`
    width: ${theme.spacing.baseX5}px;
    height: ${theme.spacing.baseX4}px;
  `}
`;

export const SimpleLoading = () => <LoadingAnimation src={simpleLoading} />;

const skeletonLoadingStyle = css`
  ${({ theme }) => css`
    background-color: ${theme.colors.surface.base};
    border-radius: ${theme.borderRadius.default};
  `}

  animation: loading 3s infinite linear;

  @keyframes loading {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

const SkeletonContainer = styled(UserCard)`
  pointer-events: none;
`;

const SkeletionProfileImage = styled.div`
  ${skeletonLoadingStyle}
  height: ${getProfileImageSize('medium')};
  width: ${getProfileImageSize('medium')};
`;

const SkeletonUserTag = styled(InnerWrapper)`
  ${skeletonLoadingStyle}
  height: 16px;
`;

export const UserCardSkeleton = () => (
  <SkeletonContainer>
    <SkeletionProfileImage />
    <OuterWrapper>
      <SkeletonUserTag />
    </OuterWrapper>
  </SkeletonContainer>
);
