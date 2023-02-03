import { useContext } from 'react';
import { UserContext } from 'context/UserContext';

export const useLoggedInUser = () => {
  const user = useContext(UserContext);
  return user;
};
