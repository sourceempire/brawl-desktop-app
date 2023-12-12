import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Wrapper as Button } from '../Button/Button.styles';
import { Icons } from '@sourceempire/brawl-ui';
import { theme } from 'assets/styles/Theme';

export const Wrapper = styled.div`
  position: relative;
`;

// prettier-ignore
export const DropDown = styled.div<{ dark: boolean, above: boolean, inline: boolean }>`
  ${({ dark, above, inline, theme}) => css`
    position: ${inline ? 'static' : 'absolute'};
    left: 0;
    padding: 12px 18px 18px 18px;
    background-color: ${dark ? theme.colors.background.base : theme.colors.secondary.base};
    border-radius: ${theme.borderRadius.default};

    ${above? 
        css`bottom: 100%;` : 
        css`top: 100%;`}

    ${!dark && css`box-shadow: 0 4px 24px -6px rgb(0 0 0 / 50%);`}
    

    z-index: 2; // because react slide has z-index=2 element in it, and this should be above that
  `}
`;

export const Days = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7, 1fr);
  grid-gap: 6px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const DayName = styled.span`
  ${({ theme }) => theme.textStyles.note};
  color: ${({ theme }) => theme.colors.textSecondaryLight};
  align-self: end;
`;

export const Day = styled.span<{ active: boolean; picked: boolean; today: boolean; dark: boolean }>`
  width: 24px;
  height: 24px;
  line-height: 24px;
  background-color: transparent;

  ${({ theme }) => css`
    font: ${theme.textStyles.note};
    border-radius: ${theme.borderRadius.default};
  `}

  ${({ theme, dark, active }) =>
    !dark &&
    active &&
    css`
      background-color: ${theme.colors.surface.base};
    `}

  ${({ theme, dark, active }) =>
    dark &&
    active &&
    css`
      background-color: ${theme.colors.secondary.base};
    `}

  ${({ theme, picked }) =>
    picked &&
    css`
      background-color: ${theme.colors.primary.base};
    `}

  ${({ theme, active }) =>
    active &&
    css`
      color: ${theme.colors.textSecondaryLight};
    `}
  
  ${({ theme, picked, today }) =>
    !picked &&
    today &&
    css`
      border: 2px solid ${theme.colors.accent.base};
      line-height: 20px;
    `}

    :hover {
    background-color: transparent;

    ${({ theme, active }) =>
      active &&
      css`
        background-color: ${theme.colors.surface.hover};
      `}

    ${({ theme, picked }) =>
      picked &&
      css`
        background-color: ${theme.colors.primary.hover};
      `}
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
`;

const arrowStyle = css`
  width: 20px;
  height: 20px;
  padding: 3px;
  box-sizing: border-box;
  background-color: ${theme.colors.surface.base};
  border-radius: ${theme.borderRadius.default};
`;

export const PrevArrow = styled(Icons.ChevronLeft)`
  ${arrowStyle}
`;

export const NextArrow = styled(Icons.ChevronRight)`
  ${arrowStyle}
`;

export const Actions = styled.div`
  display: flex;
  margin-top: 12px;
  gap: 6px;

  ${Button} {
    flex-grow: 1;
  }
`;

export const DateInput = styled.span<{ isEmpty: boolean }>`
  ${({ theme, isEmpty }) => css`
    display: inline-flex;
    width: 100%;
    height: 30px;
    background-color: ${theme.colors.surfaceElement.base};
    border-radius: ${theme.borderRadius.default};
    align-items: center;
    padding: 6px;
    font-size: 12px;
    ${isEmpty &&
    css`
      letter-spacing: 0.7px;
    `}

    :hover {
      background-color: ${theme.colors.surfaceElement.hover};
    }
    :active {
      background-color: ${theme.colors.surface.active};
    }
  `}
`;

export const DateInputArrow = styled(Icons.ChevronDown)`
  fill: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 10px;
  right: 10px;
  width: 10px;
  height: 10px;
  pointer-events: none;
`;

export const DateInputWrapper = styled.div`
  position: relative;
`;
