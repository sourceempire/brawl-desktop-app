import { useState } from 'react';
import { Input } from 'common/ui-components';
import { InputSize } from 'common/ui-components/types';
import { FriendAction, FriendActions, Wrapper } from './Friends.styles';
import Icons from 'assets/icons/Icons';

type Props = {
  visible: boolean;
};

const Friends = ({ visible }: Props) => {
  const [friendsFilter, setFriendFilter] = useState('');
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
        <FriendAction icon={<Icons.AddFriend />} onClick={() => {}} hint="Add Friend" />
      </FriendActions>
    </Wrapper>
  );
};

export default Friends;
