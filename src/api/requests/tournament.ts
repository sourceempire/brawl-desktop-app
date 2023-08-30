import { ServerError, usePost } from 'brawl-fetch';
import popup from 'common/popup';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const tournamentEndpoints = {
  joinTournament: `${SERVER_URL}/api/tournament/join`
};

type JoinTournamentRequestBody = {
  tournamentHubId: string;
  playerIds: string[];
  teamName: string;
  imageId?: string;
  leaderId?: string;
};

export const useJoinTournamentRequest = (onRequestCloseTeamSettings: () => void) => {
  const onComplete = () => {
    popup.info(`Tournament joined`);
    onRequestCloseTeamSettings();
  };

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
