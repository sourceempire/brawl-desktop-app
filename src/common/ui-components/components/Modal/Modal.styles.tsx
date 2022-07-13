import styled from 'styled-components/macro';
import { theme } from 'assets/styles/Theme';

export const Content = styled.div<{ width?: string; height?: string }>`
  width: ${({ width }) => (width !== undefined ? width : '536px')};
  max-width: 100%;
  height: ${({ height }) => (height !== undefined ? height : 'auto')};
  padding: 18px;
  background-color: ${({ theme }) => theme.colors.secondary};
  inset: 0;
  margin: auto;
  transition: opacity 500ms, transform 500ms;
  border-radius: 3px;
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

export const Overlay = styled.div`
  position: absolute;
  display: flex;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);

  transition: opacity 300ms ease-out, transform 300ms ease-out;
  opacity: 1;
  transform: scale(1);

  &.enter {
    position: absolute;
    opacity: 0;

    ${Content} {
      opacity: 0;
      transform: scale(0.8);
    }
  }

  &.enter-active {
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
    transition: opacity 500ms, transform 500ms;

    ${Content} {
      opacity: 0;
      transform: scale(0.8);
    }
  }
`;
