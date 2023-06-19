import { useDeferredValue, useState } from 'react';
import { useFeaturedTourmanentsFeed } from 'api/feeds';
import useTournamentHubsFeed from 'api/feeds/hooks/useTournamentHubsFeed';
import { useNavigate } from 'react-router-dom';
import FeaturedTournamentSlider from 'common/components/FeaturedTournamentSlider';
import PageContainer from 'common/components/PageContainer';
import { IconEnum, Icons, Option, Tab, Tabs } from 'common/ui';
import { InputSize } from 'common/ui/Input/Input.types';
import TournamentInfoCard from '../TournamentInfoCard/TournamentInfoCard';
import TournamentsFilters from '../TournamentsFiltersModal/TournamentsFiltersModal';
import { Filter, filter, search } from './TournamentListView.model';
import {
  CrossIcon,
  FeaturedTournamentToggle,
  FilterBar,
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
import { theme } from 'assets/styles/Theme';

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

  const { tournamentHubs, isLoadingTournamentHubs } = useTournamentHubsFeed();
  const { featuredTournamentHubs, isLoadingFeaturedTournaments } = useFeaturedTourmanentsFeed();

  function removeFilter(filter: Filter) {
    setActiveFilters((filters) =>
      filters.filter((f) => f.type !== filter.type || f.value !== filter.value)
    );
  }

  const navigate = useNavigate();

  // ADD SKELETON
  if (isLoadingFeaturedTournaments || isLoadingTournamentHubs) return null;

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
        <FilterBar>
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
              icon={<Icons.Search fill={theme.colors.white} height={14} />}
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
              <Option value="2">Price</Option>
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
    </PageContainer>
  );
}
