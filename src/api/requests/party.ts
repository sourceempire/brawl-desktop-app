import { ServerError, usePost } from 'brawl-fetch';
import popup from 'common/popup';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const partyEndpoints = {
  createParty: `${SERVER_URL}/api/party/create`,
  leaveParty: `${SERVER_URL}/api/party/leave`,
  invitePlayer: `${SERVER_URL}/api/party/invite`,
  kickPlayer: `${SERVER_URL}/api/party/kick`,
  acceptInvite: `${SERVER_URL}/api/party/invite/accept`,
  declineInvite: `${SERVER_URL}/api/party/invite/decline`,
  giveLeader: `${SERVER_URL}/api/party/leader`,
  updatePartySize: `${SERVER_URL}/api/party/update_party_size`,
  updatePartyTeamName: `${SERVER_URL}/api/party/update_team_name`,
  revokeInvite: `${SERVER_URL}/api/party/invite/revoke`
};

type InvitePlayerRequestBody = {
  invitedUserId: string;
};

type KickPlayerRequestBody = {
  kickedUserId: string;
};

type AcceptInviteRequestBody = {
  partyId: string;
};

type DeclineInviteRequestBody = {
  partyId: string;
};

type GiveLeaderRequestBody = {
  newLeaderUserId: string;
};

type UpdatePartySizeRequestBody = {
  partySize: number;
};

type UpdatePartyTeamNameRequestBody = {
  teamName: string | null;
};

type RevokeInviteRequestBody = {
  invitedUserId: string;
};

type Option = {
  onError: (error: ServerError) => void;
};

export const useCreatePartyRequest = () => {
  const onError = (error: ServerError) => {
    popup.error(error.error);
  };

  const [createParty, { loading, success, error }] = usePost<void>(partyEndpoints.createParty, {
    onError
  });

  return {
    createParty,
    loading,
    success,
    error
  };
};

export const useLeavePartyRequest = () => {
  const onError = (error: ServerError) => {
    popup.error(error.error);
  };

  const [leaveParty, { loading, success, error }] = usePost<void>(partyEndpoints.leaveParty, {
    onError
  });

  return {
    leaveParty,
    loading,
    success,
    error
  };
};

export const useInvitePlayerRequest = () => {
  const onError = (error: ServerError) => {
    popup.error(error.error);
  };

  const [invitePlayer, { loading, success, error }] = usePost<void, InvitePlayerRequestBody>(
    partyEndpoints.invitePlayer,
    { onError }
  );

  return {
    invitePlayer: (body: InvitePlayerRequestBody) => invitePlayer({ body }),
    loading,
    success,
    error
  };
};

export const useKickPlayerRequest = () => {
  const onError = (error: ServerError) => {
    popup.error(error.error);
  };

  const [kickPlayer, { loading, success, error }] = usePost<void, KickPlayerRequestBody>(
    partyEndpoints.kickPlayer,
    { onError }
  );

  return {
    kickPlayer: (body: KickPlayerRequestBody) => kickPlayer({ body }),
    loading,
    success,
    error
  };
};

export const useAcceptInviteRequest = () => {
  const onError = (error: ServerError) => {
    popup.warning(error.error, { timer: 3000 });
  };

  const [acceptInvite, { loading, success, error }] = usePost<void, AcceptInviteRequestBody>(
    partyEndpoints.acceptInvite,
    { onError }
  );

  return {
    acceptInvite: (body: AcceptInviteRequestBody) => acceptInvite({ body }),
    loading,
    success,
    error
  };
};

export const useDeclineInviteRequest = () => {
  const onError = (error: ServerError) => {
    popup.error(error.error, { timer: 3000 });
  };

  const [declineInvite, { loading, success, error }] = usePost<void, DeclineInviteRequestBody>(
    partyEndpoints.declineInvite,
    { onError }
  );

  return {
    declineInvite: (body: DeclineInviteRequestBody) => declineInvite({ body }),
    loading,
    success,
    error
  };
};

export const useGiveLeaderRequest = () => {
  const onError = (error: ServerError) => {
    popup.error(error.error);
  };

  const [giveLeader, { loading, success, error }] = usePost<void, GiveLeaderRequestBody>(
    partyEndpoints.giveLeader,
    { onError }
  );

  return {
    giveLeader: (body: GiveLeaderRequestBody) => giveLeader({ body }),
    loading,
    success,
    error
  };
};

export const useUpdatePartySizeRequest = ({ onError }: Option) => {
  const [updatePartySize, { loading, success, error }] = usePost<void, UpdatePartySizeRequestBody>(
    partyEndpoints.updatePartySize,
    { onError }
  );

  return {
    updatePartySize: (body: UpdatePartySizeRequestBody) => updatePartySize({ body }),
    loading,
    success,
    error
  };
};

export const useUpdatePartyTeamNameRequest = ({ onError }: Option) => {
  const [updatePartyTeamName, { loading, success, error }] = usePost<
    void,
    UpdatePartyTeamNameRequestBody
  >(partyEndpoints.updatePartyTeamName, { onError });

  return {
    updatePartyTeamName: (body: UpdatePartyTeamNameRequestBody) => updatePartyTeamName({ body }),
    loading,
    success,
    error
  };
};

export const useRevokeInviteRequest = () => {
  const onError = (error: ServerError) => {
    popup.error(error.error);
  };

  const [revokeInvite, { loading, success, error }] = usePost<void, RevokeInviteRequestBody>(
    partyEndpoints.revokeInvite,
    { onError }
  );

  return {
    revokeInvite: (body: RevokeInviteRequestBody) => revokeInvite({ body }),
    loading,
    success,
    error
  };
};
