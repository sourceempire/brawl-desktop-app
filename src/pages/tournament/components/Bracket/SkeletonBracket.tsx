import {
  Team1,
  Team2,
  TeamLogo,
  TeamLogoImage,
  TeamName,
  TeamScore
} from '../BracketMatch/BracketMatch.styles';
import { Wrapper } from './Bracket.styles';
import { Matches, Round, RoundName } from './SingleEliminationBracket.styles';
import placeholderTeamLogo from 'assets/images/placeholder-team-logo.png';

type Props = {
  type?: string;
  numberOfTeams?: number;
};

const SkeletonBracket = ({ type, numberOfTeams }: Props) => {
  const rounds = [];
  const listOfRounds = [
    'Round of 256',
    'Round of 128',
    'Round of 64',
    'Round of 32',
    'Round of 16',
    'Quarter finals',
    'Semi finals',
    'Final'
  ];
  if (numberOfTeams) {
    for (let i = 0; i < numberOfTeams / 2; i++) {
      const round = {
        roundName: listOfRounds.reverse()[i],
        matches: [i] // Placeholder for matches, you should populate this array with actual match data
      };
      rounds.push(round);
    }
  }

  return (
    <Wrapper>
      {rounds.map((round, roundIndex) => (
        <Round key={round.roundName}>
          <RoundName>{round.roundName}</RoundName>
          <Matches matchCount={round.matches.length} roundIndex={roundIndex}>
            {round.matches.map((match, matchIndex) => {
              {
                console.log('test');
              }
              return (
                <Wrapper key={matchIndex}>
                  <Team1 matchOutcome={null}>
                    <TeamLogo>
                      <TeamLogoImage src={placeholderTeamLogo} />
                    </TeamLogo>
                    <TeamName>-</TeamName>
                    <TeamScore></TeamScore>
                  </Team1>
                  <Team2>
                    <TeamLogo>
                      <TeamLogoImage src={placeholderTeamLogo} />
                    </TeamLogo>
                    <TeamName>-</TeamName>
                    <TeamScore></TeamScore>
                  </Team2>
                </Wrapper>
              );
            })}
          </Matches>
        </Round>
      ))}
    </Wrapper>
  );
};

export default SkeletonBracket;
