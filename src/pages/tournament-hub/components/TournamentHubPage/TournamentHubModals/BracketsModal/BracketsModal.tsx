import { useEffect } from 'react';
import { Modal } from 'common/ui';
import Bracket from 'pages/tournament/components/Bracket';
import { isSingleElimination } from 'types/tournaments/Bracket';
import { Tournament, TournamentHub } from 'types/tournaments/TournamentInfo';

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
      {/*INSERT CONTENT HERE*/}
      <Bracket
        tournamentId={tournamentHub.id}
        type={tournamentHub.bracketType}
        numberOfTeams={tournamentHub.teamsAllowed}></Bracket>
    </Modal>
  );
};

export default BracketsModal;
