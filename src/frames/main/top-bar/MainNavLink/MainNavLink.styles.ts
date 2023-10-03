import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const LinkText = styled.div<{ isUpcomingFeature?: boolean }>`
  font-weight: bold;
  font-size: 21px;
  ${({ theme }) => css`
    color: ${theme.colors.textPrimaryLight};
  `}
`;

export const UpcomingFeatureBanner = styled.div`
  position: absolute;
  padding: 6px;

  font-size: 12px;
  right: 0;
  bottom: 0;
  transform: translate(20%, 70%) rotate(-5deg);
  opacity: 0.9;
  ${({ theme }) => css`
    color: white;
    background-color: ${theme.colors.primary.base};
  `};
`;

export const Wrapper = styled(NavLink)<{ isUpcomingFeature?: boolean }>`
  position: relative;

  margin-right: 24px;
  text-decoration: none;

  ${({ isUpcomingFeature }) =>
    isUpcomingFeature &&
    css`
      pointer-events: none;
      ${LinkText} {
        opacity: 0.5;
      }
    `}
`;
