// import { useState } from 'react';
// import { Button, Checkbox, DatePicker, Modal, RadioButton, RangedSlider } from 'common/ui';
// import {
//   Filter,
//   FilterTypes
// } from 'pages/tournament-list/components/TournamentListView/TournamentListView.model';
// import Game, { GameName } from 'types/Game';
// // import { CSGOGameModes } from 'types/MatchSettings';
// import { SimpleDate, SimpleDateString } from 'types/SimpleDate';
// // import { csgoMatchSettingsModeShortForm } from 'utils/matchUtils';
// import {
//   ApplyFilterButton,
//   CategoryTitle,
//   Label,
//   MoneyLabel,
//   MoneySlider,
//   MoneyValue,
//   Option,
//   Section1,
//   Section2
// } from './TournamentsFiltersModal.styles';

// type Props = {
//   isOpen: boolean;
//   onRequestClose: () => void;
//   applyFilters: (filters: Filter[]) => void;
//   previousFilter: Filter[];
// };

// const ALL_GAMES = 'all';
// const ENTRANCE_FEE_MIN = 0;
// const ENTRANCE_FEE_MAX = 1000;
// const PRIZE_POOL_MIN = 0;
// const PRIZE_POOL_MAX = 10000;

// export default function TournamentsFilters({
//   isOpen,
//   onRequestClose,
//   applyFilters,
//   previousFilter
// }: Props) {
//   const [game, setGame] = useState(ALL_GAMES);
//   const [fiveVFive, setFiveVFive] = useState(false);
//   const [twoVTwo, setTwoVTwo] = useState(false);
//   const [oneVOne, setOneVOne] = useState(false);
//   const [europe, setEurope] = useState(false);
//   const [northAmerica, setNorthAmerica] = useState(false);
//   const [entranceFee, setEntranceFee] = useState<[number, number]>([
//     ENTRANCE_FEE_MIN,
//     ENTRANCE_FEE_MAX
//   ]);
//   const [prizePool, setPrizePool] = useState<[number, number]>([PRIZE_POOL_MIN, PRIZE_POOL_MAX]);
//   const [fromDate, setFromDate] = useState<SimpleDate | undefined>(undefined);
//   const [toDate, setToDate] = useState<SimpleDate | undefined>(undefined);

// const checkboxes = {
//   [CSGOGameModes.COMPETITIVE]: {
//     name: csgoMatchSettingsModeShortForm(CSGOGameModes.COMPETITIVE),
//     type: FilterTypes.GAME_MODE,
//     value: CSGOGameModes.COMPETITIVE,
//     active: fiveVFive,
//     setter: setFiveVFive
//   },
//   [CSGOGameModes.WINGMAN]: {
//     name: csgoMatchSettingsModeShortForm(CSGOGameModes.WINGMAN),
//     type: FilterTypes.GAME_MODE,
//     value: CSGOGameModes.WINGMAN,
//     active: twoVTwo,
//     setter: setTwoVTwo
//   },
//   [CSGOGameModes.ONE_VS_ONE]: {
//     name: csgoMatchSettingsModeShortForm(CSGOGameModes.ONE_VS_ONE),
//     type: FilterTypes.GAME_MODE,
//     value: CSGOGameModes.ONE_VS_ONE,
//     active: oneVOne,
//     setter: setOneVOne
//   },
//   europe: {
//     name: 'Europe',
//     type: FilterTypes.REGION,
//     value: 'europe',
//     active: europe,
//     setter: setEurope
//   },
//   northAmerica: {
//     name: 'North America',
//     type: FilterTypes.REGION,
//     value: 'northAmerica',
//     active: northAmerica,
//     setter: setNorthAmerica
//   }
// };

// function loadPrevious() {
//   // Load previous values when opening the modal
//   let gameSet = false;
//   let entranceFeeSet = false;
//   let prizePoolSet = false;
//   let fromDateSet = false;
//   let toDateSet = false;

