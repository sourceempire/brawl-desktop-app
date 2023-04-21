import { Wrapper } from './PageContainer.styles';

type PageContainerProps = {
  children?: React.ReactNode;
};

const PageContainer = ({ children }: PageContainerProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default PageContainer;
