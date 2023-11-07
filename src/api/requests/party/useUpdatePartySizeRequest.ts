import { ErrorResponse, usePost } from '@sourceempire/brawl-fetch';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const updatePartySizeEndpoint = `${SERVER_URL}/api/party/update_party_size`;

type Body = {
  partySize: number;
};

type Option = {
  onError: (error: ErrorResponse) => void;
};

export const useUpdatePartySizeRequest = ({ onError }: Option) => {
  const [updatePartySize] = usePost<void, Body>(updatePartySizeEndpoint, { onError });

  return {
    updatePartySize
  };
};
