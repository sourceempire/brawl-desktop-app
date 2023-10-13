import { useEffect, useRef } from 'react';
import useActiveLineStyle from 'pages/tournament/hooks/useActiveLineStyle';
import { ActiveLine, NavLink, Wrapper } from './NavItems.styles';
import { useTournamentMatchHistoryFeed } from 'api/feeds';
import { useMatchContext } from 'context/MatchContext';
import { useNavigate } from 'react-router-dom';

type Props = {
  tournamentId: string;
};

export const NavItems = ({ tournamentId }: Props) => {
  const linkListRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [{ style, shouldAnimate }] = useActiveLineStyle({ linkListRef });
  const { matchHistoryList } = useTournamentMatchHistoryFeed({ tournamentId });
  const { match } = useMatchContext();

  const navigate = useNavigate();

  const isMatch = Object.keys(match).length > 0;

  useEffect(() => {
    if (!isMatch) {
      navigate(`/main/tournaments/${tournamentId}/bracket`);
    }
  }, [isMatch]);

  return (
    <Wrapper ref={linkListRef}>
      {isMatch && (
        <NavLink to={`/main/tournaments/${tournamentId}`} end>
          Match
        </NavLink>
      )}

      <NavLink to={`/main/tournaments/${tournamentId}/bracket`}>Bracket</NavLink>
      <NavLink to={`/main/tournaments/${tournamentId}/rules`}>Rules</NavLink>
      {matchHistoryList.length < 1 && (
        <NavLink to={`/main/tournaments/${tournamentId}/match-history`}>Match History</NavLink>
      )}
      <ActiveLine style={style} shouldAnimate={shouldAnimate} />
    </Wrapper>
  );
};

export default NavItems;
