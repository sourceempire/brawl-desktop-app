import { ReactElement, ReactNode, useState } from 'react';
import { TabsBar, TabsBarTab } from './Tabs.styled';

type TabsProp = {
  underlined?: boolean;
  children: ReactElement<TabProp> | ReactElement<TabProp>[];
};

export function Tabs({ children }: TabsProp) {
  if (!Array.isArray(children)) {
    children = [children];
  }
  const [active, setActive] = useState(children[0].props.name);

  function changeTab(name: string) {
    if (name === active) return;

    setActive(name);
  }

  return (
    <>
      <TabsBar>
        {children.map((child) => (
          <TabsBarTab
            key={child.props.name}
            onClick={() => changeTab(child.props.name)}
            active={child.props.name === active}>
            {child.props.name}
          </TabsBarTab>
        ))}
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
