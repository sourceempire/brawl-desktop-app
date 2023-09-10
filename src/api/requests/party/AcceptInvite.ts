import { ServerError, usePost } from 'brawl-fetch';
import popup from 'common/popup';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const acceptInviteEndpoints = {
  acceptInvite: `${SERVER_URL}/api/party/invite/accept`
};

type Body = {
  partyId: string;
};

export const useAcceptInviteRequest = () => {
  const onError = (error: ServerError) => {
    popup.warning(error.error, { timer: 3000 });
  };

  const [acceptInvite, { loading, success, error }] = usePost<void, Body>(
    acceptInviteEndpoints.acceptInvite,
    { onError }
  );

  return {
    acceptInvite: (body: Body) => acceptInvite({ body }),
    loading,
    success,
    error
  };
};
