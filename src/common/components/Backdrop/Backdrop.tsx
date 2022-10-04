import ReactDOM from 'react-dom';
import { BackgroundImage, Gradient, Wrapper } from './Backdrop.styles';
import temporaryBackdrop from 'assets/images/temporary-csgo-backdrop.jpg';

const Backdrop = () => {
  return ReactDOM.createPortal(
    <Wrapper>
      <BackgroundImage src={temporaryBackdrop} />
      <Gradient />
    </Wrapper>,
    document.getElementById('backdrop-root') as HTMLDivElement
  );
};

export default Backdrop;
