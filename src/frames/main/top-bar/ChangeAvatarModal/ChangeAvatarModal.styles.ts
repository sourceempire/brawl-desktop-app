import styled, { css } from 'styled-components';
import Icons from 'assets/icons/Icons';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 109px);
  grid-auto-rows: 109px;
  gap: 18px;
`;

export const AvatarChoice = styled.div`
  background-color: palegreen;

  ${({ theme }) => css`
    background-color: ${theme.colors.lightTint.base};
    border-radius: ${theme.borderRadius.default};
  `}
`;

export const NewAvatarIcon = styled(Icons.Plus)`
  height: 59px;
  width: 59px;

  ${({ theme }) => css`
    fill: ${theme.colors.textPrimaryLight};
  `}
`;

export const NewAvatarAction = styled.label``;
