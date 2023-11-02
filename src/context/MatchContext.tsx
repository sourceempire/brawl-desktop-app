import React, { createContext, useContext } from 'react';
import useMatchFeed from 'api/feeds/hooks/useMatchFeed';
import { Match } from 'types/match/Match';
import { Team } from 'types/team/Team';

type MatchContextType = {
  isLoading: boolean;
  match: Match;
  team1?: Team;
  team2?: Team;
};

const MatchContext = createContext<MatchContextType>({
  isLoading: true,
  match: {} as Match
});

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

export function useMatchContext<T = Match>() {
  const context = useContext(MatchContext);

  return {
    ...context,
    match: context.match as T
  };
}
