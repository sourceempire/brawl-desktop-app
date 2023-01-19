import styled, { css } from 'styled-components/macro';
import EllipsisText from 'common/components/EllipsisText';
import { InnerWrapper } from 'common/components/EllipsisText/EllipsisText.styles';
import Icons from 'common/components/Icon/Icons';
import { ProfileImage } from 'frames/main/friends/components/Shared.styles';

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

export const LeaderIcon = styled(Icons.Star)<{ reversed?: boolean }>`
  position: absolute;
  height: 25px;
  fill: #ffcc00;

  ${({ reversed }) =>
    reversed
      ? css`
          left: 0;
          bottom: 0;
          transform: translate(-8px, 4px);
        `
      : css`
          bottom: 0;
          right: 0;
          transform: translate(8px, 4px);
        `}
`;

export const UserTag = styled(EllipsisText)<{ transparent?: boolean }>`
  padding: 20px;
  font-size: 16px;
  ${InnerWrapper} {
    padding: 0;
  }

  ${({ transparent }) =>
    transparent &&
    css`
      opacity: 0.3;
    `}
`;
