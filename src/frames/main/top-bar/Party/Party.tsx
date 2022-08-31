import { usePartyFeed } from 'api/feeds';
import { createParty } from 'api/requests/PartyRequests';
import { ActionButton } from 'common/components';
import popup from 'common/popup';
import PartyPlayer from '../PartyPlayer';
import { InvitePlayerAction, Wrapper } from './Party.styles';
import Icons from 'assets/icons/Icons';

const handleCreateParty = () => {
  createParty().catch((error) => popup.error(error.error));
};

const Lobby = () => {
  const { isInParty, party } = usePartyFeed();
  return (
    <Wrapper>
      {isInParty ? (
        <>
          {party.players.map((userId) => (
            <PartyPlayer key={userId} userId={userId} />
          ))}
          {Array(party.partySize)
            .fill('')
            .slice(party.players.length, party.partySize)
            .map((_, index) => (
              <InvitePlayerAction
                key={index}
                icon={<Icons.Plus />}
                onClick={() => console.log('ADD FRIEND')}
                hint="Invite Player"
              />
            ))}
          <ActionButton
            icon={<Icons.Cog />}
            onClick={() => console.log('ASD')}
            hint="Party settings"
          />
        </>
      ) : (
        <ActionButton icon={<Icons.Party />} onClick={handleCreateParty} hint="Create party" />
      )}
    </Wrapper>
  );
};

export default Lobby;
