import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px;
  background-color: ${(props) => props.theme.colors.secondary};
  height: 100%;
`;

export const LoadingStatusText = styled.p`
  color: white;
  text-align: center;
  width: 100%;
  padding: 5px;
  font-size: 18px;
  height: 35px;
`;

export const TemporaryButton = styled.button`
  position: absolute;
  top: 0;
  opacity: 0;
  :hover {
    opacity: 1;
  }
`;
