import { UserId } from 'types/user/User';

/**
 * UUID
 */
export type TeamId = string;

export type Team = {
  id: TeamId;
  teamName: string;
  players: UserId[];
  teamLeaderId: UserId;
};
