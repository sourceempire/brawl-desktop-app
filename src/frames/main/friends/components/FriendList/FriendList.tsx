import { Button } from 'common/ui';
import { useFriendList } from 'frames/main/friends/hooks/useFriendList';
import { Title } from '../FriendBar/FriendBar.styles';
import FriendCard from '../FriendCard';
import {
  FriendListSkeleton,
  Friends,
  NoFriendsContainer,
  NoFriendsText,
  Wrapper
} from './FriendList.styles';

type Props = {
  searchString: string;
  openAddFriendModal: () => void;
};

const FriendList = ({ searchString, openAddFriendModal }: Props) => {
  const {
    friendItems,
    numberOfFriends,
    numberOfOnlineFriends,
    friendRefs,
    isLoading,
    handleStatusChange
  } = useFriendList({
    searchString
  });

  return (
    <Wrapper>
      <Title>Friends{!isLoading && ` - ${numberOfOnlineFriends}/${numberOfFriends}`}</Title>
      <Friends>
        {friendItems.map((friendItem, index) => (
          <FriendCard
            key={friendItem.friend.id}
            ref={friendRefs[index]}
            user={friendItem.friend}
            isHidden={isLoading || friendItem.isHidden}
            onStatusChange={handleStatusChange}
          />
        ))}
        {isLoading && <FriendListSkeleton cardCount={6} />}
      </Friends>

      {numberOfFriends === 0 && !isLoading && (
        <NoFriendsContainer>
          <NoFriendsText>
            You have no friends yet
            <br />
            Add friends now
          </NoFriendsText>
          <Button onClick={openAddFriendModal}>Add Friends</Button>
        </NoFriendsContainer>
      )}
    </Wrapper>
  );
};

export default FriendList;
