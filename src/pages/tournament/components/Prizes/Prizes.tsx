import { PrizesProps, Prize, GroupedData } from 'types/prizes/Prizes';
import {
  PrizeList,
  PrizeItem,
  Placement,
  PrizeInfoWrapper,
  PrizeHeader,
  PrizeColumn,
  BackgroundImage,
  Overlay
} from './Prizes.styles';
import { useTournamentPrizesFeed } from 'api/feeds';
import defaultImage from 'assets/images/temporary-space.webp';
import Money from 'types/Money';
import { PrizeTeam } from './PrizeTeam';

export const Prizes = ({ tournamentId }: PrizesProps) => {
  const { prizes, isLoading: isLoadingTournamentPrizes } = useTournamentPrizesFeed({
    tournamentId
  });

  if (isLoadingTournamentPrizes) {
    return null;
  }

  const groupByPlacement = (prizes: Prize[]): GroupedData => {
    const groupedData: GroupedData = {};

    prizes.forEach((prize) => {
      const { placement } = prize;
      if (!groupedData[placement]) {
        groupedData[placement] = [];
      }
      groupedData[placement].push(prize);
    });

    return groupedData;
  };

  const groupedData = groupByPlacement(prizes);

  return (
    <PrizeList>
      <BackgroundImage src={defaultImage} />
      <Overlay />
      {Object.entries(groupedData).map(([placement, prizes]) => (
        <PrizeItem key={placement}>
          <Placement>{placement}</Placement>
          <PrizeInfoWrapper>
            <PrizeHeader>{`€${new Money(prizes[0].prize).format()}`}</PrizeHeader>
            <PrizeColumn>
              {prizes.map((prize, itemIndex) => (
                <PrizeTeam key={itemIndex} teamId={prize.teamId} />
              ))}
            </PrizeColumn>
          </PrizeInfoWrapper>
        </PrizeItem>
      ))}
    </PrizeList>
  );
};
