import { Button } from 'common/ui';
import { ButtonsWrapper, LeftButtons, RightButtons } from './TournamentHubButtons.styles';
import { useTournamentTeamFeed, useTournamentHubFeed } from 'api/feeds';
import { isFeedWithTeam } from 'api/feeds/hooks/useTournamentTeamFeed';
import { useLoggedInUser } from 'common/hooks';
import { useParams } from 'react-router-dom';

type Props = {
  handleOpenModal: (name: string) => void;
  openTeamSettings: () => void;
};

const TournamentHubButtons = ({ handleOpenModal, openTeamSettings }: Props) => {
  const { hubId } = useParams() as { hubId: string };
  const user = useLoggedInUser();
  const tournamentTeamFeed = useTournamentTeamFeed(hubId, user.id);
  const { tournamentHub } = useTournamentHubFeed(hubId);

  // TODO -> This is static, should not be recreated on every render, put above the component.
  const buttons = [
    { name: 'brackets', text: 'Brackets' },
    { name: 'mapPool', text: 'Map pool' },
    { name: 'rules', text: 'Rules' },
    { name: 'howItWorks', text: 'How it works' }
  ];

  return (
    <ButtonsWrapper>
      <LeftButtons>
        {buttons.map((button) => (
          <Button key={button.name} onClick={() => handleOpenModal(button.name)}>
            {button.text}
          </Button>
        ))}
        {tournamentHub.registrationClosed && (
          <Button key="prizes" onClick={() => handleOpenModal('prizes')}>
            Prizes
          </Button>
        )}
      </LeftButtons>
      <RightButtons>
        {!tournamentHub.registrationClosed &&
          (!isFeedWithTeam(tournamentTeamFeed) ? (
            <Button primary onClick={openTeamSettings}>
              Join tournament
            </Button>
          ) : (
            <Button alert onClick={openTeamSettings}>
              Leave Tournament
            </Button>
          ))}
      </RightButtons>
    </ButtonsWrapper>
  );
};

export default TournamentHubButtons;
