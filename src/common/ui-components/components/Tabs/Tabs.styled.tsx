import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  .page-container {
    position: relative;
  }

  .page {
    inset: 0;
    transform: translateX(0);
    opacity: 1;
    transition: opacity 500ms ease-out 300ms, transform 500ms ease-out 300ms;
  }

  .page.enter {
    position: absolute;
    opacity: 0;
    transform: translateX(100px);
  }
  .page.enter-active {
    opacity: 1;
    transform: translateX(0) !important;
  }
  .page.exit {
    position: absolute;
    opacity: 1;
    transform: translateX(0);
  }
  .page.exit-active {
    opacity: 0;
    transform: translateX(-100px);
    transition: opacity 500ms ease-in, transform 500ms ease-in;
  }

  .order-right {
    .page.enter {
      transform: translateX(100px);
    }

    .page.exit-active {
      transform: translateX(-100px);
    }
  }

  .order-left {
    .page.enter {
      transform: translateX(-100px);
    }

    .page.exit-active {
      transform: translateX(100px);
    }
  }
`;

type TabsBarProps = {
  underline?: boolean;
};

export const TabsBar = styled.div<TabsBarProps>`
  display: inline-flex;
  flex-direction: row;
  border-bottom: 1px solid
    ${(props) => (props.underline === true ? 'rgba(255, 255, 255, 0.5)' : 'transparent')};

  ${(props) => props.theme.textStyles.menu}
`;

type TabsBarTabProps = {
  active?: boolean;
};
export const TabsBarTab = styled.div<TabsBarTabProps>`
  padding: 9px 0px;
  position: relative;
  cursor: pointer;
  margin: 0px 9px;

  &:first-child {
    margin-left: 0px;
  }

  &:last-child {
    margin-right: 0px;
  }

  ${(props) =>
    props.active &&
    css`
      cursor: default;

      &:after {
        content: '';
        position: absolute;
        bottom: -1px;
        left: -3px;
        right: -3px;
        height: 3px;
        border-radius: 1.5px;
        background-color: ${props.theme.colors.primary};
      }
    `}
`;
