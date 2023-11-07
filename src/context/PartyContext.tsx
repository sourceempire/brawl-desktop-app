import { createContext } from 'react';
import { useFeed } from '@sourceempire/brawl-websocket';
import { useLoggedInUser } from 'common/hooks';
import { PartyState } from 'types/Party';

export const PartyContext = createContext<PartyState>({
  isInParty: false
});

type Props = {
  children: React.ReactNode;
};

export const PartyContextProvider = ({ children }: Props) => {
  const user = useLoggedInUser();
  const state = useFeed<PartyState>(`party.${user.id}`);

  let value: PartyState;

  if (state.loading) {
    value = { isInParty: false };
  } else if (state.data.isInParty) {
    value = { isInParty: state.data.isInParty, party: state.data.party };
  } else {
    value = { isInParty: false };
  }

  return <PartyContext.Provider value={value}>{children}</PartyContext.Provider>;
};
