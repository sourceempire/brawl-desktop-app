import { ReactElement, ReactNode, useRef, useState } from 'react';
import { ActiveLine, NavLink, TabsBar } from './Tabs.styled';
import useActiveLineStyle from 'pages/tournament/hooks/useActiveLineStyle';

type TabsProp = {
  underlined?: boolean;
  children: ReactElement<TabProp> | ReactElement<TabProp>[];
};

export function Tabs({ children }: TabsProp) {
  if (!Array.isArray(children)) {
    children = [children];
  }

  const [active, setActive] = useState(children[0].props.name);

  const linkListRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [{ style, shouldAnimate }] = useActiveLineStyle({ linkListRef, activeTabName: active });

  function changeTab(name: string) {
    if (name === active) return;

    setActive(name);
  }

  return (
    <>
      <TabsBar ref={linkListRef}>
        {children.map((child) => (
          <NavLink to="#" onClick={() => changeTab(child.props.name)}>
            {child.props.name}
          </NavLink>
        ))}
        <ActiveLine style={style} shouldAnimate={shouldAnimate} />
      </TabsBar>
      {children.map((child) => {
        if (child.props.name === active) {
          return child;
        } else {
          return null;
        }
      })}
    </>
  );
}

type TabProp = {
  name: string;
  children: ReactNode;
};

export function Tab({ children }: TabProp) {
  return <div className="page">{children}</div>;
}
