import { usePartyFeed, useTournamentHubFeed } from 'api/feeds';
import { useParams } from 'react-router-dom';
import { useLoggedInUser } from 'common/hooks/useLoggedInUser';
import { BracketModal } from './BracketModal';
import { MapPoolModal } from './MapPoolModal';
import { HowItWorksModal } from './HowItWorksModal/';
import { RulesModal } from './RulesModal';
import { TeamSettingsModal } from './TeamSettingsModal';
import { TournamentHubModalType } from 'common/ui/Modal/Modal.types';
import { PrizesModal } from './PrizesModal';

type Props = {
  activeModal: TournamentHubModalType;
  closeModal: () => void;
};

export function TournamentHubModal({ activeModal, closeModal }: Props) {
  const { hubId } = useParams() as { hubId: string };
  const user = useLoggedInUser();
  const { tournamentHub, isLoading } = useTournamentHubFeed({ tournamentHubId: hubId });
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
      <PrizesModal isOpen={activeModal === 'prizes'} onRequestClose={closeModal} />
      <TeamSettingsModal
        isOpen={activeModal === 'teamSettings'}
        playerIds={party ? party.players : [user.id]}
        hubId={hubId}
        onRequestClose={closeModal}
      />
    </>
  );
}
