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

export const useJoinTournamentRequest = () => {
  const onError = (error: ServerError) => {
    switch (error.error) {
      case 'invalidTeamSize':
        return popup.error(`Invalid team size`);
      default:
        popup.error('Something went wrong');
    }
  };

  const [joinTournament, { loading, success, error }] = usePost<void, JoinTournamentRequestBody>(
    tournamentEndpoints.joinTournament,
    { onError }
  );

  return {
    joinTournament: (body: JoinTournamentRequestBody) => joinTournament({ body }),
    loading,
    success,
    error
  };
};
