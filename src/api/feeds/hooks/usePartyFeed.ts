import { useContext } from 'react';
import { PartyContext } from 'context/PartyContext';

const usePartyFeed = () => {
  const feed = useContext(PartyContext);

  if (feed.isInParty) {
    return { isInParty: feed.isInParty, party: feed.party };
  }

  return { isInParty: feed.isInParty };
};

export default usePartyFeed;
