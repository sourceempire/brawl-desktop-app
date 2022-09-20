import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const NotificationsCount = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
  top: 0;
  font-size: 11px;
  padding-top: 1px;
  font-weight: bold;
  border-radius: 50%;
  pointer-events: none;
  ${({ theme }) => css`
    height: ${theme.spacing.baseX3}px;
    width: ${theme.spacing.baseX3}px;
    background-color: ${theme.colors.notificationRed};
    color: white;
    transform: translate(calc(50% - 2px), calc(-50% + 2px));
  `}
`;

export const NotificationList = styled.div`
  width: 350px;
  overflow: scroll;
  max-height: 320px;
  ${({ theme }) => css`
    margin-left: -${theme.spacing.base}px;
    margin-right: -${theme.spacing.base}px;
    margin-bottom: -${theme.spacing.base * 1.5}px;
    padding-bottom: ${theme.spacing.base * 1.5};
  `}
`;
