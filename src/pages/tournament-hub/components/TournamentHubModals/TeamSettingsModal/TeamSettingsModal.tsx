import { useCallback, useState } from 'react';
import { useTournamentTeamFeed } from 'api/feeds';
import { isFeedWithTeam } from 'api/feeds/hooks/useTournamentTeamFeed';
import { useLoggedInUser } from 'common/hooks';
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
import { useJoinTournamentRequest } from 'api/requests/tournament';

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
  const userInExistingTeam = isFeedWithTeam(tournamentTeamFeed);

  const closeTeamSettings = () => {
    setErrorMessage(null);
    setTeamName(null);
    onRequestClose();
  };

  const onJoinTournamentComplete = useCallback(() => {
    closeTeamSettings();
  }, []);

  const { joinTournament } = useJoinTournamentRequest({ onComplete: onJoinTournamentComplete });

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
          {!userInExistingTeam && (
            <ButtonsWrapper>
              <ModalButton key="cancel" onClick={closeTeamSettings}>
                Cancel
              </ModalButton>
              <ButtonWithMessage>
                <ModalButton primary onClick={signup}>
                  Confirm
                </ModalButton>
              </ButtonWithMessage>
            </ButtonsWrapper>
          )}
        </Settings>
      </Wrapper>
    </Modal>
  );
};

export default TeamSettingsModal;
