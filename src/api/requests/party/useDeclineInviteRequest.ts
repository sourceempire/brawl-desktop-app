import { ErrorResponse, usePost } from '@sourceempire/brawl-fetch';
import popup from 'common/popup';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const declineInviteEndpoint = `${SERVER_URL}/api/party/invite/decline`;

type Body = {
  partyId: string;
};

export const useDeclineInviteRequest = () => {
  const onError = (error: ErrorResponse) => {
    popup.error(error.message, { timer: 3000 });
  };

  const [declineInvite, ...response] = usePost<void, Body>(declineInviteEndpoint, {
    onError
  });

  return {
    declineInvite,
    ...response
  };
};
