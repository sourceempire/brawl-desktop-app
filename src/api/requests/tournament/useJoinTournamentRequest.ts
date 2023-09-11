import { ServerError, usePost } from 'brawl-fetch';
import popup from 'common/popup';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const joinTournamentEndpoint = `${SERVER_URL}/api/tournament/join`;

type Body = {
  tournamentHubId: string;
  playerIds: string[];
  teamName: string;
  imageId?: string;
  leaderId?: string;
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

  const [joinTournament, ...response] = usePost<void, Body>(joinTournamentEndpoint, {
    onError,
    onComplete
  });

  return {
    joinTournament,
    ...response
  };
};
