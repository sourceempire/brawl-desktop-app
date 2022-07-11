import CheckIcon from 'common/ui-components/icons/Check';
import styled, { css } from 'styled-components';
import { lightenColor } from 'assets/styles/colorBrightness';

export const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 14px;
`;

export const Check = styled(CheckIcon)`
  ${({ theme }) => css`
    fill: ${theme.colors.textPrimaryDark};
  `}
`;

export const Box = styled.div<{ checked: boolean }>`
  display: flex;
  align-items: center;
  height: 18px;
  width: 18px;
  margin-right: 6px;
  outline-color: transparent;

  ${({ theme, checked }) => css`
    background-color: ${checked ? theme.colors.accent : 'trasnparent'};
    border: 2px solid ${theme.colors.accent};
    border-radius: ${(props) => props.theme.borderRadius.default};

    :hover {
      border: 2px solid ${lightenColor(theme.colors.accent, 25)};
      background-color: ${checked ? lightenColor(theme.colors.accent, 25) : 'trasnparent'};
    }

    :focus-visible {
      outline: 2px solid white;
      outline-offset: 2px;
      transition: outline-color 0.3s;
    }
  `}
`;

export const Checks = styled.div`
  height: 100%;
  width: 100%;

  ${({ theme }) => css`
    background-color: ${theme.colors.accent};
  `}
`;

export const Label = styled.div``;
