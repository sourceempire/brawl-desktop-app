import { createContext } from 'react';
import { useUserFeed } from 'api/feeds';
import { PublicUser } from 'types/user/User';

export const UserContext = createContext<PublicUser>({ id: '', userTag: '' });

type Props = {
  userId: string;
  children: React.ReactNode;
};

// TODO -> might be good to create a feed to update user data when things updates
export const UserContextProvider = ({ children, userId }: Props) => {
  const { user, isLoading } = useUserFeed({ userId });

  if (isLoading) return <div>Loading user</div>;

  return user ? (
    <UserContext.Provider value={user}>{children}</UserContext.Provider>
  ) : (
    // TODO -> Replace this with something better
    <div>Loading User</div>
  );
};
