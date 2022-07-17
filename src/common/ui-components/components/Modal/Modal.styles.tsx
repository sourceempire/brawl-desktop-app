import styled, { css } from 'styled-components/macro';

export const Content = styled.div<{
  width?: string;
  height?: string;
  timeout: number;
  noPadding: boolean;
}>`
  ${({ width, height, noPadding, theme }) => css`
    ${width !== undefined &&
    css`
      width: 536px;
    `};
    max-width: 100%;
    height: ${height !== undefined ? height : 'auto'};
    ${!noPadding &&
    css`
      padding: 18px;
    `};
    background-color: ${theme.colors.secondary};
    inset: 0;
    margin: auto;
    border-radius: 3px;
  `}
`;

export const Header = styled.div`
  position: relative;
  padding-bottom: 36px;
  display: flex;
  justify-content: center;
  ${({ theme }) => theme.textStyles.title}
`;

export const CrossButton = styled.img`
  opacity: 0.5;
  position: absolute;
  left: -12px;
  top: -12px;
  padding: 12px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightTint};
    border-radius: 3px;
  }
`;

export const Overlay = styled.div<{ timeout: number; hidden: boolean }>`
  ${({ timeout, hidden }) => css`
    position: absolute;
    display: flex;
    inset: 0;
    background-color: ${hidden ? 'transparent' : 'rgba(0, 0, 0, 0.5)'};
    opacity: 0;
    transition: opacity ${timeout}ms ease-out, transform ${timeout}ms ease-out;

    ${Content} {
      opacity: 0;
      transform: scale(0.9);
      transition: opacity ${timeout}ms, transform ${timeout}ms;
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
      transition: opacity ${timeout}ms, transform ${timeout}ms;

      ${Content} {
        opacity: 0;
        transform: scale(0.9);
      }
    }
  `}
`;
