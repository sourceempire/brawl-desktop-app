import Fetcher from 'api/Fetcher';
import { Rules } from 'types/rules/Rules';
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const getTournamentHubRules = (params: { tournamentHubId?: string }) =>
  Fetcher.get<{ content: Rules }>(`${SERVER_URL}/api/tournament/hub/rules`, params);
