import Fetcher from 'api/Fetcher';
import { UserStatusEnum } from 'views/main/components/UserStatus';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export type User = {
  id: string;
  name: string;
  username: string;
  usertag: string;
};

export const getLoggedInUser: () => Promise<{ succeeded: boolean; user: User }> = () => {
  return Fetcher.get(`${SERVER_URL}/api/user`, {});
};

export const setUserStatus: (status: UserStatusEnum) => Promise<{ succeeded: boolean }> = (
  status
) => Fetcher.post(`${SERVER_URL}/api/user/status`, { status });
