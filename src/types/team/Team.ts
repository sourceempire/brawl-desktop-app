import { UserId } from 'types/user/User';

/**
 * UUID
 */
export type TeamId = string;

export type TeamPlayer = {
  kills: number;
  userId: UserId;
};

export type Team = {
  id: TeamId;
  name: string;
  players: TeamPlayer[];
  teamLeaderId: UserId;
  score: number;
};
