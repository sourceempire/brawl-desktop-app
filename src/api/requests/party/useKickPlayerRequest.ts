import { ServerError, usePost } from 'brawl-fetch';
import popup from 'common/popup';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const kickPlayerEndpoint = `${SERVER_URL}/api/party/kick`;

type Body = {
  kickedUserId: string;
};

export const useKickPlayerRequest = () => {
  const onError = (error: ServerError) => {
    popup.error(error.error);
  };

  const [kickPlayer, { loading, success, error }] = usePost<void, Body>(kickPlayerEndpoint, {
    onError
  });

  return {
    kickPlayer: (body: Body) => kickPlayer({ body }),
    loading,
    success,
    error
  };
};
