import { MutableRefObject, useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

type Options = {
  linkListRef: MutableRefObject<HTMLDivElement>;
  activeTabName?: string;
};

const useActiveLineStyle = ({ linkListRef, activeTabName }: Options) => {
  const [style, setActiveLineStyle] = useState<Record<string, string | number>>({
    transform: 'scale(0)'
  });
  const [shouldAnimate, setShouldAnimateLine] = useState(false);

  const location = useLocation();

  useLayoutEffect(() => {
    const activeLink = activeTabName
      ? (Array.from(linkListRef.current.children).find(
          (link) => link.textContent === activeTabName
        ) as HTMLAnchorElement)
      : (Array.from(linkListRef.current.children).find((link) =>
          link.className.includes('active')
        ) as HTMLAnchorElement);

    const waitTime = shouldAnimate ? 0 : 20;
    const activeLineStyleTimout = setTimeout(() => {
      setActiveLineStyle({
        transform: `translateX(${activeLink?.offsetLeft}px) scaleX(${activeLink?.offsetWidth})`
      });
    }, waitTime);

    let shouldAnimateLineTimeout: NodeJS.Timeout;

    if (!shouldAnimate) {
      shouldAnimateLineTimeout = setTimeout(() => setShouldAnimateLine(true), 300);
    }

    return () => {
      clearTimeout(activeLineStyleTimout);
      clearTimeout(shouldAnimateLineTimeout);
    };
  }, [linkListRef, location.pathname, shouldAnimate, activeTabName]);

  return [{ style, shouldAnimate }];
};

export default useActiveLineStyle;
