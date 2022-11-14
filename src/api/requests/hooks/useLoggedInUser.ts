import { useContext } from 'react';
import { UserContext } from 'context/UserContext';

const useLoggedInUser = () => {
  const user = useContext(UserContext);
  return user;
};

export default useLoggedInUser;
