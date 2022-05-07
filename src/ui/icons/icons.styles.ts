import styled from 'styled-components';
import { IconProps } from 'ui/types';

export const Svg = styled.svg<IconProps>`
  fill: ${(props) => (props.fill ? props.fill : '#FFF')};
`;
