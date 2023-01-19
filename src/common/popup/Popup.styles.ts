import styled, { css } from 'styled-components';
import { PopupBackgroundColors, PopupColors, PopupLevel } from 'types/Popup';
import Icons from 'assets/icons/Icons';
import { theme } from 'assets/styles/Theme';

export const CloseIcon = styled(Icons.Cross)`
  position: absolute;
  height: 14px;
  width: 14px;
  fill: white;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);

  padding: ${theme.spacing.base}px;
  right: ${theme.spacing.base}px;
  fill: ${theme.colors.textSecondaryDark};
`;

export const Wrapper = styled.div<{ level: PopupLevel; isClosing: boolean }>`
  position: fixed;
  left: 50%;
  top: 200px;
  transform: translateX(-50%);
  border-radius: 30px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  animation: fadeIn 0.3s forwards;

  padding: ${theme.spacing.baseX2}px ${theme.spacing.baseX8}px;
  ${theme.textStyles.body};

  ${({ level }) =>
    css`
      color: ${PopupColors[level]};
      background-color: ${PopupBackgroundColors[level]};
    `};
  ${({ isClosing }) =>
    isClosing &&
    css`
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
      transform: translate(-50%, 15px);
    }
    to {
      opacity: 1;
      transform: translate(-50%, 0);
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
      transform: translate(-50%, 0);
    }
    to {
      opacity: 0;
      transform: translate(-50%, -15px);
    }
  }
`;

export const PopupText = styled.div`
  text-align: center;
`;
