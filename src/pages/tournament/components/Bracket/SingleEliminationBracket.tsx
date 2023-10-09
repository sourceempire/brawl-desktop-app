import { SingleEliminationBracket as SingleEliminationBracketType } from 'types/tournaments/Bracket';
import BracketMatch from '../BracketMatch';
import { Wrapper } from './Bracket.styles';
import { Matches, Round, RoundName } from './SingleEliminationBracket.styles';

type Props = {
  bracket: SingleEliminationBracketType;
  gameId: string;
};

const SingleEliminationBracket = ({ bracket, gameId }: Props) => {
  return (
    <Wrapper>
      {bracket.bracketStructure.map((round, roundIndex) => {
        return (
          <Round key={round.roundName}>
            <RoundName active={bracket.currentRoundIndex === roundIndex}>
              {round.roundName}
            </RoundName>
            <Matches matchCount={round.matches.length} roundIndex={roundIndex}>
              {round.matches.map((match, matchIndex) => {
                const isFirstMatch =
                  roundIndex === 0 ||
                  (roundIndex === 1 &&
                    !bracket.bracketStructure[0].matches
                      .map((m) => m.nextMatchIndex)
                      .includes(matchIndex));

                return (
                  <BracketMatch
                    matchId={match.matchId}
                    key={match.matchId}
                    matchIndex={matchIndex}
                    roundIndex={roundIndex}
                    isFirstMatch={isFirstMatch}
                    isFinal={match.nextMatchIndex === null}
                    gameId={gameId}
                  />
                );
              })}
            </Matches>
          </Round>
        );
      })}
    </Wrapper>
  );
};

export default SingleEliminationBracket;
