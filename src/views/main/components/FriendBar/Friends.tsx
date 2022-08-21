import { useMemo, useState } from 'react';
import useFriendsFeed from 'api/feeds/hooks/useFriendsFeed';
import useLoggedInUser from 'api/requests/hooks/useLoggedInUser';
import { useUpdateEffect } from 'utils/hooks';
import { UserStatusEnum } from '../UserStatus';
import { Title } from './FriendBar.styles';
import FriendCard from './FriendCard';
import { FriendList, Wrapper } from './Friends.styles';

type FriendRef = { status: UserStatusEnum };

const Friends = () => {
  const { user } = useLoggedInUser();
  const { friends, isLoading } = useFriendsFeed({ userId: user.id });
  const [numberOfOnlineFriends, setNumberOfOnlineFriends] = useState<number>();
  const [statusDidChange, setStatusDidChange] = useState(false);

  const handleStatusUpdate = () => {
    setStatusDidChange(true);
  };

  const friendRefs = useMemo<{ current: FriendRef | null }[]>(
    () =>
      friends?.map(() => ({
        current: null
      })),
    [friends]
  );

  useUpdateEffect(() => {
    setStatusDidChange(false);
    const n = friendRefs.reduce((onlineCount, { current }) => {
      if (current?.status === undefined) return onlineCount;
      if (current?.status === UserStatusEnum.OFFLINE) return onlineCount;
      return onlineCount + 1;
    }, 0);
    setNumberOfOnlineFriends(n);
  }, [friendRefs, statusDidChange]);

  const numberOfFriends = friends?.length ?? 0;

  return (
    <Wrapper>
      <Title>Friends - {!isLoading && `${numberOfOnlineFriends}/${numberOfFriends}`}</Title>
      {isLoading ? null : (
        <FriendList>
          {friends.map((friend, index) => (
            <FriendCard
              ref={friendRefs[index]}
              key={friend.id}
              user={friend}
              onStatusChange={handleStatusUpdate}
            />
          ))}
        </FriendList>
      )}
    </Wrapper>
  );
};

export default Friends;
