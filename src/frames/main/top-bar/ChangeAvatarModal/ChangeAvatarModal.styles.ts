import styled, { css } from 'styled-components';
import Icons from 'assets/icons/Icons';

export const Wrapper = styled.div<{ hide: boolean }>`
  display: grid;
  grid-template-columns: repeat(4, 109px);
  grid-auto-rows: 109px;
  gap: 18px;
  max-height: 420px;
  overflow: scroll;
  margin: -6px;
  padding: 6px;

  ${({ hide }) =>
    hide &&
    css`
      display: none;
    `}
`;

export const AvatarChoice = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
  ${({ theme }) => css`
    background-color: ${theme.colors.lightTint.base};
    border-radius: ${theme.borderRadius.default};
    :hover {
      outline: 6px solid ${theme.colors.lightTint.base};
    }
  `};
`;

export const NewAvatarIcon = styled(Icons.Plus)`
  height: 59px;
  width: 59px;

  ${({ theme }) => css`
    fill: ${theme.colors.textPrimaryLight};
  `}
`;

export const NewAvatarAction = styled.label``;
