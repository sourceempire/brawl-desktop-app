import styled, { css } from 'styled-components';
import {
  NotificationLevel,
  NotificationLevelBackgroundColors,
  NotificationLevelColors
} from 'types/Notification';
import Icons from 'assets/icons/Icons';
import { theme } from 'assets/styles/Theme';

export const CloseIcon = styled(Icons.Cross)`
  position: absolute;
  height: 14px;
  width: 14px;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);

  padding: ${theme.spacing.base}px;
  right: ${theme.spacing.base};
  fill: ${theme.colors.textSecondaryDark};
`;

export const Wrapper = styled.div<{ level: NotificationLevel; isClosing: boolean }>`
  position: fixed;
  left: 50%;
  top: 200px;
  transform: translateX(-50%);
  border-radius: 20px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  animation: fadeIn 0.3s forwards;
  cursor: pointer;

  padding: ${theme.spacing.baseX2}px calc(${theme.spacing.base}px * 7);
  ${theme.textStyles.body};

  ${({ level }) =>
    css`
      color: ${NotificationLevelColors[level]};
      background-color: ${NotificationLevelBackgroundColors[level]};
      is
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
