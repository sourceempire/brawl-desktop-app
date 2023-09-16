import Fetcher from 'api/Fetcher';
import { Rules } from 'types/Rules';
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const getTournamentHubRules = (params: { tournamentHubId?: string }) =>
  Fetcher.get<{ content: Rules }>(`${SERVER_URL}/api/tournament/hub/rules`, params);
