import { ServerError, usePost } from 'brawl-fetch';
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
  const onError = (error: ServerError) => {
    popup.error(error.error);
  };

  const [leaveTournament, ...response] = usePost<void, Body>(leaveTournamentEndpoint, {
    onError,
    onComplete
  });

  return {
    leaveTournament,
    ...response
  };
};
