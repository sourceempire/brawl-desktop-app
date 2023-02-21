import { useCallback, useEffect, useState } from 'react';
import { useTournamentHubFeed } from 'api/feeds';
import * as TournamentRequests from 'api/requests/TournamentRequests';
import { Link, useParams } from 'react-router-dom';
import popup from 'common/popup';
import { Backdrop, Button } from 'common/ui';
import InfoCards from 'pages/tournament/components/InfoCards/InfoCards';
import { Tournament } from 'types/tournaments/TournamentInfo';
import {
  TournamentHubInfoHeader,
  TournamentHubInfoWrapper,
  Wrapper
} from './TournamentHubPage.styles';

const TournamentHubPage = () => {
  const { hubId } = useParams() as { hubId: string };

  const { tournamentHub } = useTournamentHubFeed(hubId);

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
    // Replace with a feed
    getLoggedInUserTournament();
  }, [getLoggedInUserTournament]);

  return (
    <Wrapper>
      <Backdrop />
      {!tournamentHub.registrationClosed && (
        <Button primary onClick={signup}>
          Sign up
        </Button>
      )}

      {loggedInUserTournament && (
        <Link to={`/main/tournaments/${loggedInUserTournament.id}`}>Go to your tournament</Link>
      )}
      <TournamentHubInfoHeader>Tournament Information</TournamentHubInfoHeader>
      <TournamentHubInfoWrapper>
        <InfoCards tournamentHub={tournamentHub} />
      </TournamentHubInfoWrapper>
    </Wrapper>
  );
};

export default TournamentHubPage;
