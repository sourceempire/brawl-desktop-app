import { ErrorResponse, usePost } from '@sourceempire/brawl-fetch';
import popup from 'common/popup';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const acceptInviteEndpoint = `${SERVER_URL}/api/party/invite/accept`;

type Body = {
  partyId: string;
};

export const useAcceptInviteRequest = () => {
  const onError = (error: ErrorResponse) => {
    popup.warning(error.message, { timer: 3000 });
  };

  const [acceptInvite, ...response] = usePost<void, Body>(acceptInviteEndpoint, {
    onError
  });

  return {
    acceptInvite,
    ...response
  };
};
