/**
 * UUID
 */
export type UserId = string;

export type PublicUser = {
  id: string;
  userTag: string;
};

export type User = PublicUser & {
  name: string;
  username: string;
};
