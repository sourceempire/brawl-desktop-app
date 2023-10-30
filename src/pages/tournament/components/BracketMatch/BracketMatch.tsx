import useMatchFeed from 'api/feeds/hooks/useMatchFeed';
import { useLoggedInUser } from 'common/hooks';
import { getMatchOutcome, getTeamScore } from 'utils/matchUtils';
import {
  Team1,
  Team2,
  TeamLogo,
  TeamLogoImage,
  TeamName,
  TeamScore,
  Wrapper
} from './BracketMatch.styles';
import { MatchOutcome } from './BracketMatch.types';
import placeholderTeamLogo from 'assets/images/placeholder-team-logo.png';

type Props = {
  matchId: string;
  matchIndex: number;
  roundIndex: number;
  isFirstMatch: boolean;
  isFinal: boolean;
};

const BracketMatch = (/*{ matchId, matchIndex, roundIndex, isFirstMatch, isFinal }: Props*/) => {
  const user = useLoggedInUser();
  // const { match, isLoading } = useMatchFeed({ matchId });
  // const {
  //   hasMatchStats,
  //   matchStats,
  //   isLoading: isLoadingMatchStats
  // } = useMatchStatsFeed({ matchId });

  // if (isLoading) return null; // TODO -> add bracket match skeleton?

  // const team1Score = hasMatchStats ? getTeamScore({ matchStats, teamId: match.team1.id }) : null;
  // const team2Score = hasMatchStats ? getTeamScore({ matchStats, teamId: match.team2.id }) : null;

  let teamIdOfLoggedInUser;

  // if (match.team1?.players.includes(user.id)) {
  //   teamIdOfLoggedInUser = match.team1.id;
  // } else if (match.team2?.players.includes(user.id)) {
  //   teamIdOfLoggedInUser = match.team2.id;
  // }

  // const loggedInUserMatchOutcome =
  //   hasMatchStats && teamIdOfLoggedInUser
  //     ? getMatchOutcome({ teamIdOfLoggedInUser, matchStats })
  //     : MatchOutcome.NotDecided;

  // if (isLoading || isLoadingMatchStats) return null;

  return (
    <div />
    // <Wrapper
    //   matchIndex={matchIndex}
    //   roundIndex={roundIndex}
    //   isFinal={isFinal}
    //   isFirstMatch={isFirstMatch}
    //   isMatchOver={hasMatchStats}>
    //   <Team1
    //     matchOutcome={match.team1?.id === teamIdOfLoggedInUser ? loggedInUserMatchOutcome : null}>
    //     <TeamLogo>
    //       <TeamLogoImage src={placeholderTeamLogo} />
    //     </TeamLogo>
    //     <TeamName>{match.team1?.teamName}</TeamName>
    //     <TeamScore winner={matchStats.winner === match.team1?.id}>{team1Score}</TeamScore>
    //   </Team1>
    //   <Team2
    //     matchOutcome={match.team2?.id === teamIdOfLoggedInUser ? loggedInUserMatchOutcome : null}>
    //     <TeamLogo>
    //       <TeamLogoImage src={placeholderTeamLogo} />
    //     </TeamLogo>
    //     <TeamName>{match.team2?.teamName}</TeamName>
    //     <TeamScore winner={matchStats.winner === match.team2?.id}>{team2Score}</TeamScore>
    //   </Team2>
    // </Wrapper>
  );
};

export default BracketMatch;
