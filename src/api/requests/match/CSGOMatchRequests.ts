import Fetcher from 'api/Fetcher';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const setReady = (matchId: string) =>
  Fetcher.post(`${SERVER_URL}/api/match/csgo/ready`, { matchId });

export default {
  setReady
};
