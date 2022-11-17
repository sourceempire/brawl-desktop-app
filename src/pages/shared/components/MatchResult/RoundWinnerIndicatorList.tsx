import { Fragment, MutableRefObject, useRef } from 'react';
import { CSGORoundEndReason, CSGORoundResult, CSGOTeamSide } from 'types/match/Match';
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

const RoundWinnerIndicatorList = ({ team1, team2, gameMode }: Props) => {
  const scrollContainerRef = useRef() as MutableRefObject<HTMLDivElement>;

  // MOCK
  // TODO -> Create feed for round results
  const roundResults: CSGORoundResult[] = Array(16)
    .fill('')
    .map(() => ({
      winner: [team1.id, team2.id][Math.floor(Math.random() * 2)],
      side: [CSGOTeamSide.T, CSGOTeamSide.CT][Math.floor(Math.random() * 2)],
      reason: Object.values(CSGORoundEndReason)[Math.floor(Math.random() * 4)]
    }));

  return (
    <Wrapper>
      <ScrollContainer ref={scrollContainerRef}>
        {roundResults.map((roundResult, index) => {
          const totalRoundCount = gameModeRoundCount[gameMode];
          const currentRound = index + 1;

          const isSideSwapRound =
            currentRound <= totalRoundCount
              ? currentRound % (totalRoundCount / 2) === 0
              : (currentRound - totalRoundCount) % 3 === 0;

          const isLastRound = roundResults.length === currentRound;
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
