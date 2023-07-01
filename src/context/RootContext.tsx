import { useEffect, useState } from 'react';
import { UserRequests } from 'api/requests';
import { ImageCacheProvider } from 'brawl-image';
import { ImageCacheContext } from 'brawl-image/src/declarations/context/ImageCacheContext';
import ServerSubscriptionProvider from 'brawl-websocket';
import { MatchResultModalContextProvider } from './MatchResultModalContext';
import { PartyContextProvider } from './PartyContext';
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

  const serverUrl = process.env.REACT_APP_SERVER_URL;

  if (serverUrl === undefined) throw Error('no server url was provided');

  if (!loggedInUserId) return <div>Setting up root context</div>; // Do not let this slip in to production, skeletion loading?

  return (
    <ServerSubscriptionProvider serverUrl={serverUrl}>
      <UserContextProvider userId={loggedInUserId}>
        <PartyContextProvider>
          <ImageCacheProvider serverUrl={serverUrl}>
            <MatchResultModalContextProvider>{children}</MatchResultModalContextProvider>
          </ImageCacheProvider>
        </PartyContextProvider>
      </UserContextProvider>
    </ServerSubscriptionProvider>
  );
};

export default RootContextProvider;
