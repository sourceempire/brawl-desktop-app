import { useEffect, useState } from 'react';
import useMatchFeed from 'api/feeds/hooks/useMatchFeed';
import { CSGOMatchStage, isCSGOMatch } from 'types/match/Match';
import { CheckIcon, Edge, Stage, StageDot, StageName, Wrapper } from './CurrentMatchStage.styles';
import { StageStatus } from './CurrentMatchStage.types';

type Props = {
  matchId: string;
};

const CurrentMatchStage = ({ matchId }: Props) => {
  const { match } = useMatchFeed(matchId);

  const [preventAnimations, setPreventAnimations] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setPreventAnimations(false), 1000);
  }, []);

  if (!isCSGOMatch(match)) {
    return null;
  }

  const readyStageStatus = getReadyStageStatus(match.matchStage);
  const vetoStageStatus = getVetoStageStatus(match.matchStage);
  const matchStageStatus = getMatchStageStatus(match.matchStage);

  return (
    <Wrapper preventAnimations={preventAnimations}>
      <Stage>
        <StageDot status={readyStageStatus}>
          {readyStageStatus === StageStatus.COMPLETED && <CheckIcon />}
        </StageDot>
        <StageName>Ready</StageName>
      </Stage>

      <Edge
        fadeIn={vetoStageStatus === StageStatus.ONGOING}
        fadeOut={vetoStageStatus === StageStatus.COMPLETED}
        preventAnimations={preventAnimations}
      />

      <Stage>
        <StageDot status={vetoStageStatus}>
          {vetoStageStatus === StageStatus.COMPLETED && <CheckIcon />}
        </StageDot>
        <StageName>Veto</StageName>
      </Stage>

      <Edge
        fadeIn={matchStageStatus === StageStatus.ONGOING}
        fadeOut={matchStageStatus === StageStatus.COMPLETED}
        preventAnimations={preventAnimations}
      />

      <Stage>
        <StageDot status={matchStageStatus}>
          {matchStageStatus === StageStatus.COMPLETED && <CheckIcon />}
        </StageDot>
        <StageName>Match</StageName>
      </Stage>
    </Wrapper>
  );
};

export default CurrentMatchStage;

function getReadyStageStatus(currentStage: CSGOMatchStage) {
  switch (currentStage) {
    case CSGOMatchStage.NOT_STARTED:
      return StageStatus.NOT_STARTED;
    case CSGOMatchStage.READY:
      return StageStatus.ONGOING;
    default:
      return StageStatus.COMPLETED;
  }
}

function getVetoStageStatus(currentStage: CSGOMatchStage) {
  switch (currentStage) {
    case CSGOMatchStage.NOT_STARTED:
    case CSGOMatchStage.READY:
      return StageStatus.NOT_STARTED;
    case CSGOMatchStage.VETO:
    case CSGOMatchStage.STARTING_MATCH:
      return StageStatus.ONGOING;
    default:
      return StageStatus.COMPLETED;
  }
}

function getMatchStageStatus(currentStage: CSGOMatchStage) {
  switch (currentStage) {
    case CSGOMatchStage.NOT_STARTED:
    case CSGOMatchStage.READY:
    case CSGOMatchStage.VETO:
      return StageStatus.NOT_STARTED;
    case CSGOMatchStage.ONGOING:
      return StageStatus.ONGOING;
    default:
      return StageStatus.COMPLETED;
  }
}
