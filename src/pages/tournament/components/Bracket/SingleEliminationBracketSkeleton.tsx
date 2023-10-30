import {
  Wrapper,
  Team1,
  Team2,
  TeamLogo,
  TeamLogoImage,
  TeamName,
  TeamScore
} from '../BracketMatch/BracketMatch.styles';
import { Container, Wrapper as WrapperBracket } from './Bracket.styles';
import { Matches, Round, RoundName } from './SingleEliminationBracket.styles';
import placeholderTeamLogo from 'assets/images/placeholder-team-logo.png';

type Props = {
  numberOfTeams?: number;
};

const SingleEliminationBracketSkeleton = ({ numberOfTeams }: Props) => {
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
    const finalRoundIndex = listOfRounds.length - 1;
    const numRounds = Math.log2(numberOfTeams);

    for (let i = finalRoundIndex - numRounds + 1; i <= finalRoundIndex; i++) {
      const round = {
        roundName: listOfRounds[i],
        matches: Math.pow(2, finalRoundIndex - i)
      };
      rounds.push(round);
    }
  }

  const renderTeam = () => (
    <>
      <Team1 matchOutcome={null}>
        <TeamLogo>
          <TeamLogoImage src={placeholderTeamLogo} />
        </TeamLogo>
        <TeamName>-</TeamName>
        <TeamScore winner={false}></TeamScore>
      </Team1>
      <Team2>
        <TeamLogo>
          <TeamLogoImage src={placeholderTeamLogo} />
        </TeamLogo>
        <TeamName>-</TeamName>
        <TeamScore winner={false}></TeamScore>
      </Team2>
    </>
  );

  return (
    <Container>
      <WrapperBracket>
        {rounds.map((round, roundIndex) => (
          <Round key={round.roundName}>
            <RoundName active={false}>{round.roundName}</RoundName>
            <Matches matchCount={round.matches} roundIndex={roundIndex}>
              {[...Array(round.matches)].map((_, i) => (
                <Wrapper
                  key={i}
                  matchIndex={i}
                  roundIndex={roundIndex}
                  isFinal={roundIndex + 1 === rounds.length}
                  isFirstMatch={roundIndex === 0}
                  isMatchOver={false}>
                  {renderTeam()}
                </Wrapper>
              ))}
              {roundIndex + 1 === rounds.length && (
                <Wrapper
                  key={roundIndex}
                  matchIndex={roundIndex}
                  roundIndex={roundIndex}
                  isFinal={roundIndex + 1 === rounds.length}
                  isFirstMatch={true}
                  isMatchOver={false}>
                  {renderTeam()}
                </Wrapper>
              )}
            </Matches>
          </Round>
        ))}
      </WrapperBracket>
    </Container>
  );
};

export default SingleEliminationBracketSkeleton;
