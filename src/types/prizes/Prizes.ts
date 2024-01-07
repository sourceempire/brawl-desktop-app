import { TeamId } from 'types/team/Team';

export type PrizesProps = {
  tournamentId: string;
};

export type PrizeTeamProps = {
  teamId: TeamId;
};

export type Prize = {
  placement: number;
  percentage: number;
  prize: number;
  teamId: TeamId;
};

export type GroupedData = { [key: number]: Prize[] };
