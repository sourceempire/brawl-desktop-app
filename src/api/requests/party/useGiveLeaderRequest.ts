import { ServerError, usePost } from 'brawl-fetch';
import popup from 'common/popup';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const giveLeaderEndpoint = `${SERVER_URL}/api/party/leader`;

type Body = {
  newLeaderUserId: string;
};

export const useGiveLeaderRequest = () => {
  const onError = (error: ServerError) => {
    popup.error(error.error);
  };

  const [giveLeader, { loading, success, error }] = usePost<void, Body>(giveLeaderEndpoint, {
    onError
  });

  return {
    giveLeader: (body: Body) => giveLeader({ body }),
    loading,
    success,
    error
  };
};
