import Fetcher from 'api/Fetcher';
import { UserStatusEnum } from 'views/main/components/UserStatus';

export type User = {
  id: string;
  name: string;
  username: string;
  userTag: string;
};

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const getLoggedInUser: () => Promise<{ succeeded: boolean; user: User }> = () => {
  return Fetcher.get(`${SERVER_URL}/api/user`, {});
};

export const setUserStatus: (status: UserStatusEnum) => Promise<{ succeeded: boolean }> = (
  status
) => Fetcher.post(`${SERVER_URL}/api/user/status`, { status: status.toLowerCase() });
