import { ServerError, usePost } from 'brawl-fetch';
import popup from 'common/popup';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const partyEndpoints = {
  createParty: `${SERVER_URL}/api/party/create`,
  invitePlayer: `${SERVER_URL}/api/party/invite`,
  kickPlayer: `${SERVER_URL}/api/party/kick`,
  acceptInvite: `${SERVER_URL}/api/party/invite/accept`,
  declineInvite: `${SERVER_URL}/api/party/invite/decline`,
  giveLeader: `${SERVER_URL}/api/party/leader`,
  updatePartySize: `${SERVER_URL}/api/party/update_party_size`,
  updatePartyTeamName: `${SERVER_URL}/api/party/update_team_name`,
  revokeInvite: `${SERVER_URL}/api/party/invite/revoke`
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

type declineInviteRequestBody = {
  partyId: string;
};

type giveLeaderRequestBody = {
  newLeaderUserId: string;
};

type updatePartySizeRequestBody = {
  partySize: number;
};

type updatePartyTeamNameRequestBody = {
  teamName: string | null;
};

type revokeInviteRequestBody = {
  invitedUserId: string;
};

type Option = {
  onError: () => void;
};

export const useCreatePartyRequest = () => {
  const onError = (error: ServerError) => {
    popup.error(error.error);
  };

  const [createParty, { loading, success, error }] = usePost<void>(partyEndpoints.createParty, {
    onError
  });

  return {
    createParty: () => createParty(),
    loading,
    success,
    error
  };
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

export const useDeclineInviteRequest = () => {
  const onError = (error: ServerError) => {
    popup.error(error.error, { timer: 3000 });
  };

  const [declineInvite, { loading, success, error }] = usePost<void, declineInviteRequestBody>(
    partyEndpoints.declineInvite,
    { onError }
  );

  return {
    declineInvite: (body: declineInviteRequestBody) => declineInvite({ body }),
    loading,
    success,
    error
  };
};

export const useGiveLeaderRequest = () => {
  const onError = (error: ServerError) => {
    popup.error(error.error);
  };

  const [giveLeader, { loading, success, error }] = usePost<void, giveLeaderRequestBody>(
    partyEndpoints.giveLeader,
    { onError }
  );

  return {
    giveLeader: (body: giveLeaderRequestBody) => giveLeader({ body }),
    loading,
    success,
    error
  };
};

export const useUpdatePartySizeRequest = ({ onError }: Option) => {
  const [updatePartySize, { loading, success, error }] = usePost<void, updatePartySizeRequestBody>(
    partyEndpoints.updatePartySize,
    { onError }
  );

  return {
    updatePartySize: (body: updatePartySizeRequestBody) => updatePartySize({ body }),
    loading,
    success,
    error
  };
};

export const useUpdatePartyTeamNameRequest = ({ onError }: Option) => {
  const [updatePartyTeamName, { loading, success, error }] = usePost<
    void,
    updatePartyTeamNameRequestBody
  >(partyEndpoints.updatePartyTeamName, { onError });

  return {
    updatePartyTeamName: (body: updatePartyTeamNameRequestBody) => updatePartyTeamName({ body }),
    loading,
    success,
    error
  };
};

export const useRevokeInviteRequest = () => {
  const onError = (error: ServerError) => {
    popup.error(error.error);
  };

  const [revokeInvite, { loading, success, error }] = usePost<void, revokeInviteRequestBody>(
    partyEndpoints.revokeInvite,
    { onError }
  );

  return {
    revokeInvite: (body: revokeInviteRequestBody) => revokeInvite({ body }),
    loading,
    success,
    error
  };
};
