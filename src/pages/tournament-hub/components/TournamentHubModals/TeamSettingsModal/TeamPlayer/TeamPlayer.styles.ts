import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ProfileImage } from 'frames/main/friends/components/Shared.styles';

export const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: calc(20% - (48px / 5));
  ${({ theme }) => css`
    margin-right: ${theme.spacing.baseX2}px;
  `}
  &:last-child {
    margin-right: 0px;
  }
`;

export const PlayerProfileImage = styled(ProfileImage)`
  height: 100%;
  width: 100%;
`;
