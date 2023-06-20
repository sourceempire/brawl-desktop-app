import { Modal } from 'common/ui';
import { Wrapper } from './TeamSettingsModal.styles';

type Props = {
  isOpen: boolean;
  onRequestClose: () => void;
};

const TeamSettingsModal = ({ isOpen, onRequestClose }: Props) => {
  return (
    <Modal
      title="Team Settings"
      isOpen={isOpen}
      onRequestClose={() => {
        onRequestClose();
      }}>
      <Wrapper />
    </Modal>
  );
};

export default TeamSettingsModal;
