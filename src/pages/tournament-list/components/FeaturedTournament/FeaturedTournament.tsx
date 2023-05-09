import { TournamentHub } from 'types/tournaments/TournamentInfo';
import { formatDateAndTime } from 'utils/dateUtils';
import { getTournamentModeShort } from 'utils/tournamentUtils';
import {
  Column1,
  Column2,
  Countdown,
  Hero,
  HeroWrapper,
  Info,
  Name,
  PrizePool,
  PrizePoolAmount,
  TournamentInfo,
  Wrapper
} from './FeaturedTournament.styles';

type Props = {
  tournamentHub: TournamentHub;
  onClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
  visible?: boolean;
};

export default function FeaturedTournament({ tournamentHub, onClick, visible }: Props) {
  return (
    <Wrapper>
      <HeroWrapper>
        <Hero onClick={onClick} image={tournamentHub.image} visible={visible}>
          <Countdown>In 3 days</Countdown>
          <Info>
            <Column1>
              <Name>{tournamentHub.name}</Name>
              <TournamentInfo>
                Starts {formatDateAndTime(tournamentHub.startTime)} | Registration closes{' '}
                {formatDateAndTime(tournamentHub.registrationCloseTime)} | Entry fee €
                {tournamentHub.entryFee} / person | {getTournamentModeShort(tournamentHub)}
              </TournamentInfo>
            </Column1>
            <Column2>
              <PrizePoolAmount>€{tournamentHub.entryFee}</PrizePoolAmount>
              <PrizePool>Prize Pool</PrizePool>
            </Column2>
          </Info>
        </Hero>
      </HeroWrapper>
    </Wrapper>
  );
}
