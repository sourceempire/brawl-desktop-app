import { useTournamentHubsFeed } from 'api/feeds';
import { createContext } from 'react';

type Context = {
  feed: ReturnType<typeof useTournamentHubsFeed>;
};

type Props = {
  children: React.ReactNode;
};

const TournamentHubListContext = createContext<Context>({
  feed: {
    isLoading: true
  }
});

function TournamentHubListContextProvider({ children }: Props) {
  const feed = useTournamentHubsFeed();

  return (
    <TournamentHubListContext.Provider value={{ feed }}>
      {children}
    </TournamentHubListContext.Provider>
  );
}
