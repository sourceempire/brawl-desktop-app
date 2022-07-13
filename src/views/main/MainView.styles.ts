import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  padding-top: ${(props) => props.theme.titleBarHeight};
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Page = styled.div`
  overflow-y: scroll;
`;
