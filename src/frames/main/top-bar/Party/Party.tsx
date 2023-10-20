import { usePartyFeed } from 'api/feeds';
import { ActionButton } from 'common/ui';
import PartyInvite from '../PartyInvite/PartyInvite';
import PartyPlayer from '../PartyPlayer';
import PartySettings from '../PartySettings';
import { Wrapper } from './Party.styles';
import { useCreatePartyRequest } from 'api/requests/party';
import { Icons } from 'brawl-ui';

const Lobby = () => {
  const { isInParty, party } = usePartyFeed();
  const { createParty } = useCreatePartyRequest();

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
      <ActionButton icon={<Icons.PartyPopper />} onClick={createParty} hint="Create party" />
    </Wrapper>
  );
};

export default Lobby;
