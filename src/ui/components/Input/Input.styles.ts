import styled, { css } from 'styled-components';
import { InputSize } from 'ui/types';

// TODO -> Add support for which side icons should be

export const iconStyle = css<{ inputSize: InputSize }>`
  svg {
    opacity: 0.4;
    position: absolute;
    left: ${(props) => getInputPadding(props.inputSize)};
    bottom: ${(props) =>
      `calc((${getInputHeight(props.inputSize)} - ${getIconSize(props.inputSize)}) / 2)`};
    width: ${(props) => getIconSize(props.inputSize)};
    height: ${(props) => getIconSize(props.inputSize)};
  }
`;

export const Wrapper = styled.div`
  position: relative;
  ${iconStyle}
`;

export const Label = styled.label`
  font-size: 13px;
`;

export const InputElement = styled.input<{
  withBorder: boolean;
  inputSize: InputSize;
  hasLabel: boolean;
  hasIcon: boolean;
}>`
  width: 100%;
  color: white;
  font-size: 13px;
  box-sizing: border-box;
  border-color: transparent;
  outline-color: transparent;
  transition: border-color 0.3s, outline-color 0.3s;

  :focus {
    outline-offset: 2px;
    outline: 2px solid;
  }

  ::placeholder {
    color: white;
    opacity: 0.4;
  }
  ${({ theme, inputSize, hasIcon, hasLabel, withBorder }) => css`
    padding: 0 ${getInputPadding(inputSize)};
    height: ${getInputHeight(inputSize)};
    font-size: ${getInputFontSize(inputSize)};
    border-radius: ${theme.borderRadius.default};
    background-color: ${theme.colors.lightTint};

    :focus {
      outline-color: ${theme.colors.accent};
    }

    ${hasIcon &&
    css`
      padding-left: calc((${getIconSize(inputSize)}) + (${getInputPadding(inputSize)} * 2));
    `}

    ${hasLabel &&
    css`
      margin-top: ${hasLabel ? '6px' : '0'};
    `}

    ${withBorder &&
    css`
      border: 2px solid;
      background-color: ${theme.colors.background};
      border-color: ${theme.colors.lightTint};
      :focus {
        outline: none;
        border-color: ${theme.colors.accent};
      }
    `}
  `}
`;

const getIconSize = (size: InputSize) =>
  ({
    [InputSize.SMALL]: '15px',
    [InputSize.MEDIUM]: '18px',
    [InputSize.LARGE]: '18px'
  }[size]);

const getInputFontSize = (size: InputSize) =>
  ({
    [InputSize.SMALL]: '13px',
    [InputSize.MEDIUM]: '15px',
    [InputSize.LARGE]: '17px'
  }[size]);

const getInputHeight = (size: InputSize) =>
  ({
    [InputSize.SMALL]: '30px',
    [InputSize.MEDIUM]: '36px',
    [InputSize.LARGE]: '42px'
  }[size]);

const getInputPadding = (size: InputSize) =>
  ({
    [InputSize.SMALL]: '6px',
    [InputSize.MEDIUM]: '9px',
    [InputSize.LARGE]: '12px'
  }[size]);
