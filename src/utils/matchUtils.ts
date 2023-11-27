import { MatchOutcome } from 'pages/tournament/components/BracketMatch/BracketMatch.types';
import { Match } from 'types/match/Match';

type MatchOutcomeProps = {
  teamIdOfLoggedInUser?: string;
  match: Match;
};

export const matchSettingsModeShortForm = (TournamentTeamSize: number) => {
  if (TournamentTeamSize === 1) {
    return `1v1`;
  }

  if (TournamentTeamSize === 2) {
    return '2v2';
  }

  if (TournamentTeamSize === 3) {
    return '3v3';
  }

  if (TournamentTeamSize === 4) {
    return '4v4';
  }

  if (TournamentTeamSize === 5) {
    return '5v5';
  }

  return;
};

export const getMatchOutcome = ({ teamIdOfLoggedInUser, match }: MatchOutcomeProps) => {
  if (match.winnerTeamId === teamIdOfLoggedInUser) {
    return MatchOutcome.Win;
  } else if (match.winnerTeamId && match.winnerTeamId !== teamIdOfLoggedInUser) {
    return MatchOutcome.Loss;
  } else {
    return MatchOutcome.NotDecided;
  }
};
