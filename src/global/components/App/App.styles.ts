import styled, { css } from "styled-components";
import { PlatformName } from "../../types/PlatformName";

const titleBarHeightStyle = css`
  ${process.platform === PlatformName.MAC &&
  css`
    padding-top: 23.5px;
  `}
  ${process.platform === PlatformName.WINDOWS &&
  css`
    padding-top: 32px;
  `}
`;

export const AppContainer = styled.div`
  ${titleBarHeightStyle}

  background-color: ${(props) => props.theme.colors.background};
  height: 100vh;
`;
