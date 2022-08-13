import Fetcher from 'api/Fetcher';
import { User } from './UserRequests';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export type PotentialFriend = User & { isRequestSent: boolean };

export const potentialFriendsSearch: (
  searchString: string,
  limit: number
) => Promise<{
  succeeded: boolean;
  users: PotentialFriend[];
}> = (searchString, limit) => {
  return Fetcher.post(`${SERVER_URL}/api/user/search/not_friends`, {
    searchString: searchString,
    limit: limit
  });
};

export const sendFriendRequest: (requestFriendId: string) => Promise<{ succeeded: true }> = (
  requestFriendId
) => {
  return Fetcher.post(`${SERVER_URL}/api/friends/request`, { requestFriendId });
};
