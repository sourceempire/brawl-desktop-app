import styled, { css } from 'styled-components';
import {
  NotificationLevel,
  NotificationLevelBackgroundColors,
  NotificationLevelColors
} from 'types/Notification';
import { theme } from 'assets/styles/Theme';

export const Wrapper = styled.div<{ level: NotificationLevel }>`
  ${theme.textStyles.body};
  position: fixed;
  left: 50%;
  top: 200px;
  transform: translateX(-50%);
  border-radius: 20px;
  ${({ level }) =>
    css`
      padding: ${theme.spacing.baseX2} calc(${theme.spacing.base} * 10);
      color: ${NotificationLevelColors[level]};
      background-color: ${NotificationLevelBackgroundColors[level]};
    `}
`;
