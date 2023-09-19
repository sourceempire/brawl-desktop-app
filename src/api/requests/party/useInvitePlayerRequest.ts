import { usePost, ErrorResponse } from 'brawl-fetch';
import popup from 'common/popup';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const invitePlayerEndpoint = `${SERVER_URL}/api/party/invite`;

type Body = {
  invitedUserId: string;
};

export const useInvitePlayerRequest = () => {
  const onError = (error: ErrorResponse) => {
    popup.error(error.message);
  };

  const [invitePlayer, ...response] = usePost<void, Body>(invitePlayerEndpoint, {
    onError
  });

  return {
    invitePlayer,
    ...response
  };
};
