import { PrizePool } from 'types/prize-pool/PrizePool';

export const getMinMaxPrizePoolValues = (prizePool: PrizePool[]) => {
  const allValues: number[] = [];
  for (const key in prizePool) {
    if (prizePool.hasOwnProperty(key)) {
      const value = prizePool[key];
      if (typeof value === 'number') {
        allValues.push(value);
      }
    }
  }
  if (allValues.length > 0) {
    const minPrize = Math.min(...allValues);
    const maxPrize = Math.max(...allValues);
    return { minPrize, maxPrize };
  }

  return { minPrize: undefined, maxPrize: undefined };
};
