import { useContext } from 'react';
import { PartyContext } from 'context/PartyContext';
import { Party } from 'types/Party';

/**
 * It is important to note that if isInParty is not true, party is undefined
 * @returns
 */
const usePartyFeed = () => {
  const { isInParty, party } = useContext(PartyContext);

  return { isInParty, party: party as Party };
};

export default usePartyFeed;
