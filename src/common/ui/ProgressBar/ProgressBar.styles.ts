import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Bar = styled.div`
  display: flex;
  justify-content: center;
  height: 18px;
  padding: 3px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.background.base};
  overflow: hidden;
  border-radius: 9px;
`;

export const ProgressionWrapper = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 6px;
  overflow: hidden;
`;

export const Progression = styled.div<{ percent?: number }>`
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 1);
  transform: translateX(-100%);
  transition: transform 0.2s;
  border-radius: 6px;
  ${(props) =>
    props.percent !== undefined &&
    css`
      transform: translateX(calc(-100% + ${props.percent}%)); ;
    `}
`;

export const ProgressUnit = styled.div`
  margin-top: 6px;
`;
