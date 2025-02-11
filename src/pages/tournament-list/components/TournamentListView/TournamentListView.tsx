import { useDeferredValue, useState } from 'react';
import { useFeaturedTourmanentsFeed } from 'api/feeds';
import { useNavigate } from 'react-router-dom';
import FeaturedTournamentSlider from 'common/components/FeaturedTournamentSlider';
import PageContainer from 'common/components/PageContainer';
import { Option, Tab, Tabs } from 'common/ui';
import { InputSize } from 'common/ui/Input/Input.types';
import TournamentInfoCard from '../TournamentInfoCard/TournamentInfoCard';
// import TournamentsFilters from '../TournamentsFiltersModal/TournamentsFiltersModal';
import { Filter, filter, search } from './TournamentListView.model';
import {
  CrossIcon,
  FeaturedTournamentToggle,
  FilterBar as FilterBarOld,
  FilterBullet,
  FilterBullets,
  FilterButton,
  FilterControls,
  FilterSort,
  SearchInput,
  SelectArrow,
  TournamentGallery,
  TournamentList
} from './TournamentListView.styles';
import { Icons } from '@sourceempire/brawl-ui';
import { useTournamentHubListContext } from 'pages/tournament-list/context/TournamentHubListContext';
import { FilterBar } from '../FilterBar';

export default function TournamentListView() {
  return (
    <PageContainer>
      <Tabs underlined={true}>
        <Tab name="All Tournaments">
          <Page />
        </Tab>
        <Tab name="My Tournaments">
          <Page />
        </Tab>
      </Tabs>
    </PageContainer>
  );
}

function Page() {
  const [featuredExpanded, setFeaturedExpanded] = useState(true);
  const [activeFilters, setActiveFilters] = useState<Filter[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const searchQueryDeffered = useDeferredValue(searchQuery);
  const [filterModalOpen, setFilterModalOpen] = useState(false);

  const { feed: tournamentHubsFeed } = useTournamentHubListContext();
  const featuredTournamentFeed = useFeaturedTourmanentsFeed();

  function removeFilter(filter: Filter) {
    setActiveFilters((filters) =>
      filters.filter((f) => f.type !== filter.type || f.value !== filter.value)
    );
  }

  const navigate = useNavigate();

  // ADD SKELETON

  if (featuredTournamentFeed.loading || tournamentHubsFeed.loading) return null;

  const { featuredTournamentHubs } = featuredTournamentFeed.data;
  const { tournamentHubs } = tournamentHubsFeed.data;

  return (
    <PageContainer>
      {featuredTournamentHubs.length > 0 && (
        <>
          <FeaturedTournamentToggle onClick={() => setFeaturedExpanded((e) => !e)}>
            Featured Tournament
            <SelectArrow expanded={featuredExpanded} />
          </FeaturedTournamentToggle>
          <FeaturedTournamentSlider expanded={featuredExpanded} />
        </>
      )}
      <TournamentGallery
        featuredTournamentHubs={featuredTournamentHubs}
        featuredExpanded={featuredExpanded}>
        {/* <FilterBarOld>
          <FilterBullets>
            {activeFilters.map((filter) => (
              <FilterBullet key={filter.type + filter.value} onClick={() => removeFilter(filter)}>
                <CrossIcon />
                {filter.name}
              </FilterBullet>
            ))}
          </FilterBullets>
          <FilterControls>
            <SearchInput
              icon={<Icons.Search />}
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              size={InputSize.SMALL}
            />
            <FilterButton icon={<Icons.Filter />} onClick={() => setFilterModalOpen(true)}>
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
              <Option value="2">Price</Option>
              <Option value="3">c</Option>
            </FilterSort>
          </FilterControls>
        </FilterBarOld> */}

        <FilterBar />
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
    </PageContainer>
  );
}
