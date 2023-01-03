import React from 'react';
import styled, { css } from 'styled-components/macro';
import { ActionButton, Input } from 'common/components';
import { hsla } from 'utils/styledUtils';
import { lightenColor } from 'assets/styles/colorBrightness';

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  bottom: 0;
  right: 0;
  width: 230px;
  ${({ theme }) => css`
    /* height: calc(
      100vh - ${theme.titleBarHeight}px - ${theme.topBarHeight}px - ${theme.spacing.baseX4}px
    ); */

    height: 100vh;

    padding-top: ${theme.titleBarHeight}px;
    // border-top-left-radius: ${theme.borderRadius.default};
    background-color: ${theme.colors.secondary.base};
  `}
`;

export const SearchFriendsInput = styled(Input)`
  z-index: 2;
`;

export const FriendActions = styled.div`
  display: flex;
  ${({ theme }) => css`
    padding: 0 ${theme.spacing.baseX2}px;
    padding-bottom: 0;
  `}
`;

export const FriendAction = styled(ActionButton)`
  ${({ theme }) => css`
    margin-left: ${theme.spacing.base}px;
    margin-right: 0;
    background-color: ${theme.colors.surface.base};
    :hover {
      background-color: ${theme.colors.surface.hover};
    }
    :active {
      background-color: ${theme.colors.surface.active};
    }
  `}
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  ${({ theme }) =>
    css`
      ${theme.textStyles.title};
      margin-bottom: ${theme.spacing.base}px;
    `}
`;

export const ScrollContentWrapper = styled.div`
  position: relative;
  flex-grow: 1;
  :before,
  :after {
    pointer-events: none;
    content: '';
    position: absolute;
    z-index: 1;
    right: 0;
    left: 0;

    ${({ theme }) => css`
      height: ${theme.spacing.baseX2}px;
    `}
  }
  :before {
    top: 0;
    ${({ theme }) => css`
      height: ${theme.spacing.baseX2}px;
      background: linear-gradient(
        ${theme.colors.secondary.base},
        ${hsla(theme.colors.secondary.base, 0)}
      );
    `}
  }
  :after {
    ${({ theme }) => css`
      height: ${theme.spacing.baseX4}px;
      background: linear-gradient(
        ${hsla(theme.colors.secondary.base, 0)},
        ${theme.colors.secondary.base}
      );
    `}
    bottom: 0;
  }
`;

export const ScrollContentInner = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  overflow: scroll;

  ${({ theme }) => css`
    padding: ${theme.spacing.baseX2}px;
    padding-bottom: 0;
  `}

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ScrollContent = ({ children }: { children: React.ReactNode }) => (
  <ScrollContentWrapper>
    <ScrollContentInner>{children}</ScrollContentInner>
  </ScrollContentWrapper>
);
