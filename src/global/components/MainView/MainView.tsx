import { Route, Routes } from 'react-router-dom';
import DragableArea from '../DragableArea';
import { Wrapper } from './MainView.styles';

const MainView = () => {
  return (
    <Wrapper>
      <DragableArea />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <p>Main View</p>
              <p>Version: {process.env.REACT_APP_VERSION}</p>
              <p>Fett kul att den uppdaterades</p>
            </>
          }
        />
      </Routes>
    </Wrapper>
  );
};

export default MainView;
