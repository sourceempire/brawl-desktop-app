import ReactSlider from 'react-slider';
import styled, { css } from 'styled-components/macro';

export const Wrapper = styled.div`
  width: 100%;
  margin: 6px 0;
`;

export const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 18px;
`;

export const StyledThumb = styled.div`
  ${({ theme }) => css`
    height: 18px;
    line-height: 18px;
    width: 18px;
    text-align: center;
    background-color: ${theme.colors.secondary.base};
    color: transparent;
    border-radius: 50%;
    cursor: grab;
    border: 2px solid ${theme.colors.accent.base};
  `}
`;

export const StyledTrack = styled.div<{ index: number; range: boolean }>`
  ${({ range, index, theme }) => css`
    top: 0;
    bottom: 0;
    margin: auto;
    height: 2px;
    border-radius: 3px;
    ${range
      ? css`
          background: ${index === 1 ? theme.colors.accent.base : theme.colors.textPrimaryLight};
        `
      : css`
          background: ${index === 1 ? theme.colors.textPrimaryLight : theme.colors.accent.base};
        `}
  `}
`;

export const MinMaxContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MinMaxLabel = styled.div`
  ${({ theme }) => css`
    margin: 6px 0px 0 0px;
    color: ${theme.colors.textSecondaryLight};
    ${theme.textStyles.note};
  `}
`;
