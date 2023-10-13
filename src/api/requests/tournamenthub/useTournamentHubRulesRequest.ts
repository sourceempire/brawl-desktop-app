import { useGetImmediate } from 'brawl-fetch';
import { Rules } from 'types/Rules';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const endpoint = `${SERVER_URL}/api/tournament/hub/rules`;

type Options = {
  tournamentHubId: string;
};

export const useTournamentHubRulesRequest = ({ tournamentHubId }: Options) => {
  const { loading, data } = useGetImmediate<Rules>(endpoint, {
    params: { tournamentHubId }
  });

  return {
    loading,
    rules: data
  };
};
