import { useTournamentHubsFeed } from 'api/feeds';
import { createContext, useContext, useState } from 'react';

type Context = {
  feed: ReturnType<typeof useTournamentHubsFeed>;
  actions: {
    search: (searchString: string) => void;
  };
};

type Props = {
  children: React.ReactNode;
};

const TournamentHubListContext = createContext<Context>({
  feed: {
    loading: true
  },
  actions: {
    search: () => undefined
  }
});

export function TournamentHubListContextProvider({ children }: Props) {
  const [searchString, setSearchString] = useState<string>();

  const feed = useTournamentHubsFeed({ searchString });

  return (
    <TournamentHubListContext.Provider value={{ feed, actions: { search: setSearchString } }}>
      {children}
    </TournamentHubListContext.Provider>
  );
}

export function useTournamentHubListContext() {
  return useContext(TournamentHubListContext);
}
