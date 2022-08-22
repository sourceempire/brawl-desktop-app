import Fetcher from 'api/Fetcher';
import { UserStatusEnum } from 'frames/main/components/UserStatus';

export type PublicUser = {
  id: string;
  userTag: string;
};

export type User = PublicUser & {
  name: string;
  username: string;
};

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const getLoggedInUser: () => Promise<{ succeeded: boolean; user: User }> = () => {
  return Fetcher.get(`${SERVER_URL}/api/user`, {});
};

export const setUserStatus: (status: UserStatusEnum) => Promise<{ succeeded: boolean }> = (
  status
) => Fetcher.post(`${SERVER_URL}/api/user/status`, { status: status.toLowerCase() });
