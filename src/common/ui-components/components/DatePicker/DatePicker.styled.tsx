import styled, { css } from 'styled-components/macro';
import { Wrapper as Button } from '../Button/Button.styles';
import { ReactComponent as Arrow } from 'assets/icons/DatePickerArrow.svg';
import SelectArrow from 'assets/icons/SelectArrow.svg';
import { lightenColor } from 'assets/styles/colorBrightness';

export const Wrapper = styled.div`
  position: relative;
`;

// prettier-ignore
export const DropDown = styled.div<{ dark: boolean, above: boolean, inline: boolean }>`
  ${({ dark, above, inline, theme}) => css`
    position: ${inline ? 'static' : 'absolute'};
    left: 0;
    padding: 12px 18px 18px 18px;
    background-color: ${dark ? theme.colors.background : theme.colors.secondary};
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
        return theme.colors.primary;
      } else if (dark && active) {
        return theme.colors.secondary;
      } else if (!dark && active) {
        return theme.colors.lightTint;
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
      border: 2px solid ${theme.colors.accent};
      line-height: 20px;
    `}

    &:hover {
      background-color: ${() => {
        if (picked) {
          return lightenColor(theme.colors.primary, 25);
        } else if (active) {
          return lightenColor(theme.colors.lightTint, 25);
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

export const PrevArrow = styled(Arrow)`
  ${({ theme }) => css`
    width: 18px;
    height: 18px;
    padding: 6px;
    box-sizing: border-box;
    background-color: ${theme.colors.lightTint};
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
    background-color: ${theme.colors.lightTint};
    border-radius: ${theme.borderRadius.default};
    align-items: center;
    padding: 6px;
    font-size: 12px;
    ${isEmpty &&
    css`
      letter-spacing: 0.7px;
    `}

    &:hover {
      background-color: ${lightenColor(theme.colors.lightTint, 25)};
    }
    &:active {
      background-color: ${lightenColor(theme.colors.lightTint, 50)};
    }

    &::after {
      content: '';
      position: absolute;
      background-image: url(${SelectArrow});
      background-repeat: no-repeat;
      background-position: center;
      top: 9px;
      right: 9px;
      width: 12px;
      height: 12px;
    }
  `}
`;
