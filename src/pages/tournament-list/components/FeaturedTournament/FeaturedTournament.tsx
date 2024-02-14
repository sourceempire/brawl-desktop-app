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
import { useEffect, useState } from 'react';
import { useTournamentHubPrizePoolFeed } from 'api/feeds';
import { getMinMaxPrizePoolValues } from 'utils/tournamentHubUtils';

type Props = {
  tournamentHub: TournamentHub;
  onClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
  visible?: boolean;
};

export default function FeaturedTournament({ tournamentHub, onClick, visible }: Props) {
  const formattedRemainingTime = useFormattedRemainingTime(tournamentHub.startTime);
  const [minPrizePoolValue, setMinPrizePoolValue] = useState<number>(0);
  const [maxPrizePoolValue, setMaxPrizePoolValue] = useState<number>(0);

  const { prizePool, isLoading: isLoadingPrizePool } = useTournamentHubPrizePoolFeed({
    tournamentHubId: tournamentHub.id
  });

  useEffect(() => {
    if (!isLoadingPrizePool && prizePool) {
      const { minPrize, maxPrize } = getMinMaxPrizePoolValues(prizePool);
      if (minPrize && maxPrize) {
        setMinPrizePoolValue(minPrize);
        setMaxPrizePoolValue(maxPrize);
      }
    }
  }, [isLoadingPrizePool, prizePool]);

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
                  (minPrizePoolValue === maxPrizePoolValue
                    ? `€${new Money(maxPrizePoolValue).format()}`
                    : `€${new Money(minPrizePoolValue).format()} - €${new Money(
                        maxPrizePoolValue
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
