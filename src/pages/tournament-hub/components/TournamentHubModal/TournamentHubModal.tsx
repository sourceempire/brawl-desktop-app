import { usePartyFeed, useTournamentHubFeed } from 'api/feeds';
import { useParams } from 'react-router-dom';
import { useLoggedInUser } from 'common/hooks/useLoggedInUser';
import BracketModal from '../TournamentHubModals/BracketModal/BracketModal';
import MapPoolModal from '../TournamentHubModals/MapPoolModal/MapPoolModal';
import HowItWorksModal from '../TournamentHubModals/HowItWorksModal/HowItWorksModal';
import RulesModal from '../TournamentHubModals/RulesModal/RulesModal';
import TeamSettingsModal from '../TournamentHubModals/TeamSettingsModal/TeamSettingsModal';
import { TournamentHubModalType } from 'common/ui/Modal/Modal.types';

type Props = {
  activeModal: TournamentHubModalType;
  closeModal: () => void;
};

const TournamentHubModal = ({ activeModal, closeModal }: Props) => {
  const { hubId } = useParams() as { hubId: string };
  const user = useLoggedInUser();
  const { tournamentHub, isLoading } = useTournamentHubFeed(hubId);
  const { party } = usePartyFeed();

  if (isLoading) return null;

  return (
    <>
      <BracketModal
        isOpen={activeModal === 'brackets'}
        onRequestClose={closeModal}
        tournamentHub={tournamentHub}
      />
      <MapPoolModal isOpen={activeModal === 'mapPool'} onRequestClose={closeModal} />
      <RulesModal
        tournamentHubId={hubId}
        isOpen={activeModal === 'rules'}
        onRequestClose={closeModal}
      />
      <HowItWorksModal isOpen={activeModal === 'howItWorks'} onRequestClose={closeModal} />
      <TeamSettingsModal
        isOpen={activeModal === 'teamSettings'}
        playerIds={party ? party.players : [user.id]}
        hubId={hubId}
        onRequestClose={closeModal}
      />
    </>
  );
};

export default TournamentHubModal;
