import { useTournamentHubsFeed } from 'api/feeds';
import { createContext } from 'react';
import { TournamentHub } from 'types/tournaments/TournamentInfo';

type Context = {
  tournamentHubs: TournamentHub[] | null;
};

type Props = {
  children: React.ReactNode;
};

const TournamentHubListContext = createContext<Context>({
  tournamentHubs: null
});

function TournamentHubListContextProvider({ children }: Props) {
  const { tournamentHubs, loading } = useTournamentHubsFeed();

  return <TournamentHubListContext.Provider>{children}</TournamentHubListContext.Provider>;
}
