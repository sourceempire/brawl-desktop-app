import { ErrorResponse, usePost } from '@sourceempire/brawl-fetch';
import popup from 'common/popup';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const leavePartyEndpoint = `${SERVER_URL}/api/party/leave`;

export const useLeavePartyRequest = () => {
  const onError = (error: ErrorResponse) => {
    popup.error(error.message);
  };

  const [leaveParty] = usePost<void>(leavePartyEndpoint, {
    onError
  });

  return {
    leaveParty
  };
};
