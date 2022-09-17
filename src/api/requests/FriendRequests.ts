import Fetcher from 'api/Fetcher';
import { User } from './UserRequests';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export type PotentialFriend = User & { isRequestSent: boolean };

export const potentialFriendsSearch: (options: { searchString: string; limit: number }) => Promise<{
  succeeded: boolean;
  users: PotentialFriend[];
}> = ({ searchString, limit }) => {
  return Fetcher.post(`${SERVER_URL}/api/user/search/not_friends`, {
    searchString: searchString,
    limit: limit
  });
};

export const sendFriendRequest = (requestFriendId: string) =>
  Fetcher.post(`${SERVER_URL}/api/friends/request`, { requestFriendId });

export const cancelFriendRequest = (requestFriendId: string) =>
  Fetcher.post(`${SERVER_URL}/api/friends/request/cancel`, { requestFriendId });

export const acceptFriendRequest = (requestFriendId: string) =>
  Fetcher.post(`${SERVER_URL}/api/friends/request/accept`, { requestFriendId });

export const declineFriendRequest = (requestFriendId: string) =>
  Fetcher.post(`${SERVER_URL}/api/friends/request/decline`, { requestFriendId });

export const removeFriend = (friendId: string) =>
  Fetcher.post(`${SERVER_URL}/api/friends/remove`, { friendId });
