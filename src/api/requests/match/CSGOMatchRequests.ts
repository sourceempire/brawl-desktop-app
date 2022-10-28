import Fetcher from 'api/Fetcher';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const setReady = (matchId: string) =>
  Fetcher.post(`${SERVER_URL}/api/match/csgo/ready`, { matchId });

const banMap = (matchId: string, mapName: string) =>
  Fetcher.post(`${SERVER_URL}/api/csgo_veto/ban_map`, { matchId, mapName });

export default {
  setReady,
  banMap
};
