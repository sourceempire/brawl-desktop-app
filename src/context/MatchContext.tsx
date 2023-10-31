import React, { createContext, useContext } from 'react';
import useMatchFeed from 'api/feeds/hooks/useMatchFeed';
import { Match } from 'types/match/Match';
import { Team } from 'types/team/Team';

type MatchContextType = {
  match: Match;
  team1?: Team;
  team2?: Team;
};

const MatchContext = createContext<MatchContextType>({
  match: {} as Match
});

type Props = {
  children: React.ReactNode;
  matchId: string;
};

export const MatchContextProvider = ({ children, matchId }: Props) => {
  const { match, team1, team2, isLoading } = useMatchFeed({ matchId });

  if (isLoading) return null;

  return <MatchContext.Provider value={{ match, team1, team2 }}>{children}</MatchContext.Provider>;
};

export function useMatchContext<T extends Match>() {
  const context = useContext(MatchContext);

  return {
    ...context,
    match: context.match as T
  };
}
