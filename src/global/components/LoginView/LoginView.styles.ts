import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  height: 100%;
  padding: 100px 12px;
  padding-top: ${(props) => props.theme.titleBarHeight};
`;

export const Version = styled.p`
  position: absolute;
  bottom: 12px;
  left: 0;
  right: 0;
  width: 100%;
  font-size: 10px;
  opacity: 0.3;
  font-weight: 100;
  text-align: center;
`;
