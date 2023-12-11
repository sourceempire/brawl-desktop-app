import { useCallback } from 'react';
import { Button } from 'common/ui';
import { ButtonsWrapper, LeftButtons, RightButtons } from './TournamentHubButtons.styles';
import { useTournamentTeamFeed, useTournamentHubFeed } from 'api/feeds';
import { useLoggedInUser } from 'common/hooks';
import { useParams } from 'react-router-dom';
import { PromptButton } from 'common/ui/PromptButton';
import { useLeaveTournamentRequest } from 'api/requests/tournament';

type Props = {
  handleOpenModal: (name: string) => void;
  handleCloseModal: () => void;
  openTeamSettings: () => void;
};

const TournamentHubButtons = ({ handleOpenModal, openTeamSettings, handleCloseModal }: Props) => {
  const { hubId } = useParams() as { hubId: string };
  const user = useLoggedInUser();
  const { isInTournamentTeam } = useTournamentTeamFeed({ tournamentHubId: hubId, userId: user.id });
  const { tournamentHub, isLoading } = useTournamentHubFeed({ tournamentHubId: hubId });

  const onLeaveTournamentComplete = useCallback(() => {
    handleCloseModal();
  }, []);

  const { leaveTournament } = useLeaveTournamentRequest({ onComplete: onLeaveTournamentComplete });

  // TODO -> This is static, should not be recreated on every render, put above the component.
  const buttons = [
    { name: 'brackets', text: 'Bracket structure', enabled: !tournamentHub?.registrationClosed },
    { name: 'rules', text: 'Rules', enabled: true },
    { name: 'howItWorks', text: 'How it works', enabled: true }
  ];

  const leaveTournamentFunction = () => {
    leaveTournament({
      body: {
        tournamentHubId: hubId
      }
    });
  };

  if (isLoading) return null;

  return (
    <ButtonsWrapper>
      <LeftButtons>
        {buttons.map(
          (button) =>
            button.enabled && (
              <Button key={button.name} onClick={() => handleOpenModal(button.name)}>
                {button.text}
              </Button>
            )
        )}
      </LeftButtons>
      <RightButtons>
        {!tournamentHub.registrationClosed &&
          (!isInTournamentTeam ? (
            <Button primary onClick={openTeamSettings}>
              Join tournament
            </Button>
          ) : (
            <>
              <Button onClick={openTeamSettings}>Team Settings</Button>
              <PromptButton
                promptText="This will affect all team members, are you sure you want to leave this tournament?"
                alert
                onClick={leaveTournamentFunction}>
                Leave Tournament
              </PromptButton>
            </>
          ))}
      </RightButtons>
    </ButtonsWrapper>
  );
};

export default TournamentHubButtons;
