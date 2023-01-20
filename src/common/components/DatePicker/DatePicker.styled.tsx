import styled, { css } from 'styled-components/macro';
import { Wrapper as Button } from '../Button/Button.styles';
import { Icons } from '../Icon';

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
  ${({ theme }) => theme.textStyles.note}
  color: ${({ theme }) => theme.colors.textSecondaryLight};
  align-self: end;
`;

export const Day = styled.span<{ active: boolean; picked: boolean; today: boolean; dark: boolean }>`
  ${({ theme }) => theme.textStyles.note}

  ${({ active, picked, today, dark, theme }) => css`
    width: 24px;
    height: 24px;
    line-height: 24px;
    border-radius: ${theme.borderRadius.default};

    background-color: ${() => {
      if (picked) {
        return theme.colors.primary.base;
      } else if (dark && active) {
        return theme.colors.secondary.base;
      } else if (!dark && active) {
        return theme.colors.surface.base;
      }
      return 'transparent';
    }};

    ${!active &&
    css`
      color: ${theme.colors.textSecondaryLight};
    `}

    ${!picked &&
    today &&
    css`
      border: 2px solid ${theme.colors.accent.base};
      line-height: 20px;
    `}

    :hover {
      background-color: ${() => {
        if (picked) {
          return theme.colors.primary.hover;
        } else if (active) {
          return theme.colors.surface.hover;
        }
        return 'transparent';
      }};
    }
  `}
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
`;

export const PrevArrow = styled(Icons.DatePickerArrow)`
  ${({ theme }) => css`
    width: 18px;
    height: 18px;
    padding: 6px;
    box-sizing: border-box;
    background-color: ${theme.colors.surface.base};
    border-radius: ${theme.borderRadius.default};
  `}
`;

export const NextArrow = styled(PrevArrow)`
  transform: rotate(180deg);
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

export const DateInputArrow = styled(Icons.SelectArrow)`
  fill: white;
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
