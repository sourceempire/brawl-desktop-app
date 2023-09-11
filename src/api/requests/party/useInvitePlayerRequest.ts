import { ServerError, usePost } from 'brawl-fetch';
import popup from 'common/popup';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const invitePlayerEndpoint = `${SERVER_URL}/api/party/invite`;

type Body = {
  invitedUserId: string;
};

export const useInvitePlayerRequest = () => {
  const onError = (error: ServerError) => {
    popup.error(error.error);
  };

  const [invitePlayer, { loading, success, error }] = usePost<void, Body>(invitePlayerEndpoint, {
    onError
  });

  return {
    invitePlayer: (body: Body) => invitePlayer({ body }),
    loading,
    success,
    error
  };
};
