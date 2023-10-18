import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { AvatarImage } from './AvatarChoice.styles';
import { Icons } from 'brawl-ui';

export const Wrapper = styled.div<{ hide: boolean }>`
  display: grid;
  grid-template-columns: repeat(4, 109px);
  grid-auto-rows: 109px;
  gap: 18px;
  max-height: 420px;
  overflow: scroll;
  margin: -10px;
  padding: 10px;

  ${({ hide }) =>
    hide &&
    css`
      display: none;
    `}
`;

export const DefaultAvatarChoice = styled(AvatarImage)``;

export const NewAvatarIcon = styled(Icons.Plus)`
  height: 59px;
  width: 59px;

  ${({ theme }) => css`
    color: ${theme.colors.textPrimaryLight};
  `}
`;

export const NewAvatarAction = styled.label``;
