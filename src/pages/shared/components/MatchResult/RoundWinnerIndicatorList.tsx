import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { CSGOGameModes } from 'types/MatchSettings';
import { Team } from 'types/team/Team';
import {
  CSGORoundResult,
  CSGOTeamSide,
  MiddleLine,
  RoundWinnerIndicator,
  ScrollContainer,
  SideSwapIndicator,
  Wrapper
} from './RoundWinnerIndicatorList.styles';

const { COMPETITIVE, WINGMAN, ONE_VS_ONE } = CSGOGameModes;

const gameModeRoundCount = {
  [COMPETITIVE]: 30,
  [WINGMAN]: 16,
  [ONE_VS_ONE]: 8
};

type Props = {
  gameMode: CSGOGameModes;
  team1: Team;
  team2: Team;
};

const RoundWinnerIndicatorList = ({ team1, team2, gameMode }: Props) => {
  const [middleLineHeight, setMiddleLineHeight] = useState<number>(0);
  const scrollContainerRef = useRef() as MutableRefObject<HTMLDivElement>;

  // MOCK
  // TODO -> Create feed for round results
  const roundResults: CSGORoundResult[] = Array(40)
    .fill('')
    .map(() => ({
      winner: [team1.id, team2.id][Math.floor(Math.random() * 2)],
      side: [CSGOTeamSide.T, CSGOTeamSide.CT][Math.floor(Math.random() * 2)]
    }));

  useEffect(() => {
    setMiddleLineHeight(scrollContainerRef.current.scrollHeight);
  }, [roundResults]);

  return (
    <Wrapper>
      <ScrollContainer ref={scrollContainerRef}>
        <div>
          {roundResults.map((roundResult, index) => {
            const currentRound = index + 1;
            let sideSwapRound: number;
            let modulu: number;

            if (currentRound > gameModeRoundCount[gameMode]) {
              sideSwapRound = 3;
              modulu = 1;
            } else {
              sideSwapRound = gameModeRoundCount[gameMode] / 2;
              modulu = 0;
            }

            const isLastRound = roundResults.length === currentRound;
            const isSideSwapRound = currentRound % sideSwapRound === modulu;
            const showSideSwapRound = isSideSwapRound && !isLastRound;

            return (
              <>
                <RoundWinnerIndicator
                  key={index}
                  side={roundResult.side}
                  position={roundResult.winner === team1.id ? 'left' : 'right'}
                />
                {showSideSwapRound && <SideSwapIndicator />}
              </>
            );
          })}
          <MiddleLine height={middleLineHeight} />
        </div>
      </ScrollContainer>

      {/* <BottomShadow /> */}
    </Wrapper>
  );
};

export default RoundWinnerIndicatorList;
