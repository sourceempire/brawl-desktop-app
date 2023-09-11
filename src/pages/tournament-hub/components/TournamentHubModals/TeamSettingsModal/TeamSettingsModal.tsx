import { useCallback, useState } from 'react';
import { useTournamentHubFeed, useTournamentTeamFeed } from 'api/feeds';
import { isFeedWithTeam } from 'api/feeds/hooks/useTournamentTeamFeed';
import { useLoggedInUser } from 'common/hooks';
import popup from 'common/popup';
import { Modal } from 'common/ui';
import { InputSize } from 'common/ui/Input/Input.types';
import TeamPlayer from './TeamPlayer/TeamPlayer';
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
import { useJoinTournamentRequest, useLeaveTournamentRequest } from 'api/requests/tournament';

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

  const closeTeamSettings = () => {
    setErrorMessage(null);
    setTeamName(null);
    onRequestClose();
  };

  const onJoinTournamentComplete = useCallback(() => {
    closeTeamSettings();
    popup.info(`Tournament joined`);
  }, []);

  const onLeaveTournamentComplete = useCallback(() => {
    closeTeamSettings();
    popup.info(`Tournament left`);
  }, []);

  const { joinTournament } = useJoinTournamentRequest({ onComplete: onJoinTournamentComplete });
  const { leaveTournament } = useLeaveTournamentRequest({ onComplete: onLeaveTournamentComplete });

  const handleTeamNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTeamName(event.target.value);
    setErrorMessage(null);
  };

  const signup = () => {
    if (!teamName) {
      setErrorMessage('You need a team name');
    } else {
      joinTournament({
        body: {
          tournamentHubId: hubId,
          teamName: teamName,
          playerIds: playerIds
        }
      });
    }
  };

  const leave = () => {
    leaveTournament({
      body: {
        tournamentHubId: hubId
      }
    });
  };

  return (
    <Modal title="Team Settings" isOpen={isOpen} onRequestClose={closeTeamSettings}>
      <Wrapper>
        <Settings>
          <Label>Team Name</Label>
          <PartySettingsInput
            maxLength={TEAM_NAME_MAX_LENGTH}
            value={userInExistingTeam ? tournamentTeamFeed.tournamentTeam.teamName : teamName ?? ''}
            onChange={handleTeamNameChange}
            placeholder="Enter a team name"
            size={InputSize.MEDIUM}
          />
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          {playerIds && (
            <>
              <Label>Team members</Label>
              <PlayersWrapper>
                {playerIds.map((player) => (
                  <TeamPlayer key={`player_${player}`} userId={player} />
                ))}
              </PlayersWrapper>
            </>
          )}
          <ButtonsWrapper>
            <ModalButton key="cancel" onClick={closeTeamSettings}>
              Cancel
            </ModalButton>
            {!tournamentHub.registrationClosed &&
              (!userInExistingTeam ? (
                <ButtonWithMessage>
                  <ModalButton primary onClick={signup}>
                    Confirm
                  </ModalButton>
                </ButtonWithMessage>
              ) : (
                <ModalButton alert onClick={leave}>
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
