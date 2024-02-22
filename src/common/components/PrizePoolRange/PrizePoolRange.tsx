import { useTournamentHubPrizePoolFeed } from 'api/feeds';
import { formatMoney } from 'utils/moneyUtils';

type Props = {
  tournamentHubId: string;
};

export const PrizePoolRange = ({ tournamentHubId }: Props) => {
  const { prizePoolRange, isLoading: isLoadingPrizePool } = useTournamentHubPrizePoolFeed({
    tournamentHubId: tournamentHubId
  });

  if (isLoadingPrizePool) {
    return null;
  }

  const minPrizePool = formatMoney(prizePoolRange.min);
  const maxPrizePool = formatMoney(prizePoolRange.max);
  const arePrizePoolMaxMinEqual = minPrizePool === maxPrizePool;

  return arePrizePoolMaxMinEqual ? maxPrizePool : `${minPrizePool} - ${maxPrizePool}`;
};
