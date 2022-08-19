import { useState } from 'react';
import { InputSize } from 'common/ui-components/types';
import { AddFriendModal } from './AddFriendModal';
import {
  FriendAction,
  FriendActions,
  ScrollContent,
  SearchFriendsInput,
  Wrapper
} from './FriendBar.styles';
import FriendRequests from './FriendRequests';
import Friends from './Friends';
import Icons from 'assets/icons/Icons';

type Props = {
  visible: boolean;
};

const FriendBar = ({ visible }: Props) => {
  const [searchString, setSearchString] = useState('');
  const [isAddFriendModalOpen, setAddFriendModalOpen] = useState(false);

  if (!visible) return null;

  return (
    <>
      <Wrapper>
        <FriendActions>
          <SearchFriendsInput
            icon={Icons.Search}
            value={searchString}
            onChange={(event) => setSearchString(event.target.value)}
            size={InputSize.SMALL}
            placeholder="Friends Filter"
          />
          <FriendAction
            icon={<Icons.AddFriend />}
            onClick={() => setAddFriendModalOpen(true)}
            hint="Add Friend"
          />
        </FriendActions>
        <ScrollContent>
          <FriendRequests />
          <Friends searchString={searchString} />
        </ScrollContent>
      </Wrapper>
      <AddFriendModal isOpen={isAddFriendModalOpen} onClose={() => setAddFriendModalOpen(false)} />
    </>
  );
};

export default FriendBar;
