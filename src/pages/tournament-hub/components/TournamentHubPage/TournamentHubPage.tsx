import { useCallback, useEffect, useState } from 'react';
import { useTournamentHubFeed } from 'api/feeds';
import * as TournamentRequests from 'api/requests/TournamentRequests';
import { Link, useParams } from 'react-router-dom';
import popup from 'common/popup';
import { Backdrop, Button } from 'common/ui';
import InfoCards from 'pages/tournament/components/InfoCards/InfoCards';
import { Tournament } from 'types/tournaments/TournamentInfo';
import {
  Header,
  HeaderWrapper,
  PredictedPrize,
  PrizeElement,
  PrizePosition,
  TournamentHubInfoWrapper,
  Wrapper
} from './TournamentHubPage.styles';

const TournamentHubPage = () => {
  const { hubId } = useParams() as { hubId: string };

  const { tournamentHub } = useTournamentHubFeed(hubId);

  const [loggedInUserTournament, setLoggedInUserTournament] = useState<Tournament>();

  //TODO -> Fetch correct prizepool data
  const prizePool = [100, 200, 300, 400];

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

      <TournamentHubInfoWrapper isRegistrationClosed={tournamentHub.registrationClosed}>
        <HeaderWrapper>
          <Header>Tournament Information</Header>
          <InfoCards tournamentHub={tournamentHub} />
        </HeaderWrapper>
        {!tournamentHub.registrationClosed && (
          <HeaderWrapper>
            <Header>Predicted Prize Pool</Header>
            <PredictedPrize>
              {prizePool.map((prize, index) => {
                const prizePosition = index + 1;
                return (
                  <PrizeElement key={index}>
                    <PrizePosition>{prizePosition}</PrizePosition>€{prize}
                  </PrizeElement>
                );
              })}
            </PredictedPrize>
          </HeaderWrapper>
        )}
      </TournamentHubInfoWrapper>
    </Wrapper>
  );
};

export default TournamentHubPage;
