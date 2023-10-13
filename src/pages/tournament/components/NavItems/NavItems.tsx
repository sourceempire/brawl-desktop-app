import { useRef } from 'react';
import useActiveLineStyle from 'pages/tournament/hooks/useActiveLineStyle';
import { ActiveLine, NavLink, Wrapper } from './NavItems.styles';

type Props = {
  tournamentId: string;
  matchId: string | null;
};

export const NavItems = ({ tournamentId, matchId }: Props) => {
  const linkListRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [{ style, shouldAnimate }] = useActiveLineStyle({ linkListRef });

  return (
    <Wrapper ref={linkListRef}>
      {matchId && (
        <NavLink to={`/main/tournaments/${tournamentId}`} end>
          Match
        </NavLink>
      )}

      <NavLink to={`/main/tournaments/${tournamentId}/bracket`}>Bracket</NavLink>
      <NavLink to={`/main/tournaments/${tournamentId}/rules`}>Rules</NavLink>
      <NavLink to={`/main/tournaments/${tournamentId}/match-history`}>Match History</NavLink>
      <ActiveLine style={style} shouldAnimate={shouldAnimate} />
    </Wrapper>
  );
};

export default NavItems;
