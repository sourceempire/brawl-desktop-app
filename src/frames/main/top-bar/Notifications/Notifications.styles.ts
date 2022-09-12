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
    transform: translate(calc(50%), calc(-50%));
  `}
`;
