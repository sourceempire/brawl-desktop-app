import { useTournamentHubFeed } from 'api/feeds';
import { useParams } from 'react-router-dom';
import {
  TournamentHubInfoWrapper,
  InfoHeaderWrapper,
  Header,
  PredictedPrize,
  PrizeElement,
  PrizePosition
} from './TournamentHubInfo.styles';
import InfoCards from 'pages/tournament/components/InfoCards/InfoCards';

const TournamentHubInfo = () => {
  const { hubId } = useParams() as { hubId: string };
  const { tournamentHub } = useTournamentHubFeed({ tournamentHubId: hubId });

  //TODO -> Fetch correct prizepool data
  const prizePool = [100, 200, 300, 400];

  return (
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
  );
};

export default TournamentHubInfo;
