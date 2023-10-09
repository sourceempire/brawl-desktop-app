import { Modal } from 'common/ui';
import Bracket from 'pages/tournament/components/Bracket';
import { TournamentHub } from 'types/tournaments/TournamentInfo';

type Props = {
  isOpen: boolean;
  onRequestClose: () => void;
  tournamentHub: TournamentHub;
};

const BracketsModal = ({ isOpen, onRequestClose, tournamentHub }: Props) => {
  return (
    <Modal
      title="Bracket structure"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      width="100%"
      margin="50px"
      scrollable={true}>
      <Bracket
        tournamentId={tournamentHub.id}
        numberOfTeams={tournamentHub.teamsAllowed}
        gameId={tournamentHub.gameId}
      />
    </Modal>
  );
};

export default BracketsModal;
