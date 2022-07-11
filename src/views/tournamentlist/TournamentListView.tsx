import { FunctionComponent, useState } from 'react';
import { Option, Select } from 'common/ui-components/components/Select/Select';
import { Tab, Tabs } from 'common/ui-components/components/Tabs/Tabs';
import { InputSize } from 'common/ui-components/types';
import { Link } from 'react-router-dom';
import FeaturedTournament from './components/FeaturedTournament/FeaturedTournament';
import TournamentInfoCard from './components/TournamentInfoCard/TournamentInfoCard';
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

type Filter = {
  name: string;
};

export default function TournamentListView() {
  return (
    <Wrapper>
      <Link to="/main">Main</Link>
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
  const [activeFilter, setActiveFilters] = useState<Filter[]>([
    { name: '1v1' },
    { name: 'Counter Strike' },
    { name: '€25 - 500' }
  ]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const exampleTournamentInfo = (n: number) => ({
    id: 'eee18f6d-2a99-4176-b01d-271e1283692' + n,
    name: 'Sweden Masters Invitational',
    game: 'Counter Strike',
    gameMode: '1v1',
    time: new Date('2022-09-29 14:30:00'),
    entryFee: 5000,
    currentPrizePool: 20000,
    region: 'Europe',
    numberOfTeams: 4,
    image: 'https://picsum.photos/600/200?random=' + n
  });

  const tournaments = [
    exampleTournamentInfo(1),
    exampleTournamentInfo(2),
    exampleTournamentInfo(3),
    exampleTournamentInfo(4)
  ];

  function removeFilter(filter: Filter) {
    setActiveFilters((filters) => filters.filter((f) => f.name !== filter.name));
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
            {activeFilter.map((filter) => (
              <FilterBullet key={filter.name} onClick={() => removeFilter(filter)}>
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
            <FilterButton icon={FilterIcon}>Filter</FilterButton>
            <Select onSelect={console.log}>
              <Option value="1">Sort</Option>
              <Option value="2">b</Option>
              <Option value="3">c</Option>
            </Select>
          </FilterControls>
        </FilterBar>
        <TournamentList>
          {tournaments.map((tournament) => (
            <TournamentInfoCard key={tournament.id} tournamentInfo={tournament} />
          ))}
        </TournamentList>
      </TournamentGallery>
    </>
  );
}
