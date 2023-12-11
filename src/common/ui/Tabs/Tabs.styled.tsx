import styled from '@emotion/styled';
import { css } from '@emotion/react';

type TabsBarProps = {
  underline?: boolean;
};

export const TabsBar = styled.div<TabsBarProps>`
  ${({ underline, theme }) => css`
    display: inline-flex;
    flex-direction: row;
    border-bottom: 1px solid ${underline === true ? 'rgba(255, 255, 255, 0.5)' : 'transparent'};

    ${theme.textStyles.menu}
  `}
`;

export const TabsBarTab = styled.div<{ active?: boolean }>`
  ${({ active, theme }) => css`
    padding: 9px 0px;
    position: relative;
    margin: 0px 9px;

    :first-of-type {
      margin-left: 0px;
    }

    :last-of-type {
      margin-right: 0px;
    }

    ${active &&
    css`
      cursor: default;

      :after {
        content: '';
        position: absolute;
        bottom: -1px;
        left: -3px;
        right: -3px;
        height: 3px;
        border-radius: 1.5px;
        background-color: ${theme.colors.primary.base};
      }
    `}
  `}
`;
