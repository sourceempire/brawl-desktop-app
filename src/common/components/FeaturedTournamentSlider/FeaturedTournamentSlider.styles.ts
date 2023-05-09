import styled, { css } from 'styled-components';
import { PopupLevel } from 'common/popup/Popup.types';
import { Animation, Icons } from 'common/ui';
import { Hero } from 'pages/tournament-list/components/FeaturedTournament/FeaturedTournament.styles';

export const Slider = styled.div`
  ${({ theme }) => css`
    position: relative;
    overflow: hidden;
    height: 250px;
    width: 100%;
    border-radius: ${theme.borderRadius.default};
  `}

  :hover ${Hero}::before {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const SliderContainer = styled.div<{ width: number }>`
  ${({ width }) => css`
    height: 100%;
    display: flex;
    width: ${width}%;
    transition: transform 0.3s ease-in-out;
  `}
`;

export const SliderButtonContainer = styled.div<{
  visible?: boolean;
  leftContainer?: boolean;
  rightContainer?: boolean;
}>`
  ${({ theme, visible, leftContainer, rightContainer }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: ${rightContainer ? 0 : 100};
    height: 100%;
    width: 20px;
    transition: transform 0.3s;
    transform: translateY(-${visible ? 0 : 100}%);
    fill: ${theme.colors.white};
    margin-left: ${leftContainer ? theme.spacing.baseX3 : 0}px;
    margin-right: ${rightContainer ? theme.spacing.baseX3 : 0}px;
  `}
`;

export const SliderButtonPrev = styled(Icons.ArrowLeft)<{ visible?: boolean }>`
  ${({ theme }) => css`
    width: 20px;
    fill: ${theme.colors.white};
  `}
`;

export const SliderButtonNext = styled(Icons.ArrowRight)<{ visible?: boolean }>`
  ${({ theme }) => css`
    width: 20px;
    fill: ${theme.colors.white};
  `}
`;

export const Dots = styled.div<{ visible?: boolean }>`
  ${({ theme, visible }) => css`
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    justify-content: center;
    display: flex;
    align-items: flex-end;
    margin-bottom: ${theme.spacing.baseX3}px;
    transition: transform 0.3s;
    transform: translateY(-${visible ? 0 : 100}%);
    pointer-events: none;
  `}
`;

export const DotContainer = styled.div<{ active: boolean }>`
  ${({ active }) => css`
    height: 20px;
    width: 20px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    /* position the TimerAnimation in the center of the active Dot */
    &:nth-child(${active ? '2' : '1'}) {
      .timer-animation {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  `}
`;

export const Dot = styled.div<{ active: boolean }>`
  ${({ theme, active }) => css`
    background-color: ${active ? theme.colors.white : theme.colors.surface.base};
    border-radius: 50%;
    height: 10px;
    width: 10px;

    pointer-events: all;
  `}
`;

export const TimerAnimation = styled(Animation)<{ level: PopupLevel }>`
  height: 20px;
  width: 20px;
  top: 50%;
  position: absolute;
  transform: translateY(-50%);
`;
