import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { InputSize } from './Input.types';

// TODO -> Add support for which side icons should be

export const Wrapper = styled.div``;

export const IconWrapper = styled.div<{ inputSize: InputSize }>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.4;
  top: 0;
  bottom: 0;
  ${({ inputSize }) => css`
    width: calc((${getIconSize(inputSize)}) + (${getInputPadding(inputSize)} * 2));
    // IconWrapper should only take one child.
    & > :first-of-type {
      width: ${getIconSize(inputSize)};
      height: ${getIconSize(inputSize)};
    }
  `}
`;

export const Label = styled.label`
  font-size: 13px;
`;

export const InputWrapper = styled.div<{
  inputSize: InputSize;
  hasLabel: boolean;
  hasIcon: boolean;
}>`
  position: relative;
  ${({ theme, inputSize, hasLabel, hasIcon }) => css`
    height: ${getInputHeight(inputSize)};
    border-radius: --var(--border-radius-special);

    ${hasLabel &&
    css`
      margin-top: ${hasLabel ? '6px' : '0'};
    `}

    ${!hasIcon &&
    css`
      ${IconWrapper} {
        display: none;
      }
    `}
  `}
`;

export const InputElement = styled.input<{
  withBorder: boolean;
  inputSize: InputSize;
  hasIcon: boolean;
}>`
  width: 100%;
  color: white;
  font-size: 13px;
  box-sizing: border-box;
  border-color: transparent;
  outline-color: transparent;
  transition:
    border-color 0.3s,
    outline-color 0.3s;

  :focus {
    outline-offset: 2px;
    outline: 2px solid;
  }

  ::placeholder {
    color: white;
    opacity: 0.4;
  }
  ${({ theme, inputSize, hasIcon, withBorder }) => css`
    padding: 0 ${getInputPadding(inputSize)};
    height: 100%;
    font-size: ${getInputFontSize(inputSize)};
    border-radius: 20px;
    background-color: ${theme.colors.secondary.base};

    :focus {
      outline-color: ${theme.colors.accent.base};
    }

    ${hasIcon &&
    css`
      padding-left: calc((${getIconSize(inputSize)}) + (${getInputPadding(inputSize)} * 2));
    `}

    ${withBorder &&
    css`
      border: 2px solid;
      background-color: ${theme.colors.background.base};
      border-color: ${theme.colors.surface.base};
      :focus {
        outline: none;
        border-color: ${theme.colors.accent.base};
      }
    `}
  `}
`;

const getIconSize = (size: InputSize) =>
  ({
    [InputSize.SMALL]: '15px',
    [InputSize.MEDIUM]: '18px',
    [InputSize.LARGE]: '18px'
  })[size];

const getInputFontSize = (size: InputSize) =>
  ({
    [InputSize.SMALL]: '13px',
    [InputSize.MEDIUM]: '15px',
    [InputSize.LARGE]: '17px'
  })[size];

const getInputHeight = (size: InputSize) =>
  ({
    [InputSize.SMALL]: '30px',
    [InputSize.MEDIUM]: '36px',
    [InputSize.LARGE]: '42px'
  })[size];

const getInputPadding = (size: InputSize) =>
  ({
    [InputSize.SMALL]: '6px',
    [InputSize.MEDIUM]: '9px',
    [InputSize.LARGE]: '12px'
  })[size];
