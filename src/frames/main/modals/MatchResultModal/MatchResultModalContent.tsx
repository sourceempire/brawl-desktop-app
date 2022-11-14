import { useContext, useEffect, useState } from 'react';
import { useMatchFeed } from 'api/feeds';
import { getTournamentByMatchId } from 'api/requests/TournamentRequests';
import { useNavigate } from 'react-router-dom';
import { Button } from 'common/components';
import { MatchResultModalContext } from 'context/MatchResultModalContext';
import CSGOMatchResult from 'pages/shared/components/MatchResult/CSGOMatchResult';
import { MatchType, isCSGOMatch } from 'types/match/Match';
import { Tournament } from 'types/tournaments/TournamentInfo';
import { Buttons, Header, Wrapper } from './MatchResultModalContent.styles';

type Props = {
  matchId: string;
};

// TODO -> Add a header with tournament name and "Defeat" or "Victory"

const MatchResultModalContent = ({ matchId }: Props) => {
  const navigate = useNavigate();
  const { match, team1, team2, isLoading } = useMatchFeed(matchId);
  const { hideModal } = useContext(MatchResultModalContext);

  const [tournament, setTournament] = useState<Tournament>();

  useEffect(() => {
    if (isLoading) return;
    if (!match) return;

    if (match.matchType === MatchType.TOURNAMENT) {
      getTournamentByMatchId(match.id).then((result) => {
        setTournament(result.tournament);
      });
    }
  }, [isLoading, match]);

  if (isLoading) return null;

  const handleNavigate = () => {
    if (tournament) {
      navigate(`tournaments/${tournament.id}`);
    }

    hideModal();
  };

  return (
    <Wrapper>
      {tournament && (
        <Header>
          Tournament - {tournament.name} {tournament.tournamentNumber}
        </Header>
      )}

      {isCSGOMatch(match) && (
        <CSGOMatchResult match={match} team1={team1} team2={team2} disableBackgroundFadeIn />
      )}

      <Buttons>
        <Button onClick={hideModal}>Close</Button>
        {tournament && (
          <Button onClick={handleNavigate} primary>
            Go to tournament
          </Button>
        )}
      </Buttons>
    </Wrapper>
  );
};

export default MatchResultModalContent;
