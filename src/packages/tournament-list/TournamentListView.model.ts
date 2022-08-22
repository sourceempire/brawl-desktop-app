import { isCSGOMatchSettings } from 'types/MatchSettings';
import Money from 'types/Money';
import { TournamentInfo } from 'types/tournaments/TournamentInfo';

export enum FilterTypes {
  GAME,
  GAME_MODE,
  NAME,
  ENTRANCE_FEE,
  PRIZE_POOL,
  FROM_DATE,
  TO_DATE,
  REGION
}

export type Filter = {
  name: string;
  type: FilterTypes;
  value: string;
};

export function filter(tournaments: TournamentInfo[], filters: Filter[]): TournamentInfo[] {
  const numOfFilterTypes = filters.reduce((acc, filter) => {
    acc.add(filter.type);
    return acc;
  }, new Set<FilterTypes>()).size;

  return tournaments.filter(
    (tournament) =>
      filters.filter((filter) => {
        switch (filter.type) {
          case FilterTypes.GAME:
            return tournament.gameId === filter.value;
          case FilterTypes.GAME_MODE:
            if (isCSGOMatchSettings(tournament.matchSettings)) {
              // only csgo support gamemodes so far
              return tournament.matchSettings.mode === filter.value;
            } else {
              return false;
            }
          case FilterTypes.ENTRANCE_FEE: {
            const [start, end] = filter.value.split('-');
            return (
              new Money(tournament.entranceFee).greaterOrEqualTo(new Money(start)) &&
              new Money(tournament.entranceFee).lessOrEqualTo(new Money(end))
            );
          }
          case FilterTypes.PRIZE_POOL: {
            const [start, end] = filter.value.split('-');
            return (
              new Money(tournament.currentPrizePool).greaterOrEqualTo(new Money(start)) &&
              new Money(tournament.currentPrizePool).lessOrEqualTo(new Money(end))
            );
          }
          case FilterTypes.FROM_DATE: {
            return new Date(tournament.startTime) >= new Date(filter.value);
          }
          case FilterTypes.TO_DATE: {
            return new Date(tournament.startTime) <= new Date(filter.value);
          }
          case FilterTypes.REGION:
            return tournament.region === filter.value;
          default:
            return false; // unknown filter
        }
      }).length >= numOfFilterTypes // must match at least one of each type
  );
}

export function search(tournaments: TournamentInfo[], query: string): TournamentInfo[] {
  return tournaments.filter((tournament) =>
    tournament.name.toLowerCase().includes(query.toLocaleLowerCase())
  );
}
