import Fetcher from 'api/Fetcher';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const createParty = () => Fetcher.post(`${SERVER_URL}/api/party/create`);

export const leaveParty = () => Fetcher.post(`${SERVER_URL}/api/party/leave`);

export const giveLeader = (newLeaderUserId: string) =>
  Fetcher.post(`${SERVER_URL}/api/party/leader`, { newLeaderUserId });

export const revokeInvite = (invitedUserId: string) =>
  Fetcher.post(`${SERVER_URL}/api/party/invite/revoke`, { invitedUserId });

export const declineInvite = (partyId: string) =>
  Fetcher.post(`${SERVER_URL}/api/party/invite/decline`, { partyId });

export const updatePartyTeamName = (teamName: string | null) =>
  Fetcher.post(`${SERVER_URL}/api/party/update_team_name`, { teamName: teamName || null });

export const updatePartySize = (partySize: number) =>
  Fetcher.post(`${SERVER_URL}/api/party/update_party_size`, { partySize });
