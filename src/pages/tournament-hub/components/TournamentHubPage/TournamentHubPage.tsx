import { useState } from 'react';
import { usePartyFeed, useTournamentHubFeed } from 'api/feeds';
import { useNavigate, useParams } from 'react-router-dom';
import PageContainer from 'common/components/PageContainer';
import { useLoggedInUser } from 'common/hooks/useLoggedInUser';
import popup from 'common/popup';
import { Backdrop } from 'common/ui';
import { TournamentHubModalType } from 'common/ui/Modal/Modal.types';
import TournamentCard from 'pages/tournament/components/TournamentCard/TournamentCard';
import {
  InfoWrapper,
  TournamentName,
  TournamentsWrapper,
  Wrapper
} from './TournamentHubPage.styles';
import { TournamentHubModal } from '../TournamentHubModal';
import TournamentHubButtons from '../TournamentHubButtons/TournamentHubButtons';
import TournamentHubInfo from '../TournamentHubInfo/TournamentHubInfo';
import TournamentHubHeader from '../TournamentHubHeader/TournamentHubHeader';
import useTournamentIdFeed from 'api/feeds/hooks/useTournamentIdFeed';

export function TournamentHubPage() {
  const { hubId } = useParams() as { hubId: string };
  const user = useLoggedInUser();
  const { tournamentHub, tournamentIds, isLoading } = useTournamentHubFeed({
    tournamentHubId: hubId
  });

  const partyFeed = usePartyFeed();

  const { tournamentId: loggedInUsersTournamentId } = useTournamentIdFeed({
    tournamentHubId: hubId
  });

  const [activeModal, setActiveModal] = useState<TournamentHubModalType>(null);

  const handleOpenModal = (name: string) => {
    const modalTypeMapping: Record<string, TournamentHubModalType> = {
      brackets: 'brackets',
      mapPool: 'mapPool',
      rules: 'rules',
      howItWorks: 'howItWorks',
      prizes: 'prizes'
    };

    setActiveModal(modalTypeMapping[name] || null);
  };

  const openTeamSettings = () => {
    if (!partyFeed.party || (partyFeed.party && partyFeed.party.leaderId === user.id)) {
      setActiveModal('teamSettings');
    } else {
      popup.error('You are not the party leader');
    }
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const navigate = useNavigate();

  if (isLoading) return null;

  return (
    <PageContainer>
      <Wrapper>
        <Backdrop imageId={tournamentHub.imageId} />
        {tournamentHub.registrationClosed && tournamentIds ? (
          <>
            <TournamentName>{tournamentHub.name}</TournamentName>
            <TournamentsWrapper listLength={tournamentIds.length}>
              {tournamentIds.map((tournamentId) => (
                <TournamentCard
                  key={tournamentId}
                  tournamentId={tournamentId}
                  imageId={tournamentHub.imageId}
                  isUserInTournament={loggedInUsersTournamentId === tournamentId}
                  onClick={() => navigate(`/main/tournaments/${tournamentId}`)}
                />
              ))}
            </TournamentsWrapper>
          </>
        ) : (
          <TournamentHubHeader />
        )}
        <InfoWrapper>
          <TournamentHubButtons
            handleOpenModal={handleOpenModal}
            handleCloseModal={closeModal}
            openTeamSettings={openTeamSettings}
          />
          <TournamentHubModal activeModal={activeModal} closeModal={closeModal} />
          <TournamentHubInfo />
        </InfoWrapper>
      </Wrapper>
    </PageContainer>
  );
}