//   Object.values(checkboxes).forEach((filter) => filter.setter(false));
//   for (const filter of previousFilter) {
//     if (filter.type === FilterTypes.GAME_MODE || filter.type === FilterTypes.REGION) {
//       (checkboxes as { [id: string]: { setter: React.Dispatch<React.SetStateAction<boolean>> } })[
//         filter.value
//       ].setter(true);
//     } else if (filter.type === FilterTypes.GAME) {
//       setGame(filter.value);
//       gameSet = true;
//     } else if (filter.type === FilterTypes.ENTRANCE_FEE) {
//       const value = filter.value.split('-').map((i) => parseInt(i)) as [number, number];
//       setEntranceFee(value);
//       entranceFeeSet = true;
//     } else if (filter.type === FilterTypes.PRIZE_POOL) {
//       const value = filter.value.split('-').map((i) => parseInt(i)) as [number, number];
//       setPrizePool(value);
//       prizePoolSet = true;
//     } else if (filter.type === FilterTypes.FROM_DATE) {
//       setFromDate(new SimpleDate(filter.value as SimpleDateString));
//       fromDateSet = true;
//     } else if (filter.type === FilterTypes.TO_DATE) {
//       setToDate(new SimpleDate(filter.value as SimpleDateString));
//       toDateSet = true;
//     }
//   }

//   if (!gameSet) {
//     setGame(ALL_GAMES);
//   }
//   if (!entranceFeeSet) {
//     setEntranceFee([ENTRANCE_FEE_MIN, ENTRANCE_FEE_MAX]);
//   }
//   if (!prizePoolSet) {
//     setPrizePool([PRIZE_POOL_MIN, PRIZE_POOL_MAX]);
//   }
//   if (!fromDateSet) {
//     setFromDate(undefined);
//   }
//   if (!toDateSet) {
//     setToDate(undefined);
//   }
// }

// function getFilters(): Filter[] {
//   const activeFilters = [] as Filter[];
//   if (game !== ALL_GAMES) {
//     activeFilters.push({
//       name: GameName[game as Game],
//       type: FilterTypes.GAME,
//       value: game
//     });
//   }
//   for (const filter of Object.values(checkboxes)) {
//     if (filter.active) {
//       activeFilters.push({
//         name: filter.name,
//         type: filter.type,
//         value: filter.value
//       });
//     }
//   }
//   if (entranceFee[0] !== ENTRANCE_FEE_MIN || entranceFee[1] !== ENTRANCE_FEE_MAX) {
//     activeFilters.push({
//       name: `entrance: €${entranceFee[0]}-€${entranceFee[1]}`,
//       type: FilterTypes.ENTRANCE_FEE,
//       value: `${entranceFee[0]}-${entranceFee[1]}`
//     });
//   }
//   if (prizePool[0] !== PRIZE_POOL_MIN || prizePool[1] !== PRIZE_POOL_MAX) {
//     activeFilters.push({
//       name: `prize pool: €${prizePool[0]}-€${prizePool[1]}`,
//       type: FilterTypes.PRIZE_POOL,
//       value: `${prizePool[0]}-${prizePool[1]}`
//     });
//   }
//   if (fromDate) {
//     activeFilters.push({
//       name: `from: ${fromDate}`,
//       type: FilterTypes.FROM_DATE,
//       value: fromDate.toString()
//     });
//   }
//   if (toDate) {
//     activeFilters.push({
//       name: `to: ${toDate}`,
//       type: FilterTypes.TO_DATE,
//       value: toDate.toString()
//     });
//   }
//   return activeFilters;
// }

//   function filterThisWeek() {
//     setFromDate(SimpleDate.today());
//     setToDate(SimpleDate.today().addDays(7));
//   }

//   function filterThisMonth() {
//     setFromDate(SimpleDate.today());
//     setToDate(SimpleDate.today().addDays(30));
//   }

