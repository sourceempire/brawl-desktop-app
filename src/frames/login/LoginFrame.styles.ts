import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  padding-top: ${(props) => props.theme.titleBarHeight}px;
`;
