import styled from 'styled-components';
import EllipsisText from 'common/components/EllipsisText';
import { InnerWrapper } from 'common/components/EllipsisText/EllipsisText.styles';
import { ProfileImage } from 'frames/main/friends/components/Shared.styles';

export const PlayerProfileImage = styled(ProfileImage)`
  height: 69px;
  width: 69px;
`;
export const UserTag = styled(EllipsisText)`
  padding: 20px;
  font-size: 16px;
  ${InnerWrapper} {
    padding: 0;
  }
`;
