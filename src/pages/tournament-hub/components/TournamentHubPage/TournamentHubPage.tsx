import { useCallback, useEffect, useState } from 'react';
import { useTournamentHubFeed, useTournamentTeamFeed } from 'api/feeds';
import { isFeedWithTeam } from 'api/feeds/hooks/useTournamentTeamFeed';
import * as TournamentRequests from 'api/requests/TournamentRequests';
import { useNavigate, useParams } from 'react-router-dom';
import PageContainer from 'common/components/PageContainer';
import { useLoggedInUser } from 'common/hooks/useLoggedInUser';
import popup from 'common/popup';
import { Backdrop, Button, Icons } from 'common/ui';
import CountDown from 'pages/tournament/components/CountDown';
import InfoCards from 'pages/tournament/components/InfoCards/InfoCards';
import TournamentCard from 'pages/tournament/components/TournamentCard/TournamentCard';
import { Tournament } from 'types/tournaments/TournamentInfo';
import { formatDateAndTime } from 'utils/dateUtils';
import BracketsModal from './BracketsModal/BracketsModal';
import HowItWorksModal from './HowItWorksModal/HowItWorksModal';
import MapPoolModal from './MapPoolModal/MapPoolModal';
import RulesModal from './RulesModal/RulesModal';
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
  TournamentsWrapper,
  Wrapper
} from './TournamentHubPage.styles';

const TournamentHubPage = () => {
  const { hubId } = useParams() as { hubId: string };
  const user = useLoggedInUser();
  const tournamentTeamFeed = useTournamentTeamFeed(hubId, user.id);
  const { tournamentHub, tournamentIds, isLoading } = useTournamentHubFeed(hubId);

  if (isFeedWithTeam(tournamentTeamFeed)) {
    tournamentTeamFeed.tournamentTeam;
  }

  const [loggedInUserTournament, setLoggedInUserTournament] = useState<Tournament>();

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

  const [shownModal, setShownModal] = useState({
    brackets: false,
    mapPool: false,
    rules: false,
    howItWorks: false
  });

  const handleOpenModal = (name: string) => {
    setShownModal({ ...shownModal, [name]: true });
  };

  const signup = () => {
    TournamentRequests.joinTournament(hubId)
      .then(() => popup.info('Tournament joined'))
      .catch((error) => {
        switch (error.error) {
          case 'invalidTeamSize':
            return popup.error(`Your party needs ${tournamentHub.teamSize} players`);
          default:
            popup.error('Something went wrong');
        }
      });
  };

  const leave = () => {
    TournamentRequests.leaveTournament(hubId)
      .then(() => popup.info('Tournament leaved'))
      .catch((error) => popup.error(error.error));
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
  }, [getLoggedInUserTournament, shownModal]);

  const navigate = useNavigate();

  if (isLoading) return null;

  return (
    <PageContainer>
      <Wrapper>
        <Backdrop />
        {tournamentHub.registrationClosed && tournamentIds ? (
          <TournamentsWrapper
            isUserInTournament={loggedInUserTournament ? true : false}
            listLength={tournamentIds.length}>
            {tournamentIds.map((tournamentId) => (
              <TournamentCard
                key={tournamentId}
                tournamentId={tournamentId}
                tournamentHubImage={tournamentHub.image}
                isUserInTournament={loggedInUserTournament?.id === tournamentId}
                onClick={() => navigate(`/main/tournaments/${tournamentId}`)}></TournamentCard>
            ))}
          </TournamentsWrapper>
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
                  <Button primary onClick={signup}>
                    Join tournament
                  </Button>
                ) : (
                  <Button alert onClick={leave}>
                    Leave Tournament
                  </Button>
                ))}
            </RightButtons>
          </ButtonsWrapper>
          <BracketsModal
            isOpen={shownModal.brackets}
            onRequestClose={() => setShownModal({ ...shownModal, brackets: false })}
          />
          <MapPoolModal
            isOpen={shownModal.mapPool}
            onRequestClose={() => setShownModal({ ...shownModal, mapPool: false })}
          />
          {tournamentHub && (
            <RulesModal
              isOpen={shownModal.rules}
              onRequestClose={() => setShownModal({ ...shownModal, rules: false })}
              tournamentHubId={tournamentHub.id}
            />
          )}
          <HowItWorksModal
            isOpen={shownModal.howItWorks}
            onRequestClose={() => setShownModal({ ...shownModal, howItWorks: false })}
          />
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
