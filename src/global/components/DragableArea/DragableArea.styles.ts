import styled from "styled-components";

export const Wrapper = styled.div`
    top: 0;
    position: absolute; 
    width: 100%;
    height: ${props => props.theme.titleBarHeight};
    // background-color: ${props => props.theme.colors.primary};
    -webkit-app-region: drag;
`