import { useState } from 'react';
import { useTournamentHubFeed, useTournamentTeamFeed } from 'api/feeds';
import { isFeedWithTeam } from 'api/feeds/hooks/useTournamentTeamFeed';
import * as TournamentRequests from 'api/requests/TournamentRequests';
import { useDebounce, useLoggedInUser, usePrevious, useUpdateEffect } from 'common/hooks';
import popup from 'common/popup';
import { Modal } from 'common/ui';
import { InputSize } from 'common/ui/Input/Input.types';
import { Party } from 'types/Party';
import TeamSettingsPlayer from './TeamPlayer/TeamPlayer';
import {
  ButtonWithMessage,
  ButtonsWrapper,
  ErrorMessage,
  Label,
  ModalButton,
  PartySettingsInput,
  PlayersWrapper,
  Settings,
  Wrapper
} from './TeamSettingsModal.styles';

type Props = {
  party: Party;
  isOpen: boolean;
  hubId: string;
  onRequestClose: () => void;
};

const TEAM_NAME_MAX_LENGTH = 20;

const TeamSettingsModal = ({ party, isOpen, hubId, onRequestClose }: Props) => {
  const [teamName, setTeamName] = useState<string | null>(null);
  const user = useLoggedInUser();
  const tournamentTeamFeed = useTournamentTeamFeed(hubId, user.id);
  const { tournamentHub } = useTournamentHubFeed(hubId);

  const isLeader = party.leaderId === user.id;

  // this knows that tournamentTeam exists (can be used instead of checking if it exists with falsy conditionals). Use if you want or remove it
  if (isFeedWithTeam(tournamentTeamFeed)) {
    tournamentTeamFeed.tournamentTeam;
  }

  const debouncedTeamName = useDebounce(teamName, 250);
  const previousDebouncedTeamName = usePrevious(debouncedTeamName);

  const handleTeamNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTeamName(event.target.value);
  };

  const signup = () => {
    onRequestClose();
    TournamentRequests.joinTournament(hubId)
      .then(() => popup.info('Tournament joined'))
      .catch((error) => console.log('ERROR', error));
  };

  const leave = () => {
    onRequestClose();
    TournamentRequests.leaveTournament(hubId)
      .then(() => popup.info('Tournament leaved'))
      .catch((error) => popup.error(error.error));
  };

  useUpdateEffect(() => {
    if (previousDebouncedTeamName === debouncedTeamName) return;

    // CREATE REQUEST FOR TEAM NAME

    // TeamRequests.updateTeamName(debouncedTeamName).catch((error) => {
    //   popup.error(error.error);
    //   setTeamName(teamName);
    // });
  }, [debouncedTeamName]);

  return (
    <Modal
      title="Team Settings"
      isOpen={isOpen}
      onRequestClose={() => {
        onRequestClose();
      }}>
      <Wrapper>
        <Settings>
          <Label>Team Name</Label>
          <PartySettingsInput
            maxLength={TEAM_NAME_MAX_LENGTH}
            value={teamName ?? ''}
            onChange={handleTeamNameChange}
            placeholder="Enter a team name"
            size={InputSize.MEDIUM}
            disabled={!isLeader ? true : false}
          />
          {!teamName && isLeader && <ErrorMessage>You need a team name</ErrorMessage>}
          {party.players && (
            <>
              <Label>Team members</Label>
              <PlayersWrapper>
                {party.players.map((player) => (
                  <TeamSettingsPlayer key={`player_${player}`} userId={player} />
                ))}
              </PlayersWrapper>
            </>
          )}
          <ButtonsWrapper>
            <ModalButton
              key="cancel"
              onClick={() => {
                onRequestClose();
              }}>
              Cancel
            </ModalButton>
            {!tournamentHub.registrationClosed &&
              (!isFeedWithTeam(tournamentTeamFeed) ? (
                <ButtonWithMessage>
                  <ModalButton
                    disabled={!teamName || !isLeader ? true : false}
                    primary
                    onClick={() => signup()}>
                    Confirm
                  </ModalButton>
                  {!isLeader && <ErrorMessage>You need to be party leader</ErrorMessage>}
                </ButtonWithMessage>
              ) : (
                <ModalButton alert onClick={() => leave()}>
                  Leave tournament
                </ModalButton>
              ))}
          </ButtonsWrapper>
        </Settings>
      </Wrapper>
    </Modal>
  );
};

export default TeamSettingsModal;
