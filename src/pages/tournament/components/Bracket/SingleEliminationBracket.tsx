import { SingleEliminationBracket as SingleEliminationBracketType } from 'types/tournaments/Bracket';
import BracketMatch from '../BracketMatch';
import { Wrapper } from './Bracket.styles';
import { Matches, Round, RoundHeader, RoundName } from './SingleEliminationBracket.styles';

type Props = {
  bracket: SingleEliminationBracketType;
};

const SingleEliminationBracket = ({ bracket }: Props) => {
  return (
    <Wrapper>
      {bracket.bracketStructure.map((round, roundIndex) => {
        const gridCount = round.matches.filter((match, matchIndex) => {
          const isFinalRound = match.nextMatchIndex === null;
          const isThirdPlaceMatch = isFinalRound && matchIndex === 1;
          return !isThirdPlaceMatch;
        }).length;

        return (
          <Round key={round.roundName}>
            <RoundHeader>
              <RoundName active={!bracket.isFinished && bracket.currentRoundIndex === roundIndex}>
                {round.roundName}
              </RoundName>
            </RoundHeader>
            <Matches matchCount={gridCount} roundIndex={roundIndex}>
              {round.matches.map((match, matchIndex) => {
                const isFirstRound = roundIndex === 0;
                const isSecondRound = roundIndex === 1;

                const isDirectQuilificationMatch =
                  isSecondRound &&
                  !bracket.bracketStructure[0].matches.some(
                    (match) => match.nextMatchIndex === matchIndex
                  );

                const isFirstMatch = isFirstRound || isDirectQuilificationMatch;

                const isFinalRound = match.nextMatchIndex === null;
                const isThirdPlaceMatch = isFinalRound && matchIndex === 1;

                if (!match.matchId) {
                  return (
                    <BracketMatch.Skeleton
                      key={matchIndex}
                      matchIndex={matchIndex}
                      roundIndex={roundIndex}
                      isFirstMatch={isFirstMatch}
                      isFinal={match.nextMatchIndex === null}
                      isThirdPlaceMatch={isThirdPlaceMatch}
                    />
                  );
                }

                return (
                  <BracketMatch
                    matchId={match.matchId}
                    key={match.matchId}
                    matchIndex={matchIndex}
                    roundIndex={roundIndex}
                    isFirstMatch={isFirstMatch}
                    isFinal={match.nextMatchIndex === null}
                    isThirdPlaceMatch={isThirdPlaceMatch}
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
