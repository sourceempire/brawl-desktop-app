import { ReactElement, ReactNode, useRef, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { TabsBar, TabsBarTab, Wrapper } from './Tabs.styled';

type TabsProp = {
  underlined?: boolean;
  children: ReactElement<TabProp> | ReactElement<TabProp>[];
};

enum Direction {
  LEFT,
  RIGHT
}

export function Tabs({ children }: TabsProp) {
  if (!Array.isArray(children)) {
    children = [children];
  }
  const [active, setActive] = useState(children[0].props.name);
  const order = useRef<Direction>(Direction.RIGHT);

  function changeTab(name: string) {
    if (name === active) return;

    for (const child of children as ReactElement<TabProp>[]) {
      if (child.props.name === name) {
        // found new child before active child => animate left
        order.current = Direction.LEFT;
        break;
      } else if (child.props.name === active) {
        // found active child before new child => animate right
        order.current = Direction.RIGHT;
        break;
      }
    }
    setActive(name);
  }

  return (
    <Wrapper>
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
      <TransitionGroup
        className={
          'page-container' + (order.current === Direction.RIGHT ? ' order-right' : ' order-left')
        }>
        {children.map((child) => {
          if (child.props.name === active) {
            return (
              <CSSTransition key={child.props.name} timeout={500} mountOnEnter unmountOnExit>
                {child}
              </CSSTransition>
            );
          } else {
            return null;
          }
        })}
      </TransitionGroup>
    </Wrapper>
  );
}

type TabProp = {
  name: string;
  children: ReactNode;
};

export function Tab({ children }: TabProp) {
  return <div className="page">{children}</div>;
}
