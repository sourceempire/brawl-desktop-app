import { useEffect } from "react";
import { Wrapper } from "./LoadingView.styles";
import Window from "../../../window/Window";

const openMainWindow = () => {
    Window.openMainWindow()
}

const openLoginWindow = () => {
    Window.openLoginWindow()
}

const LoadingView = () => {
    return (
        <Wrapper>
            <p>This is where the loading should happen</p>
            <button onClick={openMainWindow}>Open main window</button>
            <button onClick={openLoginWindow}>Open login window</button>
        </Wrapper>
    )
}

export default LoadingView;