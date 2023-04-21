import { Wrapper } from './PageFrame.styles';

type PageFrameProps = {
  children?: React.ReactNode;
};

const PageFrame = ({ children }: PageFrameProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default PageFrame;
