import { useEffect, useState } from 'react';
import { Checkbox } from 'common/ui-components';
import Modal from 'common/ui-components/components/Modal/Modal';
import RadioButton from 'common/ui-components/components/RadioButton/RadioButton';
import Game, { GameName } from 'types/Game';
import { isCSGOMatchSettings } from 'types/MatchSettings';
import Money from 'types/Money';
import { TournamentInfo } from 'types/tournaments/TournamentInfo';
import { CategoryTitle, Label, Option, Options } from './TournamentsFilters.styled';

type Props = {
  isOpen: boolean;
  onRequestClose: () => void;
  applyFilters: (filters: Filter[]) => void;
  previousFilter: Filter[];
};

const ALL_GAMES = 'all';

export default function TournamentsFilters({
  isOpen,
  onRequestClose,
  applyFilters,
  previousFilter
}: Props) {
  const [game, setGame] = useState(ALL_GAMES);
  const [fiveVFive, setFiveVFive] = useState(false);
  const [twoVTwo, setTwoVTwo] = useState(false);
  const [oneVOne, setOneVOne] = useState(false);
  const [europe, setEurope] = useState(false);
  const [northAmerica, setNorthAmeric] = useState(false);

  useEffect(() => {
    console.log('previousFilter', previousFilter);
  }, [previousFilter]);

  function getFiltes(): Filter[] {
    const filters = [] as Filter[];
    if (game !== ALL_GAMES) {
      filters.push({
        name: GameName[game as Game],
        type: FilterTypes.GAME,
        value: game
      });
    }
    if (fiveVFive) {
      // TODO should have an enum for csgo game modes
      filters.push({
        name: '5v5',
        type: FilterTypes.GAME_MODE,
        value: 'competitive'
      });
    }
    if (twoVTwo) {
      filters.push({
        name: '2v2',
        type: FilterTypes.GAME_MODE,
        value: 'wingman'
      });
    }
    if (oneVOne) {
      filters.push({
        name: '1v1',
        type: FilterTypes.GAME_MODE,
        value: 'one_vs_one'
      });
    }
    if (europe) {
      filters.push({
        name: 'Europe',
        type: FilterTypes.REGION,
        value: 'europe'
      });
    }
    if (northAmerica) {
      filters.push({
        name: 'NorthAmerica',
        type: FilterTypes.REGION,
        value: 'northAmerica'
      });
    }
    return filters;
  }

  return (
    <Modal
      title="Filter"
      isOpen={isOpen}
      onAfterOpen={() => {}}
      onRequestClose={() => {
        onRequestClose();
        applyFilters(getFiltes());
      }}
      closeTimeoutMS={300}>
      <Options>
        <CategoryTitle>Game</CategoryTitle>
        <CategoryTitle>Game Mode</CategoryTitle>
        <CategoryTitle>Region</CategoryTitle>
        <Option>
          <RadioButton
            name="game"
            value={ALL_GAMES}
            checked={game === ALL_GAMES}
            onChange={(v) => setGame(v)}
          />
          <Label>All Games</Label>
        </Option>
        <Option>
          <Checkbox checked={fiveVFive} onChange={() => setFiveVFive((v) => !v)} />
          <Label>5v5</Label>
        </Option>
        <Option>
          <Checkbox checked={europe} onChange={() => setEurope((v) => !v)} />
          <Label>Europe</Label>
        </Option>
        <Option>
          <RadioButton
            name="game"
            value={Game.CSGO}
            checked={game === Game.CSGO}
            onChange={(v) => setGame(v)}
          />
          <Label>{GameName[Game.CSGO]}</Label>
        </Option>
        <Option>
          <Checkbox checked={twoVTwo} onChange={() => setTwoVTwo((v) => !v)} />
          <Label>2v2</Label>
        </Option>
        <Option>
          <Checkbox checked={northAmerica} onChange={() => setNorthAmeric((v) => !v)} />
          <Label>North America</Label>
        </Option>
        <Option></Option>
        <Option>
          <Checkbox checked={oneVOne} onChange={() => setOneVOne((v) => !v)} />
          <Label>1v1</Label>
        </Option>
      </Options>
    </Modal>
  );
}

export enum FilterTypes {
  GAME,
  GAME_MODE,
  NAME,
  ENTRANCE_FEE,
  PRIZE_POOL,
  START_TIME,
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
          case FilterTypes.START_TIME: {
            const [start, end] = filter.value.split('-');
            return (
              new Date(tournament.startTime) >= new Date(start) &&
              new Date(tournament.currentPrizePool) <= new Date(end)
            );
          }
          case FilterTypes.REGION:
            return tournament.region === filter.value;
          default:
            return false; // unknown filter
        }
      }).length >= numOfFilterTypes // must match at least one of each type
  );
}
