import { Modal } from 'common/ui';
import SkeletonBracket from 'pages/tournament/components/Bracket/SkeletonBracket';
import { TournamentHub } from 'types/tournaments/TournamentInfo';

type Props = {
  isOpen: boolean;
  onRequestClose: () => void;
  tournamentHub: TournamentHub;
};

const BracketsModal = ({ isOpen, onRequestClose, tournamentHub }: Props) => {
  //TODO -> Replace type with gameId from matchSettings

  return (
    <Modal
      title="Brackets"
      isOpen={isOpen}
      onRequestClose={() => {
        onRequestClose();
      }}
      width="100%"
      margin="50px">
      <SkeletonBracket
        type={tournamentHub.bracketType}
        numberOfTeams={tournamentHub.teamsAllowed}
      />
    </Modal>
  );
};

export default BracketsModal;
