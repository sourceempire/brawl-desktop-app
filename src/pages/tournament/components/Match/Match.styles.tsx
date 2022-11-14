import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  flex-grow: 1;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;
`;

export const MiddleContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`;
