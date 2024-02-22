import Money from 'types/Money';

export const formatMoney = (money: number) => {
  const formattedMoney = new Money(money).format();

  return `€${formattedMoney}`;
};
