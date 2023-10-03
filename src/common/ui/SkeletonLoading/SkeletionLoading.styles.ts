import { css } from '@emotion/react';
import { theme } from 'assets/styles/Theme';

export const skeletonLoadingStyle = css`
  position: relative;
  background-color: #fff0ff30;
  overflow: hidden;

  border-radius: ${theme.borderRadius.default};

  :before {
    content: '';
    position: absolute;
    background: linear-gradient(90deg, transparent, #fff0ff40 65%, transparent);
    inset: 0;
    animation: loading 2s infinite ease-out;
  }

  @keyframes loading {
    0% {
      transform: translateX(-100%);
    }
    70%,
    100% {
      transform: translateX(100%);
    }
  }
`;
