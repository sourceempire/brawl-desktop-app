import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Icons } from '@sourceempire/brawl-ui';

type ContentProps = {
  width?: string;
  height?: string;
  margin?: string;
  timeout: number;
  noPadding: boolean;
  scrollable: boolean;
};

export const Content = styled.div<ContentProps>`
  position: relative;
  inset: 0;

  max-width: 100%;

  ${({ width, height, margin, noPadding, theme, scrollable }) => css`
    height: ${height ? height : 'auto'};
    width: ${width ? width : 'auto'};
    margin: ${margin ? margin : 'auto'};
    background-color: ${theme.colors.surface.base};
    border: 1px solid ${theme.colors.secondary.base};
    border-radius: 12px;
    overflow: ${scrollable ? 'scroll' : 'visible'};

    ${!noPadding &&
    css`
      padding: 18px;
    `};
  `}
`;

export const Header = styled.div`
  position: relative;
  padding-bottom: ${({ theme }) => theme.spacing.baseX3}px;
  display: flex;
  justify-content: center;
  ${({ theme }) => theme.textStyles.title};
`;

export const CrossButton = styled(Icons.Cross)`
  height: 18px;
  width: 18px;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.5;
  position: absolute;
  left: -12px;
  top: -12px;
  padding: 6px;

  :hover {
    background-color: ${({ theme }) => theme.colors.surface.hover};
    border-radius: 3px;
  }
`;

export const Overlay = styled.div<{ timeout: number; hidden: boolean }>`
  ${({ timeout, hidden }) => css`
    z-index: 1;
    position: absolute;
    display: flex;
    inset: 0;
    background-color: ${hidden ? 'transparent' : 'rgba(0, 0, 0, 0.5)'};
    opacity: 0;
    transition:
      opacity ${timeout}ms ease-out,
      transform ${timeout}ms ease-out;

    ${Content} {
      opacity: 0;
      transform: scale(0.9);
      transition:
        opacity ${timeout}ms,
        transform ${timeout}ms;
    }

    &.enter {
      position: absolute;
      opacity: 0;

      ${Content} {
        opacity: 0;
        transform: scale(0.9);
      }
    }

    &.enter-active {
      opacity: 1;

      ${Content} {
        opacity: 1;
        transform: scale(1);
      }
    }

    &.enter-done {
      opacity: 1;

      ${Content} {
        opacity: 1;
        transform: scale(1);
      }
    }

    &.exit {
      position: absolute;
      opacity: 1;

      ${Content} {
        opacity: 1;
        transform: scale(1);
      }
    }

    &.exit-active {
      opacity: 0;
      transition:
        opacity ${timeout}ms,
        transform ${timeout}ms;

      ${Content} {
        opacity: 0;
        transform: scale(0.9);
      }
    }
  `}
`;
