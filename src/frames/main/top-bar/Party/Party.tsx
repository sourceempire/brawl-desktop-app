import { usePartyFeed } from 'api/feeds';
import { ActionButton } from 'common/ui';
import PartyInvite from '../PartyInvite/PartyInvite';
import PartyPlayer from '../PartyPlayer';
import PartySettings from '../PartySettings';
import { Wrapper } from './Party.styles';
import { useCreatePartyRequest } from 'api/requests/party';
import { Icons } from '@sourceempire/brawl-ui';

const Lobby = () => {
  const state = usePartyFeed();
  const { createParty } = useCreatePartyRequest();

  if (state.isInParty) {
    const { party } = state;

    return (
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
    );
  }

  return (
    <Wrapper>
      <ActionButton icon={<Icons.PartyPopper />} onClick={createParty} hint="Create party" />
    </Wrapper>
  );
};

export default Lobby;
