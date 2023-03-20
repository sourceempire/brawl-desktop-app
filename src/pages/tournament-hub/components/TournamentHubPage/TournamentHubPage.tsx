import { useCallback, useEffect, useState } from 'react';
import { useTournamentHubFeed, useTournamentTeamFeed } from 'api/feeds';
import * as TournamentRequests from 'api/requests/TournamentRequests';
import { Link, useParams } from 'react-router-dom';
import { useLoggedInUser } from 'common/hooks/useLoggedInUser';
import popup from 'common/popup';
import { Backdrop, Button } from 'common/ui';
import CountDown from 'pages/tournament/components/CountDown';
import InfoCards from 'pages/tournament/components/InfoCards/InfoCards';
import { Tournament } from 'types/tournaments/TournamentInfo';
import BracketsModal from './TournamentHubModals/BracketsModal/BracketsModal';
import HowItWorksModal from './TournamentHubModals/HowItWorksModal/HowItWorksModal';
import MapPoolModal from './TournamentHubModals/MapPoolModal/MapPoolModal';
import RulesModal from './TournamentHubModals/RulesModal/RulesModal';
import {
  ButtonsWrapper,
  Header,
  HeaderHub,
  HeaderInfo,
  HeaderWrapper,
  LeftButtons,
  PredictedPrize,
  PrizeElement,
  PrizePosition,
  RightButtons,
  TournamentHubInfoWrapper,
  Wrapper
} from './TournamentHubPage.styles';

const TournamentHubPage = () => {
  const { hubId } = useParams() as { hubId: string };
  const user = useLoggedInUser();
  const { isInTournamentTeam, tournamentTeam, isLoading } = useTournamentTeamFeed(hubId, user.id);
  const { tournamentHub } = useTournamentHubFeed(hubId);

  console.log(tournamentHub);
  console.log(user.id);
  console.log(isInTournamentTeam);
  console.log(tournamentTeam);

  const [loggedInUserTournament, setLoggedInUserTournament] = useState<Tournament>();
  console.log(loggedInUserTournament);

  const buttons = [
    { name: 'brackets', text: 'Brackets' },
    { name: 'mapPool', text: 'Map pool' },
    { name: 'rules', text: 'Rules' },
    { name: 'howItWorks', text: 'How it works' }
  ];
  const [shownModal, setShownModal] = useState({
    brackets: false,
    mapPool: false,
    rules: false,
    howItWorks: false
  });

  const handleOpenModal = (name: string) => {
    setShownModal({ ...shownModal, [name]: true });
  };
  //TODO -> Fetch correct prizepool data
  const prizePool = [100, 200, 300, 400];

  const signup = () => {
    TournamentRequests.joinTournament(hubId)
      .then(() => popup.info('Tournament joined'))
      .catch((error) => popup.error(error.error));
  };

  const leave = () => {
    TournamentRequests.leaveTournament(hubId)
      .then(() => popup.info('Tournament leaved'))
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
      {loggedInUserTournament ? (
        <Link to={`/main/tournaments/${loggedInUserTournament.id}`}>Go to your tournament</Link>
      ) : (
        <HeaderInfo>
          <HeaderHub>{tournamentHub.name}</HeaderHub>
          <CountDown startTime={Number(tournamentHub.startTime)} />
          <div>
            <div></div>
          </div>
        </HeaderInfo>
      )}
      <ButtonsWrapper>
        <LeftButtons>
          {buttons.map((button) => (
            <Button key={button.name} onClick={() => handleOpenModal(button.name)}>
              {button.text}
            </Button>
          ))}
        </LeftButtons>
        <RightButtons>
          {!tournamentHub.registrationClosed &&
            (!isInTournamentTeam ? (
              <Button primary onClick={signup}>
                Join tournament
              </Button>
            ) : (
              <Button primary onClick={leave}>
                Leave Tournament
              </Button>
            ))}
        </RightButtons>
      </ButtonsWrapper>
      <BracketsModal
        isOpen={shownModal.brackets}
        onRequestClose={() => setShownModal({ ...shownModal, brackets: false })}
      />
      <MapPoolModal
        isOpen={shownModal.mapPool}
        onRequestClose={() => setShownModal({ ...shownModal, mapPool: false })}
      />
      <RulesModal
        isOpen={shownModal.rules}
        onRequestClose={() => setShownModal({ ...shownModal, rules: false })}
      />
      <HowItWorksModal
        isOpen={shownModal.howItWorks}
        onRequestClose={() => setShownModal({ ...shownModal, howItWorks: false })}
      />
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
