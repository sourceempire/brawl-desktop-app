import { useCallback, useEffect, useState } from 'react';
import { useTournamentHubFeed } from 'api/feeds';
import * as TournamentRequests from 'api/requests/TournamentRequests';
import { Link, useParams } from 'react-router-dom';
import popup from 'common/popup';
import { Backdrop, Button } from 'common/ui';
import InfoCards from 'pages/tournament/components/InfoCards/InfoCards';
import { Tournament } from 'types/tournaments/TournamentInfo';
import TorunamentHubButtons from '../TournamentHubButtons/TournamentHubButtons';
import BracketsModal from './TournamentHubModals/BracketsModal/BracketsModal';
import HowItWorksModal from './TournamentHubModals/HowItWorksModal/HowItWorksModal';
import MapPoolModal from './TournamentHubModals/MapPoolModal/MapPoolModal';
import RulesModal from './TournamentHubModals/RulesModal/RulesModal';
import {
  ButtonsWrapper,
  TournamentHubInfoHeader,
  TournamentHubInfoWrapper,
  Wrapper
} from './TournamentHubPage.styles';

const TournamentHubPage = () => {
  const { hubId } = useParams() as { hubId: string };

  const { tournamentHub } = useTournamentHubFeed(hubId);

  const [loggedInUserTournament, setLoggedInUserTournament] = useState<Tournament>();

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
    console.log(shownModal);
    getLoggedInUserTournament();
  }, [getLoggedInUserTournament, shownModal]);

  return (
    <Wrapper>
      <Backdrop />
      <ButtonsWrapper>
        {buttons.map((button) => (
          <Button key={button.name} onClick={() => handleOpenModal(button.name)}>
            {button.text}
          </Button>
        ))}
        {!tournamentHub.registrationClosed && (
          <Button primary onClick={signup}>
            Join tournament
          </Button>
        )}
        {loggedInUserTournament && (
          <Link to={`/main/tournaments/${loggedInUserTournament.id}`}>Go to your tournament</Link>
        )}
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
      <TournamentHubInfoHeader>Tournament Information</TournamentHubInfoHeader>
      <TournamentHubInfoWrapper>
        <InfoCards tournamentHub={tournamentHub} />
      </TournamentHubInfoWrapper>
    </Wrapper>
  );
};

export default TournamentHubPage;
