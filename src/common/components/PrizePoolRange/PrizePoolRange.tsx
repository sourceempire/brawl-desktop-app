import { useTournamentHubPrizePoolFeed } from 'api/feeds';
import { TournamentHub } from 'types/tournaments/TournamentInfo';
import { formatMoney } from 'utils/moneyUtils';

type Props = {
  tournamentHub: TournamentHub;
};

export const PrizePoolRange = ({ tournamentHub }: Props) => {
  const { prizePoolRange, isLoading: isLoadingPrizePool } = useTournamentHubPrizePoolFeed({
    tournamentHubId: tournamentHub.id
  });

  if (isLoadingPrizePool) {
    return null;
  }

  const minPrizePool = formatMoney(prizePoolRange.min);
  const maxPrizePool = formatMoney(prizePoolRange.max);
  const arePrizePoolMaxMinEqual = minPrizePool === maxPrizePool;

  return (
    !isLoadingPrizePool &&
    (arePrizePoolMaxMinEqual ? maxPrizePool : `${minPrizePool} - ${maxPrizePool}`)
  );
};
