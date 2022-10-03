import Fetcher from 'api/Fetcher';
import { UserStatusEnum } from 'common/components/UserStatus';
import { PublicUser, User } from 'types/user/User';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const getLoggedInUser = () => {
  return Fetcher.get<{ user: User }>(`${SERVER_URL}/api/user`, {});
};

export const getPublicUser = (userId: string) =>
  Fetcher.get<{ user: PublicUser }>(`${SERVER_URL}/api/user`, { id: userId });

export const setUserStatus = (status: UserStatusEnum) =>
  Fetcher.post(`${SERVER_URL}/api/user/status`, { status: status.toLowerCase() });
