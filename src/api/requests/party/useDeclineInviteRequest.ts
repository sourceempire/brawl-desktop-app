import { ServerError, usePost } from 'brawl-fetch';
import popup from 'common/popup';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const declineInviteEndpoints = {
  declineInvite: `${SERVER_URL}/api/party/invite/decline`
};

type Body = {
  partyId: string;
};

export const useDeclineInviteRequest = () => {
  const onError = (error: ServerError) => {
    popup.error(error.error, { timer: 3000 });
  };

  const [declineInvite, { loading, success, error }] = usePost<void, Body>(
    declineInviteEndpoints.declineInvite,
    { onError }
  );

  return {
    declineInvite: (body: Body) => declineInvite({ body }),
    loading,
    success,
    error
  };
};
