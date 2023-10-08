import styled from '@emotion/styled';
import { css } from '@emotion/react';

type AvatarImageProps = {
  disabled?: boolean;
};

export const RemoveButton = styled.div<{ disabled: boolean }>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 24px;
  height: 24px;
  transform: translate(-9px, -9px);
  border-radius: 50%;
  background-color: black;
  opacity: 0;
  ${({ theme, disabled }) => css`
    background-color: grey;
    :hover {
      background-color: ${theme.colors.statusError};
    }
    ${disabled &&
    css`
      display: none;
    `}
  `}
`;

export const AvatarImage = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
  transition: transform 0.3s;
  ${({ theme }) => css`
    background-color: ${theme.colors.surface.base};
  `};
`;

export const ImageContainer = styled.div`
  overflow: hidden;
  height: 100%;
  ${({ theme }) => css`
    border-radius: ${theme.borderRadius.default};
  `};
`;

export const Wrapper = styled.div<AvatarImageProps>`
  position: relative;

  ${({ disabled }) => css`
    ${disabled &&
    css`
      pointer-events: none;
      ${AvatarImage} {
        opacity: 0.2;
        filter: grayscale(1);
      }
    `}
  `}

  :hover {
    ${RemoveButton} {
      opacity: 1;
    }
    ${AvatarImage} {
      transform: scale(1.1);
    }
  }
`;

export const RemoveButtonIcon = styled.div`
  width: 13px;
  height: 2px;
  background-color: white;
`;
