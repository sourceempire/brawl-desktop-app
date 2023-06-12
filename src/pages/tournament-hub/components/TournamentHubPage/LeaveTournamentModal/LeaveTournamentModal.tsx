import { Modal } from 'common/ui';

type Props = {
  isOpen: boolean;
  onRequestClose: () => void;
};

const LeaveTournamentModal = ({ isOpen, onRequestClose }: Props) => {
  return (
    <Modal
      title="Leave Tournament"
      isOpen={isOpen}
      onRequestClose={() => {
        onRequestClose();
      }}
      width="450px"
      height="350px">
      {/*INSERT CONTENT HERE*/}
    </Modal>
  );
};

export default LeaveTournamentModal;
