import { ServerError, usePost } from 'brawl-fetch';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const updatePartySizeEndpoints = {
  updatePartySize: `${SERVER_URL}/api/party/update_party_size`
};

type Body = {
  partySize: number;
};

type Option = {
  onError: (error: ServerError) => void;
};

export const useUpdatePartySizeRequest = ({ onError }: Option) => {
  const [updatePartySize, { loading, success, error }] = usePost<void, Body>(
    updatePartySizeEndpoints.updatePartySize,
    { onError }
  );

  return {
    updatePartySize: (body: Body) => updatePartySize({ body }),
    loading,
    success,
    error
  };
};
