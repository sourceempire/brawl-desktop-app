import { ServerError, usePost } from 'brawl-fetch';
import popup from 'common/popup';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const revokeInviteEndpoints = {
  revokeInvite: `${SERVER_URL}/api/party/invite/revoke`
};

type Body = {
  invitedUserId: string;
};

export const useRevokeInviteRequest = () => {
  const onError = (error: ServerError) => {
    popup.error(error.error);
  };

  const [revokeInvite, { loading, success, error }] = usePost<void, Body>(
    revokeInviteEndpoints.revokeInvite,
    { onError }
  );

  return {
    revokeInvite: (body: Body) => revokeInvite({ body }),
    loading,
    success,
    error
  };
};
