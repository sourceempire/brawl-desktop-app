import { createContext } from 'react';
import { useFeed } from 'api/feeds';
import useLoggedInUser from 'api/requests/hooks/useLoggedInUser';
import { PartyState } from 'types/Party';

export const PartyContext = createContext<PartyState>({
  isInParty: false
});

type Props = {
  children: React.ReactNode;
};

export const PartyContextProvider = ({ children }: Props) => {
  const { user } = useLoggedInUser();
  const { currentState } = useFeed<PartyState>(`party.${user.id}`);
  const { party, isInParty } = currentState;
  return <PartyContext.Provider value={{ isInParty, party }}>{children}</PartyContext.Provider>;
};
