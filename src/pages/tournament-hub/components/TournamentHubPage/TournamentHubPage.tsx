import { useCallback, useEffect, useState } from 'react';
import { usePartyFeed, useTournamentHubFeed, useTournamentTeamFeed } from 'api/feeds';
import { isFeedWithTeam } from 'api/feeds/hooks/useTournamentTeamFeed';
import * as TournamentRequests from 'api/requests/TournamentRequests';
import { useNavigate, useParams } from 'react-router-dom';
import PageContainer from 'common/components/PageContainer';
import { useLoggedInUser } from 'common/hooks/useLoggedInUser';
import popup from 'common/popup';
import { Backdrop, Button, Icons } from 'common/ui';
import { TournamentHubModalType } from 'common/ui/Modal/Modal.types';
import CountDown from 'pages/tournament/components/CountDown';
import InfoCards from 'pages/tournament/components/InfoCards/InfoCards';
import TournamentCard from 'pages/tournament/components/TournamentCard/TournamentCard';
import { Tournament } from 'types/tournaments/TournamentInfo';
import { formatDateAndTime } from 'utils/dateUtils';
import BracketModal from './BracketModal/BracketModal';
import HowItWorksModal from './HowItWorksModal/HowItWorksModal';
import MapPoolModal from './TournamentHubModals/MapPoolModal/MapPoolModal';
import RulesModal from './TournamentHubModals/RulesModal/RulesModal';
import TeamSettingsModal from './TournamentHubModals/TeamSettingsModal/TeamSettingsModal';
import {
  ButtonsWrapper,
  CountDownInfo,
  Header,
  HeaderHub,
  HeaderInfo,
  HubHeaderWrapper,
  InfoContainer,
  InfoHeader,
  InfoHeaderWrapper,
  InfoIcon,
  InfoSubText,
  InfoText,
  InfoWrapper,
  LeftButtons,
  PredictedPrize,
  PrizeElement,
  PrizePosition,
  RightButtons,
  TournamentHubInfoWrapper,
  TournamentInfo,
  TournamentName,
  TournamentsWrapper,
  Wrapper
} from './TournamentHubPage.styles';

const TournamentHubPage = () => {
  const { hubId } = useParams() as { hubId: string };
  const user = useLoggedInUser();
  const tournamentTeamFeed = useTournamentTeamFeed(hubId, user.id);
  const { tournamentHub, tournamentIds, isLoading } = useTournamentHubFeed(hubId);
  const { party } = usePartyFeed();

  // this knows that tournamentTeam exists (can be used instead of checking if it exists with falsy conditionals). Use if you want or remove it
  if (isFeedWithTeam(tournamentTeamFeed)) {
    tournamentTeamFeed.tournamentTeam;
  }

  const [loggedInUserTournament, setLoggedInUserTournament] = useState<Tournament>();

  // TODO -> This is static, should not be recreated on every render, put above the component.
  const buttons = [
    { name: 'brackets', text: 'Brackets' },
    { name: 'mapPool', text: 'Map pool' },
    { name: 'rules', text: 'Rules' },
    { name: 'howItWorks', text: 'How it works' }
  ];

  //TODO -> Fetch correct prizepool data
  const prizePool = [100, 200, 300, 400];

  const TournamentInfoArray = [
    {
      key: 'prizePool',
      header: `€${tournamentHub.currentPrizePool}`,
      subtext: 'Predicted Prize Pool',
      icon: Icons.Trophy
    },
    {
      key: 'entryFee',
      header: `€${tournamentHub.entryFee} / person`,
      subtext: 'Entry Fee',
      icon: Icons.Ticket
    },
    {
      key: 'startTime',
      header: tournamentHub.startTime && formatDateAndTime(tournamentHub.startTime),
      subtext: 'Tournament Start',
      icon: Icons.Clock
    }
  ];

  const [activeModal, setActiveModal] = useState<TournamentHubModalType>(null);

  const handleOpenModal = (name: string) => {
    const modalTypeMapping: Record<string, TournamentHubModalType> = {
      brackets: 'brackets',
      mapPool: 'mapPool',
      rules: 'rules',
      howItWorks: 'howItWorks'
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
          <HubHeaderWrapper>
            <HeaderInfo>
              <HeaderHub>{tournamentHub.name}</HeaderHub>
              <CountDownInfo>Registration closes in</CountDownInfo>
              <CountDown startTime={Number(tournamentHub.registrationCloseTime)} />
              <TournamentInfo>
                {TournamentInfoArray.map((info) => (
                  <InfoContainer key={info.key}>
                    <InfoIcon icon={info.icon} />
                    <InfoText>
                      <InfoHeader>{info.header}</InfoHeader>
                      <InfoSubText>{info.subtext}</InfoSubText>
                    </InfoText>
                  </InfoContainer>
                ))}
              </TournamentInfo>
            </HeaderInfo>
          </HubHeaderWrapper>
        )}
        <InfoWrapper>
          <ButtonsWrapper>
            <LeftButtons>
              {buttons.map((button) => (
                <Button key={button.name} onClick={() => handleOpenModal(button.name)}>
                  {button.text}
                </Button>
              ))}
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
          <BracketModal
            isOpen={activeModal === 'brackets'}
            onRequestClose={() => setActiveModal(null)}
            tournamentHub={tournamentHub}
          />
          <MapPoolModal
            isOpen={activeModal === 'mapPool'}
            onRequestClose={() => setActiveModal(null)}
          />
          <RulesModal
            isOpen={activeModal === 'rules'}
            onRequestClose={() => setActiveModal(null)}
          />
          <HowItWorksModal
            isOpen={activeModal === 'howItWorks'}
            onRequestClose={() => setActiveModal(null)}
          />
          {
            <TeamSettingsModal
              isOpen={activeModal === 'teamSettings'}
              playerIds={party ? party.players : [user.id]}
              hubId={hubId}
              onRequestClose={() => setActiveModal(null)}
            />
          }
          <TournamentHubInfoWrapper isRegistrationClosed={tournamentHub.registrationClosed}>
            <InfoHeaderWrapper>
              <Header>Tournament Information</Header>
              <InfoCards tournamentHub={tournamentHub} />
            </InfoHeaderWrapper>
            {!tournamentHub.registrationClosed && (
              <InfoHeaderWrapper>
                <Header>Predicted Prize Pool</Header>
                <PredictedPrize>
                  {prizePool.map((prize, index) => {
                    const prizePosition = index + 1;
                    return (
                      <PrizeElement key={index}>
                        <PrizePosition>{prizePosition}</PrizePosition>€{prize}
                      </PrizeElement>
                    );
                  })}
                </PredictedPrize>
              </InfoHeaderWrapper>
            )}
          </TournamentHubInfoWrapper>
        </InfoWrapper>
      </Wrapper>
    </PageContainer>
  );
};

export default TournamentHubPage;
