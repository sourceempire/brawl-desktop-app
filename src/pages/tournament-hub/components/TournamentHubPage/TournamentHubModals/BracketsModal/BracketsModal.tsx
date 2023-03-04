import { Modal } from 'common/ui';

type Props = {
  isOpen: boolean;
  onRequestClose: () => void;
};

const BracketsModal = ({ isOpen, onRequestClose }: Props) => {
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
    </Modal>
  );
};

export default BracketsModal;
