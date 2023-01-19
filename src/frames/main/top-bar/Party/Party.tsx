import { usePartyFeed } from 'api/feeds';
import { createParty } from 'api/requests/PartyRequests';
import { ActionButton } from 'common/components';
import Icons from 'common/components/Icon/Icons';
import popup from 'common/popup';
import PartyInvite from '../PartyInvite/PartyInvite';
import PartyPlayer from '../PartyPlayer';
import PartySettings from '../PartySettings';
import { Wrapper } from './Party.styles';

const handleCreateParty = () => {
  createParty().catch((error) => popup.error(error.error));
};

const Lobby = () => {
  const { isInParty, party } = usePartyFeed();

  return isInParty ? (
    <Wrapper>
      {party.players.map((userId) => (
        <PartyPlayer key={userId} userId={userId} />
      ))}

      {Array(party.partySize - party.players.length)
        .fill('')
        .map((_, index) => (
          <PartyInvite key={index} />
        ))}

      <PartySettings />
    </Wrapper>
  ) : (
    <Wrapper>
      <ActionButton icon={<Icons.Party />} onClick={handleCreateParty} hint="Create party" />
    </Wrapper>
  );
};

export default Lobby;
