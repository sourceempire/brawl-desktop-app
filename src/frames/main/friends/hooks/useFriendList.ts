import { useMemo, useState } from 'react';
import useFriendsFeed from 'api/feeds/hooks/useFriendsFeed';
import { useLoggedInUser } from 'hooks';
import { UserStatusEnum } from 'common/components/UserStatus';
import { PublicUser } from 'types/user/User';
import { useUpdateEffect } from 'utils/hooks';
import { FriendRef, statusSortOrder } from '../components/FriendList/FriendList.types';

type Options = {
  searchString: string;
};

type FriendItem = { friend: PublicUser; isHidden: boolean };

export const useFriendList = ({ searchString }: Options) => {
  const user = useLoggedInUser();
  const { friends, isLoading: isLoadingFriends } = useFriendsFeed({ userId: user.id });
  const [friendItems, setFriendItems] = useState<FriendItem[]>([]);
  const [isLoadingStatuses, setLoadingStatuses] = useState(true);
  const [numberOfOnlineFriends, setNumberOfOnlineFriends] = useState<number>();
  const [statusDidChange, setStatusDidChange] = useState(false);

  const handleStatusChange = () => {
    setStatusDidChange(true);
  };

  const friendRefs = useMemo<{ current: FriendRef | null }[]>(
    () =>
      friendItems?.map(() => ({
        current: null
      })),
    [friendItems]
  );

  useUpdateEffect(() => {
    const shouldStopLoading = friendRefs
      .map((friendRef) => friendRef.current?.isLoadingStatus)
      .every((isLoading) => isLoading === false);

    if (shouldStopLoading) {
      setLoadingStatuses(false);
    }
  }, [friendRefs]);

  useUpdateEffect(() => {
    if (friends === undefined) return;

    const isMatchingSearchString = (userTag: string) =>
      userTag.toLowerCase().includes(searchString.toLowerCase());

    const filteredList = friends.map((friend) => ({
      friend,
      isHidden: !isMatchingSearchString(friend.userTag)
    }));

    const sortedFriendItems = filteredList.sort((friendItemA, friendItemB) => {
      const friendAStatus = friendRefs.find(
        (friendRef) => friendRef.current?.userId === friendItemA.friend.id
      )?.current?.status;

      const friendBStatus = friendRefs.find(
        (friendRef) => friendRef.current?.userId === friendItemB.friend.id
      )?.current?.status;

      const friendASortOrder = statusSortOrder[friendAStatus ?? UserStatusEnum.OFFLINE];
      const friendBSortOrder = statusSortOrder[friendBStatus ?? UserStatusEnum.OFFLINE];

      return friendASortOrder - friendBSortOrder;
    });

    setFriendItems(sortedFriendItems);
  }, [friends, searchString, statusDidChange]);

  useUpdateEffect(() => {
    setStatusDidChange(false);
    const n = friendRefs.reduce((onlineCount, { current }) => {
      if (current?.status === undefined) return onlineCount;
      if (current?.status === UserStatusEnum.OFFLINE) return onlineCount;
      return onlineCount + 1;
    }, 0);
    setNumberOfOnlineFriends(n);
  }, [friendRefs, statusDidChange]);

  const numberOfFriends = friends?.length;

  return {
    friendItems,
    numberOfFriends,
    numberOfOnlineFriends,
    friendRefs,
    isLoading: isLoadingFriends || isLoadingStatuses,
    handleStatusChange
  };
};
