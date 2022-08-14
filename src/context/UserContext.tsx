import { createContext, useEffect, useState } from 'react';
import { UserRequests } from 'api/requests';
import { User } from 'api/requests/UserRequests';

export const UserContext = createContext<{ user: User }>({
  user: { id: '', username: '', userTag: '', name: '' }
});

type Props = {
  children: React.ReactNode;
};

// TODO -> might be good to create a feed to update user data when things updates
export const UserContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    UserRequests.getLoggedInUser()
      .then((res) => setUser(res.user))
      .catch(console.error);
  }, []);

  return user ? (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  ) : (
    // TODO -> Replace this with something better
    <div>Loading User</div>
  );
};
