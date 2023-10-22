import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Animation } from 'common/ui';
import { PopupBackgroundColors, PopupColors, PopupLevel } from './Popup.types';
import { theme } from 'assets/styles/Theme';
import { Icons } from '@sourceempire/brawl-ui';

export const CloseIcon = styled(Icons.Cross)`
  position: absolute;
  height: 26px;
  width: 26px;
  box-sizing: border-box;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;

  padding: ${theme.spacing.base}px;
  right: ${theme.spacing.base}px;
  color: ${theme.colors.textSecondaryDark};
`;

export const Wrapperr = styled.div<{ level: PopupLevel; isClosing: boolean; top: number }>``;

export const Wrapper = styled.div<{ level: PopupLevel; isClosing: boolean; top: number }>`
  position: fixed;
  z-index: 2;
  height: 43px;
  left: 50%;
  top: 200px;
  transform: translateX(-50%);
  border-radius: 30px;
  box-shadow: 0 4px 4px 2px rgba(0, 0, 0, 0.25);
  transition: top 0.3s;

  animation: fadeIn 0.3s forwards;

  padding: ${theme.spacing.baseX2}px ${theme.spacing.baseX8}px;
  font: ${theme.textStyles.body};

  ${({ level, top }) => css`
    color: ${PopupColors[level]};
    background-color: ${PopupBackgroundColors[level]};
    top: ${top}px;
  `};
  ${({ isClosing }) =>
    isClosing &&
    css`
      pointer-events: none;
      animation: fadeOut 0.3s forwards;
    `}

  :hover {
    ${CloseIcon} {
      background-color: rgba(0, 0, 0, 0.15);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateX(-50%) scale(0.8);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) scale(1);
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
      transform: translateX(-50%) scale(1);
    }
    to {
      opacity: 0;
      transform: translateX(-50%) scale(0.8);
    }
  }
`;

export const PopupText = styled.div`
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const TimerAnimation = styled(Animation)<{ level: PopupLevel }>`
  height: 28px;
  top: 50%;
  position: absolute;
  right: calc(${theme.spacing.base}px - 1px);
  transform: translateY(-50%);
`;
