import { IconProps } from 'common/ui-components/types';
import styled from 'styled-components';

export const Svg = styled.svg<IconProps>`
  fill: ${(props) => (props.fill ? props.fill : '#FFF')};
`;
