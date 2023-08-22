import { useState } from 'react';
import { useTournamentHubFeed, useTournamentTeamFeed } from 'api/feeds';
import { isFeedWithTeam } from 'api/feeds/hooks/useTournamentTeamFeed';
import { useJoinTournamentRequest } from 'api/requests/tournament';
import * as TournamentRequests from 'api/requests/TournamentRequests';
import { useLoggedInUser } from 'common/hooks';
import popup from 'common/popup';
import { Modal } from 'common/ui';
import { InputSize } from 'common/ui/Input/Input.types';
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
  playerIds: string[];
  isOpen: boolean;
  hubId: string;
  onRequestClose: () => void;
};

const TEAM_NAME_MAX_LENGTH = 20;

const TeamSettingsModal = ({ playerIds, isOpen, hubId, onRequestClose }: Props) => {
  const [teamName, setTeamName] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const user = useLoggedInUser();
  const tournamentTeamFeed = useTournamentTeamFeed(hubId, user.id);
  const { tournamentHub } = useTournamentHubFeed(hubId);
  const userInExistingTeam = isFeedWithTeam(tournamentTeamFeed);
  const { joinTournament, success, error } = useJoinTournamentRequest();

  const onRequestCloseTeamSettings = () => {
    setErrorMessage(null);
    setTeamName(null);
    onRequestClose();
  };

  const handleTeamNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTeamName(event.target.value);
    setErrorMessage(null);
  };

  const signup = () => {
    if (!teamName) {
      setErrorMessage('You need a team name');
    } else {
      joinTournament({
        tournamentHubId: hubId,
        teamName: teamName,
        playerIds: playerIds
      });
      if (success) {
        popup.info('Tournament joined');
        onRequestCloseTeamSettings();
      } else if (error) {
        console.log('ERROR', error);
      }
    }
  };

  const leave = () => {
    onRequestCloseTeamSettings();
    TournamentRequests.leaveTournament(hubId)
      .then(() => popup.info('Tournament leaved'))
      .catch((error) => popup.error(error.error));
  };

  return (
    <Modal
      title="Team Settings"
      isOpen={isOpen}
      onRequestClose={() => {
        onRequestCloseTeamSettings();
      }}>
      <Wrapper>
        <Settings>
          <Label>Team Name</Label>
          <PartySettingsInput
            maxLength={TEAM_NAME_MAX_LENGTH}
            value={userInExistingTeam ? tournamentTeamFeed.tournamentTeam.teamName : teamName ?? ''}
            onChange={handleTeamNameChange}
            placeholder="Enter a team name"
            size={InputSize.MEDIUM}
            disabled={userInExistingTeam ? true : false}
          />
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          {playerIds && (
            <>
              <Label>Team members</Label>
              <PlayersWrapper>
                {playerIds.map((player) => (
                  <TeamSettingsPlayer key={`player_${player}`} userId={player} />
                ))}
              </PlayersWrapper>
            </>
          )}
          <ButtonsWrapper>
            <ModalButton
              key="cancel"
              onClick={() => {
                onRequestCloseTeamSettings();
              }}>
              Cancel
            </ModalButton>
            {!tournamentHub.registrationClosed &&
              (!userInExistingTeam ? (
                <ButtonWithMessage>
                  <ModalButton primary onClick={() => signup()}>
                    Confirm
                  </ModalButton>
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
