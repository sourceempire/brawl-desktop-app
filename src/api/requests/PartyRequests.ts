import Fetcher from 'api/Fetcher';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const createParty = () => Fetcher.post(`${SERVER_URL}/api/party/create`);

export const leaveParty = () => Fetcher.post(`${SERVER_URL}/api/party/leave`);

export const giveLeader = (newLeaderUserId: string) =>
  Fetcher.post(`${SERVER_URL}/api/party/leader`, { newLeaderUserId });

export const kickPlayer = (kickedUserId: string) =>
  Fetcher.post(`${SERVER_URL}/api/party/kick`, { kickedUserId });

export const invitePlayer = (invitedUserId: string) =>
  Fetcher.post(`${SERVER_URL}/api/party/invite`, { invitedUserId });

export const revokeInvite = (invitedUserId: string) =>
  Fetcher.post(`${SERVER_URL}/api/party/invite/revoke`, { invitedUserId });

export const acceptInvite = (partyId: string) =>
  Fetcher.post(`${SERVER_URL}/api/party/invite/accept`, { partyId });

export const declineInvite = (partyId: string) =>
  Fetcher.post(`${SERVER_URL}/api/party/invite/decline`, { partyId });

export const updatePartyTeamName = (teamName: string) =>
  Fetcher.post(`${SERVER_URL}/api/party/update_team_name`, { teamName });

export const updatePartySize = (partySize: number) =>
  Fetcher.post(`${SERVER_URL}/api/party/update_party_size`, { partySize });
