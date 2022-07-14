import { useState } from 'react';
import { Checkbox } from 'common/ui-components';
import Modal from 'common/ui-components/components/Modal/Modal';
import RadioButton from 'common/ui-components/components/RadioButton/RadioButton';
import { RangedSlider, Slider } from 'common/ui-components/components/Slider/Slider';
import Game, { GameName } from 'types/Game';
import {
  CSGOGameModes,
  csgoMatchSettingsModeShortForm,
  isCSGOMatchSettings
} from 'types/MatchSettings';
import Money from 'types/Money';
import { TournamentInfo } from 'types/tournaments/TournamentInfo';
import { CategoryTitle, Label, Option, Options } from './TournamentsFiltersModal.styled';

type Props = {
  isOpen: boolean;
  onRequestClose: () => void;
  applyFilters: (filters: Filter[]) => void;
  previousFilter: Filter[];
};

const ALL_GAMES = 'all';
const ENTRANCE_FEE_MIN = 0;
const ENTRANCE_FEE_MAX = 1000;

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
  const [northAmerica, setNorthAmerica] = useState(false);
  const [entranceFee, setEntranceFee] = useState<[number, number]>([
    ENTRANCE_FEE_MIN,
    ENTRANCE_FEE_MAX
  ]);

  const filters = {
    [CSGOGameModes.COMPETITIVE]: {
      name: csgoMatchSettingsModeShortForm(CSGOGameModes.COMPETITIVE),
      type: FilterTypes.GAME_MODE,
      value: CSGOGameModes.COMPETITIVE,
      active: fiveVFive,
      setter: setFiveVFive
    },
    [CSGOGameModes.WINGMAN]: {
      name: csgoMatchSettingsModeShortForm(CSGOGameModes.WINGMAN),
      type: FilterTypes.GAME_MODE,
      value: CSGOGameModes.WINGMAN,
      active: twoVTwo,
      setter: setTwoVTwo
    },
    [CSGOGameModes.ONE_VS_ONE]: {
      name: csgoMatchSettingsModeShortForm(CSGOGameModes.ONE_VS_ONE),
      type: FilterTypes.GAME_MODE,
      value: CSGOGameModes.ONE_VS_ONE,
      active: oneVOne,
      setter: setOneVOne
    },
    europe: {
      name: 'Europe',
      type: FilterTypes.REGION,
      value: 'europe',
      active: europe,
      setter: setEurope
    },
    northAmerica: {
      name: 'North America',
      type: FilterTypes.REGION,
      value: 'northAmerica',
      active: northAmerica,
      setter: setNorthAmerica
    }
  };

  function loadPrevious() {
    // Load previous values when opening the modal
    let gameSet = false;
    let entranceFeeSet = false;

    Object.values(filters).forEach((filter) => filter.setter(false));
    for (const filter of previousFilter) {
      if (filter.type === FilterTypes.GAME_MODE || filter.type === FilterTypes.REGION) {
        (filters as { [id: string]: { setter: React.Dispatch<React.SetStateAction<boolean>> } })[
          filter.value
        ].setter(true);
      } else if (filter.type === FilterTypes.GAME) {
        setGame(filter.value);
        gameSet = true;
      } else if (filter.type === FilterTypes.ENTRANCE_FEE) {
        const value = filter.value.split('-').map((i) => parseInt(i)) as [number, number];
        setEntranceFee(value);
        entranceFeeSet = true;
      }
    }

    if (!gameSet) {
      setGame(ALL_GAMES);
    }
    if (!entranceFeeSet) {
      setEntranceFee([ENTRANCE_FEE_MIN, ENTRANCE_FEE_MAX]);
    }
  }

  function getFiltes(): Filter[] {
    const activeFilters = [] as Filter[];
    if (game !== ALL_GAMES) {
      activeFilters.push({
        name: GameName[game as Game],
        type: FilterTypes.GAME,
        value: game
      });
    }
    for (const [id, filter] of Object.entries(filters)) {
      if (filter.active) {
        activeFilters.push({
          name: filter.name,
          type: filter.type,
          value: filter.value
        });
      }
    }
    if (entranceFee[0] !== ENTRANCE_FEE_MIN || entranceFee[1] !== ENTRANCE_FEE_MAX) {
      activeFilters.push({
        name: `entrance: €${entranceFee[0]}-€${entranceFee[1]}`,
        type: FilterTypes.ENTRANCE_FEE,
        value: `${entranceFee[0]}-${entranceFee[1]}`
      });
    }
    return activeFilters;
  }

  return (
    <Modal
      title="Filter"
      isOpen={isOpen}
      onBeforeOpen={loadPrevious}
      onRequestClose={() => {
        onRequestClose();
        applyFilters(getFiltes());
      }}>
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
          {checkbox(filters[CSGOGameModes.COMPETITIVE])}
          <Label>5v5</Label>
        </Option>
        <Option>
          {checkbox(filters['europe'])}
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
          {checkbox(filters[CSGOGameModes.WINGMAN])}
          <Label>2v2</Label>
        </Option>
        <Option>
          {checkbox(filters['northAmerica'])}
          <Label>North America</Label>
        </Option>
        <Option></Option>
        <Option>
          {checkbox(filters[CSGOGameModes.ONE_VS_ONE])}
          <Label>1v1</Label>
        </Option>
      </Options>
      <span>Entrance Fee {entranceFee && `€${entranceFee[0]}-€${entranceFee[1]}`}</span>
      <RangedSlider
        onChange={(start, end) => setEntranceFee([start, end])}
        value={entranceFee}
        defaultValue={[ENTRANCE_FEE_MIN, ENTRANCE_FEE_MAX]}
        min={ENTRANCE_FEE_MIN}
        max={ENTRANCE_FEE_MAX}
        showMin
        showMax
        valuePreffix="€"
        minDistance={10}
        step={10}
      />
    </Modal>
  );
}

function checkbox(filter: {
  active: boolean;
  setter: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return <Checkbox checked={filter.active} onChange={() => filter.setter((v) => !v)} />;
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
