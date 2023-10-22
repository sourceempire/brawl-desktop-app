import { ErrorResponse, usePost } from '@sourceempire/brawl-fetch';
import popup from 'common/popup';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const giveLeaderEndpoint = `${SERVER_URL}/api/party/leader`;

type Body = {
  newLeaderUserId: string;
};

export const useGiveLeaderRequest = () => {
  const onError = (error: ErrorResponse) => {
    popup.error(error.message);
  };

  const [giveLeader, ...response] = usePost<void, Body>(giveLeaderEndpoint, {
    onError
  });

  return {
    giveLeader,
    ...response
  };
};
