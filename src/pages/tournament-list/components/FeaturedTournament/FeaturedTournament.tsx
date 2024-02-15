import { useFormattedRemainingTime } from 'common/hooks/useFormattedRemainingTime';
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
  TournamentImage,
  TournamentInfo,
  Wrapper
} from './FeaturedTournament.styles';
import Money from 'types/Money';
import { useTournamentHubPrizePoolFeed } from 'api/feeds';

type Props = {
  tournamentHub: TournamentHub;
  onClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
  visible?: boolean;
};

export default function FeaturedTournament({ tournamentHub, onClick, visible }: Props) {
  const formattedRemainingTime = useFormattedRemainingTime(tournamentHub.startTime);

  const { prizePoolRange, isLoading: isLoadingPrizePool } = useTournamentHubPrizePoolFeed({
    tournamentHubId: tournamentHub.id
  });

  return (
    <Wrapper>
      <HeroWrapper>
        <Hero onClick={onClick} visible={visible}>
          <TournamentImage imageId={tournamentHub.imageId} />
          <Countdown>{formattedRemainingTime}</Countdown>
          <Info>
            <Column1>
              <Name>{tournamentHub.name}</Name>
              <TournamentInfo>
                {`Starts ${formatDateAndTime(tournamentHub.startTime)} | `}
                {`Registration closes ${formatDateAndTime(tournamentHub.registrationCloseTime)} | `}
                {`Entry fee €${new Money(
                  tournamentHub.entryFee + tournamentHub.entryFeeCut
                ).format()}  / player | `}
                {getTournamentModeShort(tournamentHub)}
              </TournamentInfo>
            </Column1>
            <Column2>
              <PrizePoolAmount>
                {tournamentHub.registrationClosed &&
                  !isLoadingPrizePool &&
                  (prizePoolRange.minPrizePool === prizePoolRange.maxPrizePool
                    ? `€${new Money(prizePoolRange.maxPrizePool).format()}`
                    : `€${new Money(prizePoolRange.minPrizePool).format()} - €${new Money(
                        prizePoolRange.maxPrizePool
                      ).format()}`)}
                {!tournamentHub.registrationClosed && `€${tournamentHub.currentPrizePool}`}
              </PrizePoolAmount>
              <PrizePool>Prize Pool</PrizePool>
            </Column2>
          </Info>
        </Hero>
      </HeroWrapper>
    </Wrapper>
  );
}
