import { useDeferredValue, useState } from 'react';
import useTournamentHubsFeed from 'api/feeds/hooks/useTournamentHubsFeed';
import { useNavigate } from 'react-router-dom';
import { IconEnum, Icons } from 'common/components/Icon';
import { InputSize } from 'common/components/Input/Input.types';
import { Option } from 'common/components/Select';
import { Tab, Tabs } from 'common/components/Tabs';
import Game, { GameName } from 'types/Game';
import { CSGOMatchSettings } from 'types/MatchSettings';
import { TournamentHub } from 'types/tournaments/TournamentInfo';
import FeaturedTournament from '../FeaturedTournament/FeaturedTournament';
import TournamentInfoCard from '../TournamentInfoCard/TournamentInfoCard';
import TournamentsFilters from '../TournamentsFiltersModal/TournamentsFiltersModal';
import { Filter, filter, search } from './TournamentListView.model';
import {
  FilterBar,
  FilterBullet,
  FilterBullets,
  FilterButton,
  FilterControls,
  FilterSort,
  SearchInput,
  TournamentGallery,
  TournamentList,
  Wrapper
} from './TournamentListView.styles';
import { theme } from 'assets/styles/Theme';

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

  const { tournamentHubs } = useTournamentHubsFeed();

  const exampleTournamentInfo = (n: number): TournamentHub => ({
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

  function removeFilter(filter: Filter) {
    setActiveFilters((filters) =>
      filters.filter((f) => f.type !== filter.type || f.value !== filter.value)
    );
  }

  const navigate = useNavigate();

  return (
    <>
      <FeaturedTournament
        tournamentInfo={exampleTournamentInfo(0)}
        expanded={featuredExpanded}
        setExpanded={setFeaturedExpanded}
      />
      <TournamentGallery featuredExpanded={featuredExpanded}>
        <FilterBar>
          <FilterBullets noChildren={activeFilters.length === 0}>
            {activeFilters.map((filter) => (
              <FilterBullet key={filter.type + filter.value} onClick={() => removeFilter(filter)}>
                {filter.name}
              </FilterBullet>
            ))}
          </FilterBullets>
          <FilterControls>
            <SearchInput
              icon={<Icons.Search fill={theme.colors.icon.base} height={14} />}
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              size={InputSize.SMALL}
            />
            <FilterButton icon={IconEnum.Filter} onClick={() => setFilterModalOpen(true)}>
              Filter
            </FilterButton>
            <TournamentsFilters
              isOpen={filterModalOpen}
              onRequestClose={() => setFilterModalOpen(false)}
              applyFilters={setActiveFilters}
              previousFilter={activeFilters}
            />
            <FilterSort onSelect={console.debug}>
              <Option value="1">Sort</Option>
              <Option value="2">b</Option>
              <Option value="3">c</Option>
            </FilterSort>
          </FilterControls>
        </FilterBar>
        <TournamentList>
          {search(filter(tournamentHubs, activeFilters), searchQueryDeffered).map(
            (tournamentHub) => (
              <TournamentInfoCard
                key={tournamentHub.id}
                tournamentInfo={tournamentHub}
                onClick={() => navigate(`hub/${tournamentHub.id}`)}
              />
            )
          )}
        </TournamentList>
      </TournamentGallery>
    </>
  );
}
