import Fetcher from 'api/Fetcher';
import { User } from './UserRequests';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export type PotentialFriend = User & { isRequestSent: boolean };
export type FriendRequest = (friendId: string) => Promise<{ succeeded: boolean }>;

export const potentialFriendsSearch: (options: { searchString: string; limit: number }) => Promise<{
  succeeded: boolean;
  users: PotentialFriend[];
}> = ({ searchString, limit }) => {
  return Fetcher.post(`${SERVER_URL}/api/user/search/not_friends`, {
    searchString: searchString,
    limit: limit
  });
};

export const sendFriendRequest: FriendRequest = (requestFriendId) =>
  Fetcher.post(`${SERVER_URL}/api/friends/request`, { requestFriendId });

export const cancelFriendRequest: FriendRequest = (requestFriendId) =>
  Fetcher.post(`${SERVER_URL}/api/friends/request/cancel`, { requestFriendId });

export const acceptFriendRequest: FriendRequest = (requestFriendId) =>
  Fetcher.post(`${SERVER_URL}/api/friends/request/accept`, { requestFriendId });

export const declineFriendRequest: FriendRequest = (requestFriendId) =>
  Fetcher.post(`${SERVER_URL}/api/friends/request/decline`, { requestFriendId });

export const removeFriend: FriendRequest = (friendId) =>
  Fetcher.post(`${SERVER_URL}/api/friends/remove`, { friendId });
