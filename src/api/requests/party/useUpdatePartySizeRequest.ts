import { ServerError, usePost } from 'brawl-fetch';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const updatePartySizeEndpoint = `${SERVER_URL}/api/party/update_party_size`;

type Body = {
  partySize: number;
};

type Option = {
  onError: (error: ServerError) => void;
};

export const useUpdatePartySizeRequest = ({ onError }: Option) => {
  const [updatePartySize, ...response] = usePost<void, Body>(updatePartySizeEndpoint, { onError });

  return {
    updatePartySize,
    ...response
  };
};
