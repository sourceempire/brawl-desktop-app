export const getRoundMatchCount = (roundIndex: number, roundCount: number) => {
  return Math.pow(2, roundCount - roundIndex) / 2;
};
