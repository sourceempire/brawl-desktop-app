import styled, { css } from 'styled-components';
import { InputSize } from 'ui/types';

export const iconStyle = css<{ inputSize: InputSize }>`
  svg {
    opacity: 0.8;
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
  margin: 9px 0; // this should not be here, only for testing
  ${iconStyle}
`;

export const Label = styled.label``;

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

  padding: 0 ${(props) => getInputPadding(props.inputSize)};
  height: ${(props) => getInputHeight(props.inputSize)};
  font-size: ${(props) => getInputFontSize(props.inputSize)};
  border-radius: ${(props) => props.theme.borderRadius.default};
  background-color: ${(porps) => porps.theme.colors.lightTint};
  margin-top: ${(props) => (props.hasLabel ? '6px' : '0')};

  :focus {
    outline-offset: 2px;
    outline: 2px solid;

    outline-color: ${(props) => props.theme.colors.accent};
  }

  ${(props) =>
    props.withBorder &&
    css`
      border: 2px solid;

      background-color: ${(props) => props.theme.colors.background};
      border-color: ${(props) => props.theme.colors.lightTint};

      :focus {
        outline: none;

        border-color: ${(props) => props.theme.colors.accent};
      }
    `};

  ${(props) =>
    props.hasIcon &&
    css`
      padding-left: calc(
        (${getIconSize(props.inputSize)}) + (${getInputPadding(props.inputSize)} * 2)
      );
    `}
`;

const getIconSize = (size: InputSize) =>
  ({
    [InputSize.SMALL]: '15px',
    [InputSize.MEDIUM]: '18px',
    [InputSize.LARGE]: '21px'
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
