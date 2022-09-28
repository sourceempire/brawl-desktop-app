import { useCallback, useEffect, useState } from 'react';
import { useTournamentHubFeed } from 'api/feeds';
import * as TournamentRequests from 'api/requests/TournamentRequests';
import { Link, useParams } from 'react-router-dom';
import { Button } from 'common/components';
import popup from 'common/popup';
import { Tournament } from 'types/tournaments/TournamentInfo';
import { Hero, Wrapper } from './TournamentHubPage.styles';
import temporaryHeroImage from 'assets/images/temporary-tournament-hub-hero.png';

const TournamentHubPage = () => {
  const { hubId } = useParams() as { hubId: string };

  const { tournamentHub, tournamentIds } = useTournamentHubFeed(hubId);

  const [loggedInUserTournament, setLoggedInUserTournament] = useState<Tournament>();

  const signup = () => {
    TournamentRequests.joinTournament(hubId)
      .then(() => popup.info('Tournament joined'))
      .catch((error) => popup.error(error.error));
  };

  const getLoggedInUserTournament = useCallback(async () => {
    try {
      const res = await TournamentRequests.getTournament({ tournamentHubId: hubId });
      setLoggedInUserTournament(res.tournament);
    } catch (error) {
      // TODO -> allow
      console.error(error);
    }
  }, [hubId]);

  useEffect(() => {
    getLoggedInUserTournament();
  }, [getLoggedInUserTournament]);

  return (
    <Wrapper>
      <Hero image={temporaryHeroImage} />
      {!tournamentHub.registrationClosed && (
        <Button primary onClick={signup}>
          Sign up
        </Button>
      )}

      {loggedInUserTournament && (
        <Link to={`/main/tournaments/${loggedInUserTournament.id}`}>Go to your tournament</Link>
      )}
    </Wrapper>
  );
};

export default TournamentHubPage;
