import { useCallback, useEffect, useRef, useState } from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { useUpdateEffect } from 'utils/hooks';
import { ActiveLine, NavLink, Wrapper } from './NavItems.styles';

export const NavItems = () => {
  const matchLinkRef = useRef() as React.MutableRefObject<HTMLAnchorElement>;
  const bracketLinkRef = useRef() as React.MutableRefObject<HTMLAnchorElement>;
  const rulesLinkRef = useRef() as React.MutableRefObject<HTMLAnchorElement>;
  const chatLinkRef = useRef() as React.MutableRefObject<HTMLAnchorElement>;

  const [activeLineStyle, setActiveLineStyle] = useState<Record<string, string | number>>({});
  const [shouldAnimateLine, setShouldAnimateLine] = useState(false);

  const location = ReactRouterDom.useLocation();

  const updateActiveLineStyle = useCallback(() => {
    const activeLink = [matchLinkRef, bracketLinkRef, rulesLinkRef, chatLinkRef].find((ref) =>
      ref.current.className.includes('active')
    );

    setActiveLineStyle({
      transform: `translateX(${activeLink?.current.offsetLeft}px) scaleX(${activeLink?.current.offsetWidth})`
    });

    if (!shouldAnimateLine) {
      setTimeout(() => setShouldAnimateLine(true), 200);
    }
  }, [shouldAnimateLine]);

  /**
   * First render will wait 10 milliseconds to set active position of
   * line due to style needing to be loaded
   */
  useEffect(() => {
    setTimeout(() => {
      updateActiveLineStyle();
    }, 10);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Every time pathname updates, the active line should be updated
   */
  useUpdateEffect(() => {
    updateActiveLineStyle();
  }, [location.pathname]);

  const { tournamentId } = ReactRouterDom.useParams() as { tournamentId: string };
  return (
    <Wrapper>
      <NavLink ref={matchLinkRef} to={`/main/tournaments/${tournamentId}`} end>
        Match
      </NavLink>
      <NavLink ref={bracketLinkRef} to={`/main/tournaments/${tournamentId}/bracket`}>
        Bracket
      </NavLink>
      <NavLink ref={rulesLinkRef} to={`/main/tournaments/${tournamentId}/rules`}>
        Rules
      </NavLink>
      <NavLink ref={chatLinkRef} to={`/main/tournaments/${tournamentId}/chat`}>
        Chat
      </NavLink>
      <ActiveLine style={activeLineStyle} shouldAnimate={shouldAnimateLine} />
    </Wrapper>
  );
};

export default NavItems;
