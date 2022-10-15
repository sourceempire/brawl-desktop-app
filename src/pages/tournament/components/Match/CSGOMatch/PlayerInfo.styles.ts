import styled, { css } from 'styled-components/macro';
import EllipsisText from 'common/components/EllipsisText';
import { InnerWrapper } from 'common/components/EllipsisText/EllipsisText.styles';
import { ProfileImage } from 'frames/main/friends/components/Shared.styles';

export const PlayerProfileImage = styled(ProfileImage)<{ transparent: boolean }>`
  height: 69px;
  width: 69px;

  ${({ transparent }) =>
    transparent &&
    css`
      opacity: 0.5;
    `}
`;
export const UserTag = styled(EllipsisText)<{ transparent: boolean }>`
  padding: 20px;
  font-size: 16px;
  ${InnerWrapper} {
    padding: 0;
  }

  ${({ transparent }) =>
    transparent &&
    css`
      opacity: 0.5;
    `}
`;
