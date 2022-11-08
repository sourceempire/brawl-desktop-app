import { useEffect, useState } from 'react';
import { UserRequests } from 'api/requests';
import { MatchResultModalContextProvider } from './MatchResultModalContext';
import { PartyContextProvider } from './PartyContext';
import { ServerEventsProvider } from './ServerEventsContext';
import { UserContextProvider } from './UserContext';

type Props = {
  children: React.ReactNode;
};

const RootContextProvider = ({ children }: Props) => {
  const [loggedInUserId, setLoggedInUserId] = useState<string>();

  useEffect(() => {
    UserRequests.getLoggedInUser()
      .then((res) => setLoggedInUserId(res.user.id))
      .catch(console.error);
  }, []);

  if (!loggedInUserId) return <div>Setting up root context</div>; // Do not let this slip in to production, skeletion loading?

  return (
    <ServerEventsProvider>
      <UserContextProvider userId={loggedInUserId}>
        <PartyContextProvider>
          <MatchResultModalContextProvider>{children}</MatchResultModalContextProvider>
        </PartyContextProvider>
      </UserContextProvider>
    </ServerEventsProvider>
  );
};

export default RootContextProvider;
