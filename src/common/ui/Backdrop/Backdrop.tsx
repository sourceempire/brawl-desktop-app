import ReactDOM from 'react-dom';
import { BackgroundImage, Gradient, Wrapper } from './Backdrop.styles';

type Props = {
  imageId: string;
};

export const Backdrop = ({ imageId }: Props) => {
  return ReactDOM.createPortal(
    <Wrapper>
      <BackgroundImage imageId={imageId} />
      <Gradient />
    </Wrapper>,
    document.getElementById('backdrop-root') as HTMLDivElement
  );
};
