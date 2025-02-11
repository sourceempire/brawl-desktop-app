import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { EllipsisText } from 'common/ui';
import { InnerWrapper } from 'common/ui/EllipsisText/EllipsisText.styles';
import {
  LeaderStar,
  LeaderStarSize,
  ProfileImage
} from 'frames/main/friends/components/Shared.styles';

export const ProfileImageWrapper = styled.div`
  position: relative;
  height: 69px;
  width: 69px;
`;

export const PlayerProfileImage = styled(ProfileImage)<{ transparent?: boolean }>`
  height: 100%;
  width: 100%;

  ${({ transparent }) =>
    transparent &&
    css`
      opacity: 0.3;
    `}
`;

export const LeaderIcon = styled(LeaderStar)<{ reversed?: boolean; size?: LeaderStarSize }>`
  ${({ reversed }) =>
    reversed
      ? css`
          left: 0;
          right: unset;
          transform: translate(-40%, 0%);
        `
      : css`
          right: 0;
          transform: translate(40%, 0%);
        `}
`;

export const UserTag = styled(EllipsisText)<{ transparent?: boolean; reversed?: boolean }>`
  font-size: 16px;
  ${InnerWrapper} {
    padding: 0;
  }

  ${({ reversed }) => css`
    ${reversed &&
    css`
      direction: ltr;
    `}
  `};

  ${({ transparent }) =>
    transparent &&
    css`
      opacity: 0.3;
    `}
`;
