import { ErrorResponse, usePost } from '@sourceempire/brawl-fetch';
import popup from 'common/popup';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const leaveTournamentEndpoint = `${SERVER_URL}/api/tournament/leave`;

type Body = {
  tournamentHubId: string;
};

type Options = {
  onComplete: () => void;
};

export const useLeaveTournamentRequest = ({ onComplete }: Options) => {
  const onError = (error: ErrorResponse) => {
    popup.error(error.message);
  };

  const [leaveTournament] = usePost<void, Body>(leaveTournamentEndpoint, {
    onError,
    onComplete
  });

  return {
    leaveTournament
  };
};
