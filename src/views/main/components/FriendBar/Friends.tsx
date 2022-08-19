import { useEffect, useMemo, useState } from 'react';
import useFriendsFeed from 'api/feeds/hooks/useFriendsFeed';
import useLoggedInUser from 'api/requests/hooks/useLoggedInUser';
import { PublicUser } from 'api/requests/UserRequests';
import { useUpdateEffect } from 'utils/hooks';
import { UserStatusEnum } from '../UserStatus';
import { Title } from './FriendBar.styles';
import FriendCard from './FriendCard';
import { FriendList, Wrapper } from './Friends.styles';

type FriendRef = { status: UserStatusEnum };

type Props = {
  searchString: string;
};

const Friends = ({ searchString }: Props) => {
  const { user } = useLoggedInUser();
  const { friends, isLoading } = useFriendsFeed({ userId: user.id });
  const [filteredFriends, setFilteredFriends] = useState<PublicUser[]>([]);
  const [numberOfOnlineFriends, setNumberOfOnlineFriends] = useState<number>();
  const [statusDidChange, setStatusDidChange] = useState(false);

  const handleStatusUpdate = () => {
    setStatusDidChange(true);
  };

  const friendRefs = useMemo<{ current: FriendRef | null }[]>(
    () =>
      filteredFriends?.map(() => ({
        current: null
      })),
    [filteredFriends]
  );

  useEffect(() => {
    if (friends === undefined) return;

    const isMatching = (userTag: string) =>
      userTag.toLowerCase().includes(searchString.toLowerCase());

    setFilteredFriends(friends.filter((friend) => isMatching(friend.userTag)));
  }, [friends, searchString]);

  useUpdateEffect(() => {
    setStatusDidChange(false);
    const n = friendRefs.reduce((onlineCount, { current }) => {
      if (current?.status === undefined) return onlineCount;
      if (current?.status === UserStatusEnum.OFFLINE) return onlineCount;
      return onlineCount + 1;
    }, 0);
    setNumberOfOnlineFriends(n);
  }, [friendRefs, statusDidChange]);

  const numberOfFriends = filteredFriends?.length ?? 0;

  return (
    <Wrapper>
      <Title>Friends - {!isLoading && `${numberOfOnlineFriends}/${numberOfFriends}`}</Title>
      {isLoading ? null : (
        <FriendList>
          {filteredFriends.map((friend, index) => (
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
