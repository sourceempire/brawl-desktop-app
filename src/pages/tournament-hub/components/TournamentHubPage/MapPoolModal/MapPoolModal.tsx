import { Modal } from 'common/ui';

type Props = {
  isOpen: boolean;
  onRequestClose: () => void;
};

const MapPoolModal = ({ isOpen, onRequestClose }: Props) => {
  return (
    <Modal
      title="Map Pool"
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

export default MapPoolModal;
