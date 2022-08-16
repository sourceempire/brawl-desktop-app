import { useState } from 'react';
import { Input } from 'common/ui-components';
import { InputSize } from 'common/ui-components/types';
import { AddFriendModal } from './AddFriendModal';
import { FriendAction, FriendActions, Wrapper } from './FriendBar.styles';
import FriendRequests from './FriendRequests';
import Friends from './Friends';
import Icons from 'assets/icons/Icons';

type Props = {
  visible: boolean;
};

const FriendBar = ({ visible }: Props) => {
  const [friendsFilter, setFriendFilter] = useState('');
  const [isAddFriendModalOpen, setAddFriendModalOpen] = useState(false);
  if (!visible) return null;

  return (
    <Wrapper>
      <FriendActions>
        <Input
          icon={Icons.Search}
          value={friendsFilter}
          onChange={(event) => setFriendFilter(event.target.value)}
          size={InputSize.SMALL}
          placeholder="Friends Filter"
        />
        <FriendAction
          icon={<Icons.AddFriend />}
          onClick={() => setAddFriendModalOpen(true)}
          hint="Add Friend"
        />
      </FriendActions>
      <FriendRequests />
      <Friends />

      <AddFriendModal isOpen={isAddFriendModalOpen} onClose={() => setAddFriendModalOpen(false)} />
    </Wrapper>
  );
};

export default FriendBar;
