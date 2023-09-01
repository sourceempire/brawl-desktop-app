import { ServerError, usePost } from 'brawl-fetch';
import popup from 'common/popup';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const tournamentEndpoints = {
  joinTournament: `${SERVER_URL}/api/tournament/join`,
  leaveTournament: `${SERVER_URL}/api/tournament/leave`
};

type JoinTournamentRequestBody = {
  tournamentHubId: string;
  playerIds: string[];
  teamName: string;
  imageId?: string;
  leaderId?: string;
};

type LeaveTournamentRequestBody = {
  tournamentHubId: string;
};

type Options = {
  onComplete: () => void;
};

export const useJoinTournamentRequest = ({ onComplete }: Options) => {
  const onError = (error: ServerError) => {
    switch (error.error) {
      case 'invalidTeamSize':
        return popup.error(`Invalid team size`);
      case 'insufficientFunds':
        return popup.error(`Insufficient funds for a player`);
      default:
        popup.error('Something went wrong');
    }
  };

  const [joinTournament, { loading, success, error }] = usePost<void, JoinTournamentRequestBody>(
    tournamentEndpoints.joinTournament,
    { onError, onComplete }
  );

  return {
    joinTournament: (body: JoinTournamentRequestBody) => joinTournament({ body }),
    loading,
    success,
    error
  };
};

export const useLeaveTournamentRequest = ({ onComplete }: Options) => {
  const onError = (error: ServerError) => {
    popup.error(error.error);
  };

  const [leaveTournament, { loading, success, error }] = usePost<void, LeaveTournamentRequestBody>(
    tournamentEndpoints.leaveTournament,
    { onError, onComplete }
  );

  return {
    leaveTournament: (body: LeaveTournamentRequestBody) => leaveTournament({ body }),
    loading,
    success,
    error
  };
};
