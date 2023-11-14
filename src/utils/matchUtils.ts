import { MatchOutcome } from 'pages/tournament/components/BracketMatch/BracketMatch.types';
import { Match } from 'types/match/Match';

type MatchOutcomeProps = {
  teamIdOfLoggedInUser?: string;
  match: Match;
};

export const matchSettingsModeShortForm = (TournamentTeamSize: number) => {
  if (TournamentTeamSize === 1) {
    return `1v1`;
  } else if (TournamentTeamSize === 2) {
    return '2v2';
  } else if (TournamentTeamSize === 3) {
    return '3v3';
  } else if (TournamentTeamSize === 4) {
    return '4v4';
  } else if (TournamentTeamSize === 5) {
    return '5v5';
  } else {
    return '';
  }
};

export const matchSettingsSeriesTypeLongForm = (TournamentTeamSize: number) => {
  if (TournamentTeamSize === 1) {
    return `One vs One`;
  } else if (TournamentTeamSize === 2) {
    return 'Wingman';
  } else if (TournamentTeamSize >= 3) {
    return 'Competitive';
  } else {
    return '';
  }
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
