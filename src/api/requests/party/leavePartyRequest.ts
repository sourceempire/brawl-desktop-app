import { ServerError, usePost } from 'brawl-fetch';
import popup from 'common/popup';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const leavePartyEndpoints = {
  leaveParty: `${SERVER_URL}/api/party/leave`
};

export const useLeavePartyRequest = () => {
  const onError = (error: ServerError) => {
    popup.error(error.error);
  };

  const [leaveParty, { loading, success, error }] = usePost<void>(leavePartyEndpoints.leaveParty, {
    onError
  });

  return {
    leaveParty,
    loading,
    success,
    error
  };
};
