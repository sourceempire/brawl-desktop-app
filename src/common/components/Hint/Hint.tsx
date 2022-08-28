import ContextMenu from '../ContextMenu';
import { ArrowPosition, ContextMenuRef, Position } from '../ContextMenu/ContextMenu.types';
import { Wrapper } from './Hint.styles';

type HintProps = {
  hintText?: string;
  contextRef: React.MutableRefObject<ContextMenuRef>;
  hintPosition: Position;
  contextArrowPosition?: ArrowPosition;
  isVisible: boolean;
};

export const Hint = ({
  hintText,
  contextRef,
  hintPosition,
  contextArrowPosition,
  isVisible
}: HintProps) => {
  return isVisible && hintText ? (
    <ContextMenu ref={contextRef} position={hintPosition} arrowPosition={contextArrowPosition}>
      <Wrapper>{hintText}</Wrapper>
    </ContextMenu>
  ) : null;
};
