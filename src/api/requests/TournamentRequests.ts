import Fetcher from 'api/Fetcher';
import { Bracket } from 'types/tournaments/Bracket';
import { Tournament } from 'types/tournaments/TournamentInfo';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

/**
 * If tournamentHubId is provided, a tournament that the logged
 * in user is part of will be fetched, if there is one.
 *
 * If touramentId is provided, it will override tournamentHubId.
 *
 * Throws an error if no tournament is found (no_such_tournament).
 *
 * one of tournamentHubId or tournamentId is needed
 *
 * @param params {tournamentId?: string, tournamentHubId?: string}
 * @throws no_such_tournament || no_id_provided
 */
export const getTournament = (params: {
  tournamentHubId?: string;
  tournamentId?: string;
  matchId?: string;
}) => Fetcher.get<{ tournament: Tournament }>(`${SERVER_URL}/api/tournament`, params);

export const joinTournament = (tournamentHubId: string) =>
  Fetcher.post(`${SERVER_URL}/api/tournament/join`, { tournamentHubId });

export const getBracket = (tournamentId: string) =>
  Fetcher.get<{ bracket: Bracket }>(`${SERVER_URL}/api/tournament/bracket`, { tournamentId });

export const getTournamentByMatchId = (matchId: string) => getTournament({ matchId });
