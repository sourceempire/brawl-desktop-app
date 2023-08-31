import { useState } from 'react';
import { Button } from 'common/ui';
import { TournamentHub } from 'types/tournaments/TournamentInfo';
import HowItWorksModal from '../TournamentHubPage/HowItWorksModal/HowItWorksModal';
import BracketModal from '../TournamentHubPage/BracketModal/BracketModal';
import MapPoolModal from '../TournamentHubPage/MapPoolModal/MapPoolModal';
import PrizesModal from '../TournamentHubPage/PrizesModal/PrizesModal';
import RulesModal from '../TournamentHubPage/RulesModal/RulesModal';
import { Buttons } from './TournamentHubButtons.styles';

type Props = {
  tournamentHub: TournamentHub;
};

const TournamentHubButtons = ({ tournamentHub }: Props) => {
  const [bracketModalOpen, setBracketModalOpen] = useState(false);
  const [mapPoolModalOpen, setMapPoolModalOpen] = useState(false);
  const [rulesModalOpen, setRulesModalOpen] = useState(false);
  const [howItWorksModalOpen, setHowItWorksModalOpen] = useState(false);
  const [prizesModalOpen, setPrizesModalOpen] = useState(false);

  return (
    <>
      <Buttons>
        <Button onClick={() => setBracketModalOpen(true)}>Brackets</Button>
        <Button onClick={() => setMapPoolModalOpen(true)}>Map pool</Button>
        <Button onClick={() => setRulesModalOpen(true)}>Rules</Button>
        <Button onClick={() => setHowItWorksModalOpen(true)}>How it works</Button>
        {tournamentHub.registrationClosed && (
          <Button onClick={() => setPrizesModalOpen(true)}>Prizes</Button>
        )}
      </Buttons>
      {tournamentHub && (
        <BracketModal
          isOpen={bracketModalOpen}
          onRequestClose={() => setBracketModalOpen(false)}
          tournamentHub={tournamentHub}
        />
      )}

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
