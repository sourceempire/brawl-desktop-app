import styled from 'styled-components';

type Props = {
  width?: string;
  height?: string;
  padding: boolean;
};

export const Wrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${(props) => props.theme.colors.surface.base};
  ${(props) => (props.padding ? 'padding: 12px;' : '')}
  border-radius: ${(props) => props.theme.borderRadius.default};
  ${(props) => (props.width ? `width: ${props.width};` : '')}
  ${(props) => (props.height ? `height: ${props.height};` : '')}
`;
