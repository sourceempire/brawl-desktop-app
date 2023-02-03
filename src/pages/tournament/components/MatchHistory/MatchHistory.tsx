import { Navigate, Route, Routes } from 'react-router-dom';
import MatchResult from 'common/components/MatchResult';
import { Button } from 'common/ui';
import { TournamentMatchInfo } from 'types/tournaments/TournamentInfo';
import { MatchResultWrapper, MatchRoundLink, Matches, Wrapper } from './MatchHistory.styles';

type Props = {
  matchList: TournamentMatchInfo[];
};

const MatchHistory = ({ matchList }: Props) => {
  if (matchList.length < 1) {
    return null;
  }

  return (
    <Wrapper>
      <Matches>
        {matchList.map((match) => (
          <MatchRoundLink to={match.matchId} key={match.matchId}>
            <Button>{match.roundName}</Button>
          </MatchRoundLink>
        ))}
      </Matches>
      <MatchResultWrapper>
        <Routes>
          <Route path=":matchId" element={<MatchResult />} />
          <Route
            path="*"
            element={<Navigate to={matchList[matchList.length - 1].matchId} replace />}
          />
        </Routes>
      </MatchResultWrapper>
    </Wrapper>
  );
};

export default MatchHistory;
