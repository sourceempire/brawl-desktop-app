import { useGetImmediate } from '@sourceempire/brawl-fetch';
import { Rules } from 'types/Rules';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const endpoint = `${SERVER_URL}/api/tournament/hub/rules`;

type Options = {
  tournamentHubId: string;
};

export const useTournamentHubRulesRequest = ({ tournamentHubId }: Options) => {
  const { state } = useGetImmediate<Rules, { tournamentHubId: string }>(endpoint, {
    fetchOptions: { params: { tournamentHubId } }
  });

  return state;
};
