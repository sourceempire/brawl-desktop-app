import Fetcher from 'api/Fetcher';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const createParty = () => Fetcher.post(`${SERVER_URL}/api/party/create`);
