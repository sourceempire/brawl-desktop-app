import { Fragment, MutableRefObject, useEffect, useRef } from 'react';
import { CSGORoundEndReason, CSGORoundResult, CSGOTeamSide, RoundWin } from 'types/match/Match';
import { CSGOGameModes } from 'types/MatchSettings';
import { Team } from 'types/team/Team';
import {
  RoundNumber,
  RoundWinner,
  ScrollContainer,
  SideSwapIndicator,
  Wrapper
} from './RoundWinnerIndicatorList.styles';
import Icons from 'assets/icons/Icons';

const { COMPETITIVE, WINGMAN, ONE_VS_ONE } = CSGOGameModes;
const { ELIMINATION, EXPLODE, DEFUSE, TIME } = CSGORoundEndReason;

const gameModeRoundCount = {
  [COMPETITIVE]: 30,
  [WINGMAN]: 16,
  [ONE_VS_ONE]: 8
};

type Props = {
  gameMode: CSGOGameModes;
  roundWins: RoundWin[];
  team1: Team;
  team2: Team;
};

const RoundWinnerIcon = ({ reason }: { reason: CSGORoundEndReason }) => {
  switch (reason) {
    case ELIMINATION:
      return <Icons.Skull fill="white" height={15} />;
    case EXPLODE:
      return <Icons.Explosion fill="white" height={15} />;
    case DEFUSE:
      return <Icons.DefuseKit fill="white" height={15} />;
    case TIME:
      return <Icons.Clock fill="white" height={15} />;
  }
};

const RoundWinnerIndicatorList = ({ team1, team2, roundWins, gameMode }: Props) => {
  const scrollContainerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    scrollContainerRef.current.scrollTo({ top: 1000, behavior: 'smooth' });
  }, [roundWins.length]);

  return (
    <Wrapper>
      <ScrollContainer ref={scrollContainerRef}>
        {roundWins.map((roundResult, index) => {
          const totalRoundCount = gameModeRoundCount[gameMode];
          const currentRound = index + 1;

          const isSideSwapRound =
            currentRound <= totalRoundCount
              ? currentRound % (totalRoundCount / 2) === 0
              : (currentRound - totalRoundCount) % 3 === 0;

          const isLastRound = roundWins.length === currentRound;
          const showSideSwapDelimiter = isSideSwapRound && !isLastRound;

          return (
            <Fragment key={index}>
              <RoundWinner
                side={roundResult.side}
                position={roundResult.winner === team1.id ? 'left' : 'right'}>
                <RoundWinnerIcon reason={roundResult.reason} />
                <RoundNumber>{index + 1}</RoundNumber>
              </RoundWinner>

              {showSideSwapDelimiter && <SideSwapIndicator />}
            </Fragment>
          );
        })}
      </ScrollContainer>
    </Wrapper>
  );
};

export default RoundWinnerIndicatorList;
