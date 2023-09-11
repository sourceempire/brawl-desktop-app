import { ServerError, usePost } from 'brawl-fetch';
import popup from 'common/popup';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const leavePartyEndpoint = `${SERVER_URL}/api/party/leave`;

export const useLeavePartyRequest = () => {
  const onError = (error: ServerError) => {
    popup.error(error.error);
  };

  const [leaveParty, { loading, success, error }] = usePost<void>(leavePartyEndpoint, {
    onError
  });

  return {
    leaveParty,
    loading,
    success,
    error
  };
};
