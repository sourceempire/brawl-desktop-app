import React, { createContext, useContext } from 'react';
import useMatchFeed from 'api/feeds/hooks/useMatchFeed';
import { MockGameMatch } from 'types/match/Match';

type MatchContextType = ReturnType<typeof useMatchFeed>;

const defaultContextValue: Partial<MatchContextType> = {
  isLoading: true,
  match: undefined,
  team1: undefined,
  team2: undefined
};

const MatchContext = createContext<MatchContextType>(defaultContextValue as MatchContextType);

type Props = {
  children: React.ReactNode;
  matchId: string;
};

export const MatchContextProvider = ({ children, matchId }: Props) => {
  const { match, team1, team2, isLoading } = useMatchFeed({ matchId });

  return (
    <MatchContext.Provider value={{ isLoading, match, team1, team2 }}>
      {children}
    </MatchContext.Provider>
  );
};

export function useMatchContext<T = MockGameMatch>() {
  const context = useContext(MatchContext);

  if (!context) {
    throw new Error('useMatchContext must be used within a MatchContextProvider');
  }

  return {
    ...context,
    match: context.match as T
  };
}
