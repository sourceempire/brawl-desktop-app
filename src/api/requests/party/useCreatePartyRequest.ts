import { ServerError, usePost } from 'brawl-fetch';
import popup from 'common/popup';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const createPartyEndpoint = `${SERVER_URL}/api/party/create`;

export const useCreatePartyRequest = () => {
  const onError = (error: ServerError) => {
    popup.error(error.error);
  };

  const [createParty, { loading, success, error }] = usePost<void>(createPartyEndpoint, {
    onError
  });

  return {
    createParty,
    loading,
    success,
    error
  };
};
