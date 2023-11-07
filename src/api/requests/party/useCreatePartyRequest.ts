import { ErrorResponse, usePost } from '@sourceempire/brawl-fetch';
import popup from 'common/popup';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const createPartyEndpoint = `${SERVER_URL}/api/party/create`;

export const useCreatePartyRequest = () => {
  const onError = (error: ErrorResponse) => {
    popup.error(error.message);
  };

  const [createParty] = usePost<void>(createPartyEndpoint, {
    onError
  });

  return { createParty };
};
