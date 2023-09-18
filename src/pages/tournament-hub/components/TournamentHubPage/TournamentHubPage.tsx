import { useCallback, useEffect, useState } from 'react';
import { usePartyFeed, useTournamentHubFeed, useTournamentTeamFeed } from 'api/feeds';
import { isFeedWithTeam } from 'api/feeds/hooks/useTournamentTeamFeed';
import * as TournamentRequests from 'api/requests/TournamentRequests';
import { useNavigate, useParams } from 'react-router-dom';
import PageContainer from 'common/components/PageContainer';
import { useLoggedInUser } from 'common/hooks/useLoggedInUser';
import popup from 'common/popup';
import { Backdrop } from 'common/ui';
import { TournamentHubModalType } from 'common/ui/Modal/Modal.types';
import TournamentCard from 'pages/tournament/components/TournamentCard/TournamentCard';
import { Tournament } from 'types/tournaments/TournamentInfo';
import {
  InfoWrapper,
  TournamentName,
  TournamentsWrapper,
  Wrapper
} from './TournamentHubPage.styles';
import TournamentHubModal from '../TournamentHubModal/TournamentHubModal';
import TournamentHubButtons from '../TournamentHubButtons/TournamentHubButtons';
import TournamentHubInfo from '../TournamentHubInfo/TournamentHubInfo';
import TournamentHubHeader from '../TournamentHubHeader/TournamentHubHeader';

const TournamentHubPage = () => {
  const { hubId } = useParams() as { hubId: string };
  const user = useLoggedInUser();
  const tournamentTeamFeed = useTournamentTeamFeed(hubId, user.id);
  const { tournamentHub, tournamentIds, isLoading } = useTournamentHubFeed(hubId);
  const { party } = usePartyFeed();

  if (isFeedWithTeam(tournamentTeamFeed)) {
    tournamentTeamFeed.tournamentTeam;
  }

  const [loggedInUserTournament, setLoggedInUserTournament] = useState<Tournament>();

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
    if (!party || party.leaderId === user.id) {
      setActiveModal('teamSettings');
    } else {
      popup.error('You are not the party leader');
    }
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const getLoggedInUserTournament = useCallback(async () => {
    try {
      const res = await TournamentRequests.getTournament({ tournamentHubId: hubId });
      setLoggedInUserTournament(res.tournament);
    } catch (error) {
      // TODO -> allow
      console.error(error);
    }
  }, [hubId]);

  useEffect(() => {
    // Replace with a feed
    getLoggedInUserTournament();
  }, [getLoggedInUserTournament, activeModal]);

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
                  tournamentHubImage={tournamentHub.imageId}
                  isUserInTournament={loggedInUserTournament?.id === tournamentId}
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
            openTeamSettings={openTeamSettings}
          />
          <TournamentHubModal activeModal={activeModal} closeModal={closeModal} />
          <TournamentHubInfo />
        </InfoWrapper>
      </Wrapper>
    </PageContainer>
  );
};

export default TournamentHubPage;
