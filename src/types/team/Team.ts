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
  teamName: string;
  players: UserId[];
  teamLeaderId: UserId;
  score?: number;
  playerStats?: Record<UserId, TeamPlayer>;
};
