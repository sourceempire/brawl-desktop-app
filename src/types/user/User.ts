/**
 * UUID
 */
export type UserId = string;

export type PublicUser = {
  id: string;
  userTag: string;
  imageUrl?: string;
};

export type User = PublicUser & {
  name: string;
  username: string;
};

export type Avatar = {
  createdAt: string;
  id: string;
  imageUrl: string;
};
