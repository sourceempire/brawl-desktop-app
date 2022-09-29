import { useEffect, useState } from 'react';
import { CheckIcon, Edge, Stage, StageDot, StageName, Wrapper } from './CurrentMatchStage.styles';
import { MatchStage, StageStatus } from './CurrentMatchStage.types';

type Props = {
  currentStage: MatchStage;
};

const CurrentMatchStage = ({ currentStage }: Props) => {
  const [preventAnimations, setPreventAnimations] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => setPreventAnimations(false), 1000);
  }, []);

  const readyStageStatus = getReadyStageStatus(currentStage);
  const vetoStageStatus = getVetoStageStatus(currentStage);
  const matchStageStatus = getMatchStageStatus(currentStage);

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

function getReadyStageStatus(currentStage: MatchStage) {
  switch (currentStage) {
    case MatchStage.WAITING:
      return StageStatus.NOT_STARTED;
    case MatchStage.READY:
      return StageStatus.ONGOING;
    default:
      return StageStatus.COMPLETED;
  }
}

function getVetoStageStatus(currentStage: MatchStage) {
  switch (currentStage) {
    case MatchStage.WAITING:
    case MatchStage.READY:
      return StageStatus.NOT_STARTED;
    case MatchStage.VETO:
      return StageStatus.ONGOING;
    default:
      return StageStatus.COMPLETED;
  }
}

function getMatchStageStatus(currentStage: MatchStage) {
  switch (currentStage) {
    case MatchStage.WAITING:
    case MatchStage.READY:
    case MatchStage.VETO:
      return StageStatus.NOT_STARTED;
    case MatchStage.MATCH:
      return StageStatus.ONGOING;
    default:
      return StageStatus.COMPLETED;
  }
}
