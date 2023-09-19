import { ErrorResponse, usePost } from 'brawl-fetch';
import popup from 'common/popup';
import { ErrorCode } from 'types/ErrorCode';

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
  const onError = (error: ErrorResponse) => {
    switch (error.errorCode) {
      case ErrorCode.InvalidTeamSize:
        return popup.error(`Invalid team size`);
      case ErrorCode.InsufficientFunds:
        return popup.error(`Insufficient funds for a player`);
      default:
        popup.error(error.message);
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
