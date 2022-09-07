import { useLayoutEffect, useRef, useState } from 'react';
import { InnerWrapper, OuterWrapper } from './EllipsisText.styles';

type UserTagProps = { children: React.ReactNode; className?: string };

const EllipsisText = ({ children, className }: UserTagProps) => {
  const innerWrapperRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [outerWrapperHeight, setOuterWrapperHeight] = useState(0);

  useLayoutEffect(() => {
    setOuterWrapperHeight(innerWrapperRef.current.getBoundingClientRect().height);
  }, []);

  return (
    <OuterWrapper className={className} style={{ minHeight: outerWrapperHeight }}>
      <InnerWrapper ref={innerWrapperRef}>{children}</InnerWrapper>
    </OuterWrapper>
  );
};

export default EllipsisText;
