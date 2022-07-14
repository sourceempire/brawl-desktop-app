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
  height: 18px;
  line-height: 18px;
  width: 18px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: transparent;
  border-radius: 50%;
  cursor: grab;
  border: 2px solid ${({ theme }) => theme.colors.accent};
`;

export const StyledTrack = styled.div<{ index: number; range: boolean }>`
  top: 0;
  bottom: 0;
  margin: auto;
  height: 2px;
  ${({ range, index, theme }) =>
    range
      ? css`
          background: ${index === 1 ? theme.colors.accent : theme.colors.textPrimaryLight};
        `
      : css`
          background: ${index === 1 ? theme.colors.textPrimaryLight : theme.colors.accent};
        `}
  border-radius: 3px;
`;

export const MinMaxContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const MinMaxLabel = styled.div`
  margin: 6px 4px 0 4px;
  color: ${({ theme }) => theme.colors.textSecondaryLight};
  ${({ theme }) => theme.textStyles.note};
`;
