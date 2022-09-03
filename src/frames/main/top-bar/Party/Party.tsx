import { usePartyFeed } from 'api/feeds';
import { createParty } from 'api/requests/PartyRequests';
import { ActionButton } from 'common/components';
import popup from 'common/popup';
import PartyPlayer from '../PartyPlayer';
import PartySettings from '../PartySettings';
import { InvitePlayerAction, Wrapper } from './Party.styles';
import Icons from 'assets/icons/Icons';

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
          <InvitePlayerAction
            key={index}
            icon={<Icons.Plus />}
            onClick={() => console.log('ADD FRIEND')}
            hint="Invite Player"
          />
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
