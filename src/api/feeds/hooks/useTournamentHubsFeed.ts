import { useFeed } from '@sourceempire/brawl-websocket';
import { TournamentHub } from 'types/tournaments/TournamentInfo';

type FeedQueryParams = { searchString?: string };

export default function useTournamentHubsFeed(params: FeedQueryParams = {}) {
  const queryParams = feedQueryParamsToString(params);
  return useFeed<{ tournamentHubs: TournamentHub[] }>(`tournament.hubs${queryParams}`);
}

function feedQueryParamsToString(
  params: Record<string, string | boolean | number | undefined | null>
): string {
  const filteredParamEntries = Object.entries(params).filter(
    ([_, value]) => value !== null && value !== undefined && value !== ''
  );

  if (filteredParamEntries.length === 0) return '';

  return `?${filteredParamEntries.map(([key, value]) => `${key}=${value}`).join('&')}`;
}
