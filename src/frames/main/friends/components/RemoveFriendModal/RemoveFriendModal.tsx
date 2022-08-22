import { Button } from 'common/components';
import Modal from 'common/components/Modal/Modal';
import { Buttons, ConfirmationText, FriendToRemove, Wrapper } from './RemoveFriendModal.styles';

type Props = {
  isOpen: boolean;
  userTag: string;
  onClose: () => void;
  removeFriend: () => void;
};

const RemoveFriendModal = ({ isOpen, userTag, onClose, removeFriend }: Props) => {
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

export default RemoveFriendModal;
