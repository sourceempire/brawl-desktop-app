import { ServerError, usePost } from 'brawl-fetch';
import popup from 'common/popup';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const declineInviteEndpoint = `${SERVER_URL}/api/party/invite/decline`;

type Body = {
  partyId: string;
};

export const useDeclineInviteRequest = () => {
  const onError = (error: ServerError) => {
    popup.error(error.error, { timer: 3000 });
  };

  const [declineInvite, { loading, success, error }] = usePost<void, Body>(declineInviteEndpoint, {
    onError
  });

  return {
    declineInvite,
    loading,
    success,
    error
  };
};
