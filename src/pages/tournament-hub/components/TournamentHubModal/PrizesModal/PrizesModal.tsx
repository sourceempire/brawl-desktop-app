import { Modal } from 'common/ui';

type Props = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export function PrizesModal({ isOpen, onRequestClose }: Props) {
  return (
    <Modal
      title="Prizes"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      width="100%"
      margin="50px">
      {/*INSERT CONTENT HERE*/}
    </Modal>
  );
}
