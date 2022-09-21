import styled, { css } from 'styled-components';
import EllipsisText from 'common/components/EllipsisText';
import { skeletonLoadingStyle } from 'common/components/SkeletonLoading/SkeletionLoading.styles';

export const Text = styled(EllipsisText)`
  ${({ theme }) => css`
    ${theme.textStyles.body}
    color: ${theme.colors.textSecondaryLight};
    margin-bottom: ${theme.spacing.base / 2}px;
  `}
`;

export const Highlight = styled.label`
  font-weight: bold;
  ${({ theme }) => css`
    color: ${theme.colors.textPrimaryLight};
  `}
`;

export const Wrapper = styled.div<{ isRead: boolean }>`
  display: flex;

  ${({ theme, isRead }) => css`
    padding: ${theme.spacing.base}px;
    min-height: ${theme.spacing.base * 9}px;
    border-radius: ${theme.borderRadius.default};
    margin-bottom: 6px;
    background-color: transparent;

    ${!isRead &&
    css`
      background-color: ${theme.colors.secondary.hover};

      ${Text}, ${Highlight} {
        color: ${theme.colors.accent.base};
      }
    `}
    :hover {
      background-color: ${theme.colors.secondary.hover};
    }
  `}
`;

const imageStyle = css`
  ${({ theme }) => css`
    width: ${theme.spacing.baseX7}px;
    height: ${theme.spacing.baseX7}px;
    border-radius: ${theme.borderRadius.default};
    margin-right: ${theme.spacing.base}px;
  `}
`;

export const Image = styled.img`
  ${imageStyle}
`;

export const TimeAgo = styled.div`
  ${({ theme }) => css`
    ${theme.textStyles.note}
    color: ${theme.colors.textSecondaryLight};
  `}
`;

export const IsReadIndicator = styled.div<{ isRead: boolean }>`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ${({ theme, isRead }) => css`
    height: ${theme.spacing.base * 7}px;
    width: ${theme.spacing.base * 2.5}px;

    ::before {
      content: '';
      border-radius: 50%;
      display: block;
      width: ${theme.spacing.base * 1.5}px;
      height: ${theme.spacing.base * 1.5}px;
      background-color: ${theme.colors.accent.base};
      opacity: ${isRead ? 0 : 1};
    }
  `}
`;

const notificationLoadingStyle = css`
  ${skeletonLoadingStyle}
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary.hover};
  `}
`;

export const ImageSkeleton = styled.div`
  ${imageStyle}
  ${notificationLoadingStyle}
`;

export const TextSkeletion = styled.div`
  ${notificationLoadingStyle}
  height: 12px;
  width: 170px;
  margin-bottom: 6px;
`;

export const TimeAgoSkeletion = styled.div`
  ${notificationLoadingStyle}
  height: 12px;
  width: 60px;
`;
