import { Button } from 'common/ui-components';
import Modal from 'common/ui-components/components/Modal/Modal';
import {
  Buttons,
  ConfirmationText,
  FriendToRemove,
  Wrapper
} from './RemoveFriendConfirmationModal.styles';

type Props = {
  isOpen: boolean;
  userTag: string;
  onClose: () => void;
  removeFriend: () => void;
};

const RemoveFriendConfirmationModal = ({ isOpen, userTag, onClose, removeFriend }: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      closeButton={false}
      title="Remove Friend"
      width="250px">
      <Wrapper>
        <ConfirmationText>
          Are you sure you want to remove <FriendToRemove>{userTag}</FriendToRemove> from your
          friend list?
        </ConfirmationText>
      </Wrapper>
      <Buttons>
        <Button onClick={onClose}>Cancel</Button>
        <Button alert onClick={removeFriend}>
          Remove Friend
        </Button>
      </Buttons>
    </Modal>
  );
};

export default RemoveFriendConfirmationModal;
