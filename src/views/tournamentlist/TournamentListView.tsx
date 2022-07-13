import { useDeferredValue, useState } from 'react';
import useTournamentHubsFeed from 'api/feeds/hooks/useTournamentHubsFeed';
import Modal from 'common/ui-components/components/Modal/Modal';
import { Option, Select } from 'common/ui-components/components/Select/Select';
import { Tab, Tabs } from 'common/ui-components/components/Tabs/Tabs';
import { InputSize } from 'common/ui-components/types';
import Game, { GameName } from 'types/Game';
import { CSGOMatchSettings } from 'types/MatchSettings';
import { TournamentInfo } from 'types/tournaments/TournamentInfo';
import FeaturedTournament from './components/FeaturedTournament/FeaturedTournament';
import TournamentInfoCard from './components/TournamentInfoCard/TournamentInfoCard';
import TournamentsFilters, {
  Filter,
  FilterTypes,
  filter
} from './components/TournamentsFilters/TournamentsFilters';
import {
  FilterBar,
  FilterBullet,
  FilterBullets,
  FilterButton,
  FilterControls,
  SearchInput,
  TournamentGallery,
  TournamentList,
  Wrapper
} from './TournamentListView.styled';
import FilterIcon from 'assets/icons/Filter.svg';
import SearchIcon from 'assets/icons/Search.svg';

export default function TournamentListView() {
  return (
    <Wrapper>
      <Tabs underlined={true}>
        <Tab name="Upcomming">
          <Page />
        </Tab>
        <Tab name="Started">
          <Page />
        </Tab>
        <Tab name="Past">
          <Page />
        </Tab>
        <Tab name="My Tournmanents">
          <Page />
        </Tab>
      </Tabs>
    </Wrapper>
  );
}

function Page() {
  const [featuredExpanded, setFeaturedExpanded] = useState(true);
  const [activeFilters, setActiveFilters] = useState<Filter[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const searchQueryDeffered = useDeferredValue(searchQuery);
  const [filterModalOpen, setFilterModalOpen] = useState(false);

  const { tournamentHubs: tournamentList } = useTournamentHubsFeed();

  const exampleTournamentInfo = (n: number): TournamentInfo => ({
    id: 'eee18f6d-2a99-4176-b01d-271e1283692' + n,
    name: 'Sweden Masters Invitational',
    gameId: '4747a477-3445-4b0a-9db9-bf0e68238208',
    gameName: GameName[Game.CSGO],
    startTime: '2022-09-29 14:30:00',
    entranceFee: '50.00',
    matchSettings: { __type: 'csgo', mode: 'competitive', seriesType: 'bo1' } as CSGOMatchSettings,
    currentPrizePool: '200.00',
    region: 'Europe',
    teamsAllowed: 4,
    teamSize: 5,
    lockTime: 10 * 60,
    registrationClosed: false,
    image: 'https://picsum.photos/600/200?random=' + n
  });

  const tournaments = [
    exampleTournamentInfo(1),
    exampleTournamentInfo(2),
    exampleTournamentInfo(3),
    exampleTournamentInfo(4),
    exampleTournamentInfo(5),
    exampleTournamentInfo(6),
    exampleTournamentInfo(7),
    exampleTournamentInfo(8),
    exampleTournamentInfo(9)
  ];

  function removeFilter(filter: Filter) {
    setActiveFilters((filters) =>
      filters.filter((f) => f.type !== filter.type || f.value !== filter.value)
    );
  }

  return (
    <>
      <FeaturedTournament
        tournamentInfo={exampleTournamentInfo(0)}
        expanded={featuredExpanded}
        setExpanded={setFeaturedExpanded}
      />
      <TournamentGallery featuredExpanded={featuredExpanded}>
        <FilterBar>
          <FilterBullets>
            {activeFilters.map((filter) => (
              <FilterBullet key={filter.type + filter.value} onClick={() => removeFilter(filter)}>
                {filter.name}
              </FilterBullet>
            ))}
          </FilterBullets>
          <FilterControls>
            <SearchInput
              icon={SearchIcon}
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              size={InputSize.SMALL}
            />
            <FilterButton icon={FilterIcon} onClick={() => setFilterModalOpen(true)}>
              Filter
            </FilterButton>
            <TournamentsFilters
              isOpen={filterModalOpen}
              onRequestClose={() => setFilterModalOpen(false)}
              applyFilters={setActiveFilters}
              previousFilter={activeFilters}
            />
            <Select onSelect={console.log}>
              <Option value="1">Sort</Option>
              <Option value="2">b</Option>
              <Option value="3">c</Option>
            </Select>
          </FilterControls>
        </FilterBar>
        <TournamentList>
          {search(filter(tournamentList, activeFilters), searchQueryDeffered).map((tournament) => (
            <TournamentInfoCard key={tournament.id} tournamentInfo={tournament} />
          ))}
        </TournamentList>
      </TournamentGallery>
    </>
  );
}

function search(tournaments: TournamentInfo[], query: string): TournamentInfo[] {
  return tournaments.filter((tournament) => tournament.name.includes(query));
}
