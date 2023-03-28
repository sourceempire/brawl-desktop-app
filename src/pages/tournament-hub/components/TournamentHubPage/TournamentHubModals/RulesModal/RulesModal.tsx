import { Modal } from 'common/ui';

type Props = {
  isOpen: boolean;
  onRequestClose: () => void;
};

const RulesModal = ({ isOpen, onRequestClose }: Props) => {
  //TODO -> Replace type with gameId from matchSettings

  return (
    <Modal
      title="Rules"
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

export default RulesModal;
