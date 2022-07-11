import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const LinkText = styled.div<{ isUpcomingFeature?: boolean }>`
  font-weight: bold;
  font-size: 21px;
  color: #ffffff;
`;

export const UpcomingFeatureBanner = styled.div`
  position: absolute;
  padding: 6px;
  color: #ffffff;
  font-size: 12px;
  right: 0;
  bottom: 0;
  transform: translate(20%, 70%) rotate(-5deg);
  opacity: 0.9;
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
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
