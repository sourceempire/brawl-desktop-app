import { Modal } from 'common/ui';
import { isSingleElimination } from 'types/tournaments/Bracket';
import { TournamentHub } from 'types/tournaments/TournamentInfo';

type Props = {
  isOpen: boolean;
  onRequestClose: () => void;
  tournament: tou;
};

const BracketsModal = ({ isOpen, onRequestClose, tournament }: Props) => {
  //TODO -> Replace type with gameId from matchSettings
  console.log(tournament);
  return (
    <Modal
      title="Brackets"
      isOpen={isOpen}
      onRequestClose={() => {
        onRequestClose();
      }}
      width="100%"
      margin="50px">
      <>{isSingleElimination(tournament.bracketType)} </>
    </Modal>
  );
};

export default BracketsModal;
