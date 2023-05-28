import { useState } from 'react';
import { Button } from 'common/ui';
import { TournamentHub } from 'types/tournaments/TournamentInfo';
import BracketsModal from '../TournamentHubPage/TournamentHubModals/BracketsModal/BracketsModal';
import HowItWorksModal from '../TournamentHubPage/TournamentHubModals/HowItWorksModal/HowItWorksModal';
import MapPoolModal from '../TournamentHubPage/TournamentHubModals/MapPoolModal/MapPoolModal';
import PrizesModal from '../TournamentHubPage/TournamentHubModals/PrizesModal/PrizesModal';
import RulesModal from '../TournamentHubPage/TournamentHubModals/RulesModal/RulesModal';
import { Buttons } from './TournamentHubButtons.styles';

type Props = {
  tournamentHub: TournamentHub;
};

const TournamentHubButtons = ({ tournamentHub }: Props) => {
  //TODO -> Replace type with gameId from matchSettings
  const [bracketsModalOpen, setBracketsModalOpen] = useState(false);
  const [mapPoolModalOpen, setMapPoolModalOpen] = useState(false);
  const [rulesModalOpen, setRulesModalOpen] = useState(false);
  const [howItWorksModalOpen, setHowItWorksModalOpen] = useState(false);
  const [prizesModalOpen, setPrizesModalOpen] = useState(false);

  return (
    <>
      <Buttons>
        <Button onClick={() => setBracketsModalOpen(true)}>Brackets</Button>
        <Button onClick={() => setMapPoolModalOpen(true)}>Map pool</Button>
        <Button onClick={() => setRulesModalOpen(true)}>Rules</Button>
        <Button onClick={() => setHowItWorksModalOpen(true)}>How it works</Button>
        {tournamentHub.registrationClosed && (
          <Button onClick={() => setPrizesModalOpen(true)}>Prizes</Button>
        )}
      </Buttons>
      <BracketsModal
        isOpen={bracketsModalOpen}
        onRequestClose={() => setBracketsModalOpen(false)}
      />
      <MapPoolModal isOpen={mapPoolModalOpen} onRequestClose={() => setMapPoolModalOpen(false)} />
      <RulesModal
        isOpen={rulesModalOpen}
        onRequestClose={() => setRulesModalOpen(false)}
        tournamentHubId={tournamentHub.id}
      />
      <HowItWorksModal
        isOpen={howItWorksModalOpen}
        onRequestClose={() => setHowItWorksModalOpen(false)}
      />
      <PrizesModal isOpen={prizesModalOpen} onRequestClose={() => setPrizesModalOpen(false)} />
    </>
  );
};

export default TournamentHubButtons;
