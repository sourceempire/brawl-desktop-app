import { Button } from 'common/components';
import { useFriendList } from 'frames/main/friends/hooks/useFriendList';
import { Title } from '../FriendBar/FriendBar.styles';
import FriendCard from '../FriendCard';
import {
  BigAddFriendIcon,
  FriendList,
  FriendListSkeleton,
  NoFriendsContainer,
  NoFriendsText,
  Wrapper
} from './FriendList.styles';

type Props = {
  searchString: string;
  openAddFriendModal: () => void;
};

const Friends = ({ searchString, openAddFriendModal }: Props) => {
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
      <FriendList>
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
      </FriendList>

      {numberOfFriends === 0 && (
        <NoFriendsContainer>
          <BigAddFriendIcon />
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

export default Friends;
