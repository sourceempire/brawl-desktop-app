import styled, { css } from 'styled-components';
import { Button } from 'common/components';
import EllipsisText from 'common/components/EllipsisText';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

export const Maps = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: min-content;
  height: min-content;

  ${({ theme }) => css`
    background-color: ${theme.colors.lightTint.base};
    gap: ${theme.spacing.base}px;
    padding: ${theme.spacing.base}px;
    border-radius: ${theme.borderRadius.default};
  `}
`;

export const CSGOMapImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

type CSGOMapWrapperProps = {
  disabled: boolean;
  active: boolean;
  transparent: boolean;
};

export const CSGOMapWrapper = styled.div<CSGOMapWrapperProps>`
  position: relative;
  width: 100%;
  height: 96px;
  overflow: hidden;

  ${({ theme, disabled, active, transparent }) => css`
    border-radius: ${theme.borderRadius.default};

    ${disabled &&
    css`
      pointer-events: none;
    `}

    ${transparent &&
    css`
      opacity: 0.3;
    `}

    ${active
      ? css`
          outline: 3px solid ${theme.colors.accent.base};
        `
      : css`
          :hover {
            outline: 3px solid ${theme.colors.lightTint.hover};
          }
        `}
  `}
`;

export const CSGOMapName = styled(EllipsisText)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: 25px;
  text-align: center;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
  font-size: 12px;
  > div {
    padding: 5px;
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 100%;

  ${({ theme }) => css`
    background-color: ${theme.colors.lightTint.base};
    border-radius: ${theme.borderRadius.default};
  `}
`;

export const DropMapButton = styled(Button)`
  height: 100%;
  width: 100%;
  font-size: 16px;
`;
