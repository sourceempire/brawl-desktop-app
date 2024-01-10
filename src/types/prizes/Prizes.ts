import { TeamId } from 'types/team/Team';

export type PrizesProps = {
  tournamentId: string;
};

export type TournamentPrize = {
  placement: number;
  percentage: number;
  prize: number;
  teamId: TeamId;
};

export type GroupedData = { [key: number]: TournamentPrize[] };