//   return (
//     <Modal
//       title="Filter"
//       isOpen={isOpen}
//       onBeforeOpen={loadPrevious}
//       onRequestClose={() => {
//         onRequestClose();
//         applyFilters(getFilters());
//       }}
//       width="536px">
//       <Section1>
//         <CategoryTitle>Game</CategoryTitle>
//         <Option>
//           <RadioButton
//             name="game"
//             value={ALL_GAMES}
//             checked={game === ALL_GAMES}
//             onChange={(v) => setGame(v)}
//           />
//           <Label>All Games</Label>
//         </Option>
//         <Option>
//           <RadioButton
//             name="game"
//             value={Game.CSGO}
//             checked={game === Game.CSGO}
//             onChange={(v) => setGame(v)}
//           />
//           <Label>{GameName[Game.CSGO]}</Label>
//         </Option>
//         <Option></Option>
//         <CategoryTitle>Game Mode</CategoryTitle>
//         <Option>
//           {checkbox(checkboxes[CSGOGameModes.COMPETITIVE])}
//           <Label>5v5</Label>
//         </Option>
//         <Option>
//           {checkbox(checkboxes[CSGOGameModes.WINGMAN])}
//           <Label>2v2</Label>
//         </Option>
//         <Option>
//           {checkbox(checkboxes[CSGOGameModes.ONE_VS_ONE])}
//           <Label>1v1</Label>
//         </Option>
//         <CategoryTitle>Region</CategoryTitle>
//         <Option>
//           {checkbox(checkboxes['europe'])}
//           <Label>Europe</Label>
//         </Option>
//         <Option>
//           {checkbox(checkboxes['northAmerica'])}
//           <Label>North America</Label>
//         </Option>
//       </Section1>
//       <Section2>
//         <MoneySlider>
//           <MoneyLabel>Buy-In</MoneyLabel>
//           <MoneyValue>{entranceFee && `€${entranceFee[0]} - €${entranceFee[1]}`}</MoneyValue>
//           <RangedSlider
//             onChange={(start, end) => setEntranceFee([start, end])}
//             value={entranceFee}
//             defaultValue={[ENTRANCE_FEE_MIN, ENTRANCE_FEE_MAX]}
//             min={ENTRANCE_FEE_MIN}
//             max={ENTRANCE_FEE_MAX}
//             showMin
//             showMax
//             valuePreffix="€"
//             minDistance={10}
//             step={10}
//           />
//         </MoneySlider>

//         <MoneySlider>
//           <MoneyLabel>Prize Pool </MoneyLabel>
//           <MoneyValue>{prizePool && `€${prizePool[0]} - €${prizePool[1]}`}</MoneyValue>
//           <RangedSlider
//             onChange={(start, end) => setPrizePool([start, end])}
//             value={prizePool}
//             defaultValue={[PRIZE_POOL_MIN, PRIZE_POOL_MAX]}
//             min={PRIZE_POOL_MIN}
//             max={PRIZE_POOL_MAX}
//             showMin
//             showMax
//             valuePreffix="€"
//             minDistance={10}
//             step={10}
//           />
//         </MoneySlider>
//         <DatePicker.DatePickerInput value={fromDate} onChange={setFromDate} dark />
//         <DatePicker.DatePickerInput value={toDate} onChange={setToDate} dark />
//         <Button onClick={filterThisWeek}>This Week</Button>
//         <Button onClick={filterThisMonth}>This Month</Button>
//         <ApplyFilterButton
//           primary
//           onClick={() => {
//             onRequestClose();
//             applyFilters(getFilters());
//           }}>
//           Apply Filter
//         </ApplyFilterButton>
//       </Section2>
//     </Modal>
//   );
// }

// function checkbox(filter: {
//   active: boolean;
//   setter: React.Dispatch<React.SetStateAction<boolean>>;
// }) {
//   return <Checkbox checked={filter.active} onChange={() => filter.setter((v) => !v)} />;
// }
