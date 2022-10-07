import { Match, isCSGOMatch } from 'types/match/Match';

type Options = {
  match: Match;
  teamId?: string;
};

const useTeamScore = ({ match, teamId }: Options) => {
  if (!teamId) return null;

  if (isCSGOMatch(match) && match.mapsInfo?.[0]?.score && teamId) {
    return match.mapsInfo[0].score && match.mapsInfo[0].score[teamId];
  }

  return null;
};

export default useTeamScore;
