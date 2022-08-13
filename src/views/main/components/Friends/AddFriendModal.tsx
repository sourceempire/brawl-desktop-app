import { useDeferredValue, useEffect, useState } from 'react';
import { PotentialFriend, potentialFriendsSearch } from 'api/requests/FriendRequests';
import { Input } from 'common/ui-components';
import Modal from 'common/ui-components/components/Modal/Modal';
import { InputSize } from 'common/ui-components/types';
import { AddFriendCard } from './AddFriendCard';
import { Players } from './AddFriendModal.styles';
import Icons from 'assets/icons/Icons';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const AddFriendModal = ({ isOpen, onClose }: Props) => {
  const [searchString, setSearchString] = useState('');
  const [potentialFriends, setPotentialFriends] = useState<PotentialFriend[]>([]);
  const [shouldUpdate, setShouldUpdate] = useState<boolean>(false);

  const search = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value);
  };

  const getPotentialFriends = async (searchString: string) => {
    try {
      const result = await potentialFriendsSearch(searchString, 7);
      return setPotentialFriends(result.users);
    } catch (message) {
      return console.error(message);
    }
  };

  useEffect(() => {
    getPotentialFriends(searchString);
  }, [searchString]);

  useEffect(() => {
    if (shouldUpdate) {
      getPotentialFriends(searchString).finally(() => setShouldUpdate(false));
    }
  }, [shouldUpdate, searchString]);

  return (
    <Modal isOpen={isOpen} title="Add Friend" width="350px" onRequestClose={onClose}>
      <Input
        icon={Icons.Search}
        onChange={search}
        value={searchString}
        size={InputSize.SMALL}
        placeholder="Find players by email or user tag"
      />
      <Players>
        {potentialFriends.map((user) => (
          <AddFriendCard
            key={user.id}
            user={user}
            onFriendRequestSuccess={() => setShouldUpdate(true)}
          />
        ))}
      </Players>
    </Modal>
  );
};
