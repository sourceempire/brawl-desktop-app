import {
  BracketType,
  SingleEliminationBracket as SingleEliminationBracketType
} from 'types/tournaments/Bracket';
import BracketMatch from '../BracketMatch';
import { Wrapper } from './Bracket.styles';
import { Matches, Round, RoundName } from './SingleEliminationBracket.styles';

type Props = {
  bracket: SingleEliminationBracketType;
};

const bracketMock: SingleEliminationBracketType = {
  currentRoundIndex: 0,
  numberOfRounds: 4,
  isFinished: false,
  tournamentId: '',
  type: BracketType.SINGLE_ELIMINATION,
  bracketStructure: [
    {
      matches: [{ matchId: 'feddee07-6619-431d-b248-275c5adcf25d', nextMatchIndex: 0 }],
      roundName: 'Round of 16'
    },
    {
      roundName: 'Quarter Finals',
      matches: [
        { matchId: '41c0afea-a608-401b-95de-6244288be0aa', nextMatchIndex: 0 },
        { matchId: '30233773-7796-4c35-bc23-01dee98ef7ff', nextMatchIndex: 0 },
        { matchId: '8e1246f5-3d92-4918-88bd-c4561b5bfe97', nextMatchIndex: 1 },
        { matchId: '3adb592c-258f-4472-8574-e2403d3339be', nextMatchIndex: 1 }
      ]
    },
    {
      roundName: 'Semi Finals',
      matches: [
        { matchId: 'fb43854e-3ccd-4967-9e03-874a8b0e94f2', nextMatchIndex: 0 },
        { matchId: '63e1a5e0-c6c1-4ac8-9647-98f353630580', nextMatchIndex: 0 }
      ]
    },
    {
      roundName: 'Final',
      matches: [{ matchId: 'b532918c-5b46-4e33-9e78-e369b1493ad5', nextMatchIndex: null }]
    }
  ]
};

const SingleEliminationBracket = ({ bracket }: Props) => {
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
