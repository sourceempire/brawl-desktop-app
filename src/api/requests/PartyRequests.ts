import Fetcher from 'api/Fetcher';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const createParty = () => Fetcher.post(`${SERVER_URL}/api/party/create`);

export const leaveParty = () => Fetcher.post(`${SERVER_URL}/api/party/leave`);

export const updatePartyTeamName = (teamName: string) =>
  Fetcher.post(`${SERVER_URL}/api/party/update_team_name`, { teamName });

export const updatePartySize = (partySize: number) =>
  Fetcher.post(`${SERVER_URL}/api/party/update_party_size`, { partySize });
