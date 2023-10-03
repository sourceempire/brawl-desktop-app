import styled from '@emotion/styled';

export const Wrapper = styled.div`
  top: 0;
  position: absolute;
  width: 100%;
  height: ${(props) => props.theme.titleBarHeight}px;
  -webkit-app-region: drag;
`;
