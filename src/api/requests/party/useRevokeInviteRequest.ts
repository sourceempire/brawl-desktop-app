import { ErrorResponse, usePost } from 'brawl-fetch';
import popup from 'common/popup';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const revokeInviteEndpoint = `${SERVER_URL}/api/party/invite/revoke`;

type Body = {
  invitedUserId: string;
};

export const useRevokeInviteRequest = () => {
  const onError = (error: ErrorResponse) => {
    popup.error(error.message);
  };

  const [revokeInvite, ...response] = usePost<void, Body>(revokeInviteEndpoint, {
    onError
  });

  return {
    revokeInvite,
    ...response
  };
};
