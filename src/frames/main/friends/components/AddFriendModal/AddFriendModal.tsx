import { useEffect, useState } from 'react';
import { useServerEvents } from 'api/events';
import { PotentialFriend, potentialFriendsSearch } from 'api/requests/FriendRequests';
import { Input } from 'common/components';
import { InputSize } from 'common/components/Input/Input.types';
import Modal from 'common/components/Modal/Modal';
import popup from 'common/popup';
import { useDebounce } from 'utils/hooks';
import AddFriendCard from '../AddFriendCard';
import { Players, maxNumberOfUsers } from './AddFriendModal.styles';
import Icons from 'assets/icons/Icons';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const AddFriendModal = ({ isOpen, onClose }: Props) => {
  const [searchString, setSearchString] = useState('');
  const [potentialFriends, setPotentialFriends] = useState<PotentialFriend[]>([]);
  const [shouldUpdate, setShouldUpdate] = useState<boolean>(false);
  const { addServerEventListener, removeServerEventListener } = useServerEvents();

  const debouncedSearchString = useDebounce(searchString, 250);

  const search = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value);
  };

  const getPotentialFriends = async (searchString: string) => {
    try {
      const result = await potentialFriendsSearch({ searchString, limit: maxNumberOfUsers });
      return setPotentialFriends(result.users);
    } catch (message) {
      console.error(message);
      popup.error('Could not retreive list of users');
    }
  };

  useEffect(() => {
    getPotentialFriends(debouncedSearchString);
  }, [debouncedSearchString]);

  useEffect(() => {
    if (shouldUpdate) {
      getPotentialFriends(searchString).finally(() => setShouldUpdate(false));
    }
  }, [shouldUpdate, searchString]);

  useEffect(() => {
    const requestDeclineListenerId = addServerEventListener('friend-request-declined', () => {
      getPotentialFriends(searchString);
    });
    const requestAcceptListenerId = addServerEventListener('friend-request-accepted', () => {
      getPotentialFriends(searchString);
    });
    return () => {
      removeServerEventListener('friend-request-declined', requestDeclineListenerId);
      removeServerEventListener('friend-request-accepted', requestAcceptListenerId);
    };
  }, [addServerEventListener, removeServerEventListener, searchString]);

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
            onFriendRequestCancel={() => setShouldUpdate(true)}
          />
        ))}
      </Players>
    </Modal>
  );
};

export default AddFriendModal;
