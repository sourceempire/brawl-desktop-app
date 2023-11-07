import { useEffect, useRef } from 'react';
import useActiveLineStyle from 'pages/tournament/hooks/useActiveLineStyle';
import { ActiveLine, NavLink, Wrapper } from './NavItems.styles';
import { useMatchFeed, useTournamentMatchHistoryFeed } from 'api/feeds';
import { useNavigate } from 'react-router-dom';

type Props = {
  tournamentId: string;
  matchId: string;
};

export const NavItems = ({ tournamentId, matchId }: Props) => {
  const linkListRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [{ style, shouldAnimate }] = useActiveLineStyle({ linkListRef });
  const { matchHistoryList, isLoading: isLoadingMatchHirstory } = useTournamentMatchHistoryFeed({
    tournamentId
  });
  const { match, isLoading: isLoadingMatch } = useMatchFeed({ matchId });

  const navigate = useNavigate();

  useEffect(() => {
    if (!match?.hasGameData) {
      navigate(`/main/tournaments/${tournamentId}/bracket`);
    } else {
      navigate(`/main/tournaments/${tournamentId}`);
    }
  }, [match?.hasGameData]);

  return (
    <Wrapper ref={linkListRef}>
      {!isLoadingMatch && match.hasGameData && (
        <NavLink to={`/main/tournaments/${tournamentId}`} end>
          Match
        </NavLink>
      )}

      <NavLink to={`/main/tournaments/${tournamentId}/bracket`}>Bracket</NavLink>
      <NavLink to={`/main/tournaments/${tournamentId}/rules`}>Rules</NavLink>
      {!isLoadingMatchHirstory && matchHistoryList.length > 1 && (
        <NavLink to={`/main/tournaments/${tournamentId}/match-history`}>Match History</NavLink>
      )}
      <ActiveLine style={style} shouldAnimate={shouldAnimate} />
    </Wrapper>
  );
};

export default NavItems;
