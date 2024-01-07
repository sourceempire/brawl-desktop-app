import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { NavLink as ReactRouterNavLink } from 'react-router-dom';

export const TabsBar = styled.div`
  display: flex;
  flex-grow: 1;
  position: relative;
  gap: 6px;

  ${({ theme }) => css`
    ${theme.textStyles.menu};
  `}
`;

export const NavLink = styled(ReactRouterNavLink)`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 12px;
  top: 2px;
  text-decoration: none;

  ${({ theme }) => css`
    font: ${theme.textStyles.body};
    color: ${theme.colors.textPrimaryLight};
  `}
`;

export const ActiveLine = styled.div<{ shouldAnimate: boolean }>`
  position: absolute;
  bottom: -2px;
  height: 2px;
  width: 1px;
  transform-origin: left;

  ${({ theme, shouldAnimate }) => css`
    background-color: ${theme.colors.primary.base};

    transition: ${shouldAnimate ? 'transform 0.3s' : 'transform 0'};
  `}
`;

export const TabsPage = styled.div`
  height: 100%;
`;
