import { ServerError, usePost } from 'brawl-fetch';
import popup from 'common/popup';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const partyEndpoints = {
  invitePlayer: `${SERVER_URL}/api/party/invite`,
  kickPlayer: `${SERVER_URL}/api/party/kick`,
  acceptInvite: `${SERVER_URL}/api/party/invite/accept`
};

type invitePlayerRequestBody = {
  invitedUserId: string;
};

type kickPlayerRequestBody = {
  kickedUserId: string;
};

type acceptInviteRequestBody = {
  partyId: string;
};

export const useInvitePlayerRequest = () => {
  const onError = (error: ServerError) => {
    popup.error(error.error);
  };

  const [invitePlayer, { loading, success, error }] = usePost<void, invitePlayerRequestBody>(
    partyEndpoints.invitePlayer,
    { onError }
  );

  return {
    invitePlayer: (body: invitePlayerRequestBody) => invitePlayer({ body }),
    loading,
    success,
    error
  };
};

export const useKickPlayerRequest = () => {
  const onError = (error: ServerError) => {
    popup.error(error.error);
  };

  const [kickPlayer, { loading, success, error }] = usePost<void, kickPlayerRequestBody>(
    partyEndpoints.kickPlayer,
    { onError }
  );

  return {
    kickPlayer: (body: kickPlayerRequestBody) => kickPlayer({ body }),
    loading,
    success,
    error
  };
};

export const useAcceptInviteRequest = () => {
  const onError = (error: ServerError) => {
    popup.warning(error.error, { timer: 3000 });
  };

  const [acceptInvite, { loading, success, error }] = usePost<void, acceptInviteRequestBody>(
    partyEndpoints.acceptInvite,
    { onError }
  );

  return {
    acceptInvite: (body: acceptInviteRequestBody) => acceptInvite({ body }),
    loading,
    success,
    error
  };
};
