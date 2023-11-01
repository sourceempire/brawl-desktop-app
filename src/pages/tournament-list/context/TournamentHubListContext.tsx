import { useTournamentHubsFeed } from 'api/feeds';
import { createContext, useContext, useEffect, useState } from 'react';

type Context = {
  feed: ReturnType<typeof useTournamentHubsFeed>;
  actions: {
    search: (searchString: string) => void;
    setStartTimeFrom: (date: Date | null) => void;
    setStartTimeTo: (date: Date | null) => void;
  };
  state: {
    searchString: string;
    startTimeFrom: Date | null;
    startTimeTo: Date | null;
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
    search: () => undefined,
    setStartTimeFrom: () => undefined,
    setStartTimeTo: () => undefined
  },
  state: {
    searchString: '',
    startTimeFrom: new Date(),
    startTimeTo: null
  }
});

const date = new Date();
date.setFullYear(new Date().getFullYear() + 1);

export function TournamentHubListContextProvider({ children }: Props) {
  const [searchString, setSearchString] = useState<string>('');
  const [startTimeFrom, setStartTimeFrom] = useState<Date | null>(null);
  const [startTimeTo, setStartTimeTo] = useState<Date | null>(null);

  useEffect(() => {
    console.log('START TIME FroM', startTimeFrom);
  }, [startTimeFrom]);

  const handleStartTimeFrom = (date: Date | null) => {
    console.log('handle start time from', date);
    setStartTimeFrom(date);
  };

  const feed = useTournamentHubsFeed({
    searchString,
    startTimeFrom,
    startTimeTo
  });

  return (
    <TournamentHubListContext.Provider
      value={{
        feed,
        actions: { search: setSearchString, setStartTimeFrom: handleStartTimeFrom, setStartTimeTo },
        state: { searchString, startTimeFrom, startTimeTo }
      }}>
      {children}
    </TournamentHubListContext.Provider>
  );
}

export function useTournamentHubListContext() {
  return useContext(TournamentHubListContext);
}
