import styled, { css, keyframes } from 'styled-components/macro';
import { Icons } from 'common/components/Icon';
import { bounceAnimation, hsla } from 'utils/styledUtils';
import { StageStatus } from './CurrentMatchStage.types';

const animationTime = 0.3;

const slideIn = keyframes`
  from {
    transform: translateX(-150%) scaleX(1.5);
  } to {
    transform: translateX(50%) scaleX(1.5);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(50%) scaleX(1.5);
  } to {
    transform: translateX(150%) scaleX(1.5);
  }
`;

export const Wrapper = styled.div<{ preventAnimations: boolean }>`
  display: flex;
  transform: translateY(-6px);
  align-items: center;
  ${({ preventAnimations }) =>
    preventAnimations &&
    css`
      * {
        animation-duration: 0s !important;
        transition: none !important;
        animation-delay: 0s !important;
      }
    `}
`;

export const Stage = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const StageDot = styled.div<{ status: StageStatus }>`
  z-index: 1;
  position: relative;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color ${animationTime}s, border ${animationTime}s;

  ${({ theme, status }) => css`
    width: ${theme.spacing.base * 1.7}px;
    height: ${theme.spacing.base * 1.7}px;
    border: 3px solid ${theme.colors.surfaceElement.hover};

    ${(status === StageStatus.ONGOING || status === StageStatus.COMPLETED) &&
    css`
      border: 0 solid ${hsla(theme.colors.surfaceElement.hover, 0)};
    `}

    ${status === StageStatus.ONGOING &&
    css`
      background-color: ${theme.colors.accent.base};
      animation: ${bounceAnimation(1, 2.7, 2)} ${animationTime}s ${animationTime * 0.5}s linear
        forwards;
    `}

    ${status === StageStatus.COMPLETED &&
    css`
      transform: scale(2);
      background-color: ${theme.colors.surfaceElement.hover};
    `}
  `}
`;

export const CheckIcon = styled(Icons.Check)`
  height: 4px;
  width: 6px;
  animation: ${bounceAnimation(0, 1.3, 1)} ${animationTime}s forwards;
  ${({ theme }) => css`
    fill: ${theme.colors.icon.base};
  `}
`;

export const Edge = styled.div<{ fadeIn: boolean; fadeOut: boolean; preventAnimations: boolean }>`
  position: relative;
  width: 52px;
  height: 2px;
  overflow: hidden;
  ${({ theme, fadeIn, fadeOut, preventAnimations }) => css`
    background-color: ${theme.colors.surfaceElement.hover};

    :after,
    :before {
      ${preventAnimations &&
      css`
        animation-duration: 0s !important;
      `}

      position: absolute;
      inset: 0;
      background-image: linear-gradient(
        -90deg,
        ${theme.colors.surfaceElement.hover},
        ${theme.colors.accent.base},
        ${theme.colors.surfaceElement.hover}
      );
    }

    ${fadeIn &&
    css`
      :before {
        content: '';
        animation: ${slideIn} ${animationTime}s forwards;
      }
    `}
    ${fadeOut &&
    css`
      :after {
        content: '';
        animation: ${slideOut} ${animationTime}s forwards;
      }
    `}
  `}
`;

export const StageName = styled.div`
  position: absolute;
  bottom: 0;
  transform: translateY(150%);

  ${({ theme }) => css`
    ${theme.textStyles.note}
    color: ${theme.colors.textPrimaryLight}
  `}
`;
