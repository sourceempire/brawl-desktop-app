import { createContext } from 'react';
import { useFeed } from 'brawl-websocket';
import { useLoggedInUser } from 'hooks';
import { PartyState } from 'types/Party';

export const PartyContext = createContext<PartyState>({
  isInParty: false
});

type Props = {
  children: React.ReactNode;
};

export const PartyContextProvider = ({ children }: Props) => {
  const user = useLoggedInUser();
  const { data } = useFeed<PartyState>(`party.${user.id}`);
  const { party, isInParty } = data;
  return <PartyContext.Provider value={{ isInParty, party }}>{children}</PartyContext.Provider>;
};
