import { useState } from 'react';
import { InputSize } from 'common/components/Input/Input.types';
import AddFriendModal from '../AddFriendModal';
import FriendList from '../FriendList';
import FriendRequestList from '../FriendRequestList';
import {
  FriendAction,
  FriendActions,
  ScrollContent,
  SearchFriendsInput,
  Wrapper
} from './FriendBar.styles';
import Icons from 'assets/icons/Icons';

type Props = {
  visible: boolean;
};

const FriendBar = ({ visible }: Props) => {
  const [searchString, setSearchString] = useState('');
  const [isAddFriendModalOpen, setAddFriendModalOpen] = useState(false);

  const openAddFriendModal = () => {
    setAddFriendModalOpen(true);
  };

  const closeAddFriendModal = () => {
    setAddFriendModalOpen(false);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value);
  };

  if (!visible) return null;

  return (
    <>
      <Wrapper onPointerDown={(e) => e.stopPropagation}>
        <FriendActions>
          <SearchFriendsInput
            icon={<Icons.Search />}
            value={searchString}
            onChange={handleSearch}
            size={InputSize.SMALL}
            placeholder="Friends Filter"
          />
          <FriendAction icon={<Icons.AddFriend />} onClick={openAddFriendModal} hint="Add Friend" />
        </FriendActions>
        <ScrollContent>
          <FriendRequestList />
          <FriendList searchString={searchString} openAddFriendModal={openAddFriendModal} />
        </ScrollContent>
      </Wrapper>
      <AddFriendModal isOpen={isAddFriendModalOpen} onClose={closeAddFriendModal} />
    </>
  );
};

export default FriendBar;
