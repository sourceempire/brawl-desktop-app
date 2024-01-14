import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { theme } from 'assets/styles/Theme';
import { hsla } from 'utils/styledUtils';

export const PrizeList = styled.div`
  height: 100%;
  position: relative;
  padding: ${theme.spacing.baseX4}px;
  margin-top: ${theme.spacing.baseX2}px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: ${theme.spacing.baseX2}px;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 0;
  object-fit: cover;
  filter: grayscale(1);
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  ${({ theme }) => css`
    background-image: linear-gradient(
      ${hsla(theme.colors.secondary.base, 0.8)},
      ${theme.colors.secondary.base} 80%
    );
  `}
`;

export const PrizeItem = styled.div`
  width: 50%;
  position: relative;
  z-index: 1;
  display: flex;
`;

export const Placement = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 87px;
  height: auto;
  font-size: 24px;
  font-weight: bold;
  color: ${theme.colors.textPrimaryDark};
  background-color: ${theme.colors.accent.base};
  border-top-left-radius: ${theme.borderRadius.default};
  border-bottom-left-radius: ${theme.borderRadius.default};
`;

export const PrizeInfoWrapper = styled.div`
  flex-grow: 1;
`;

export const PrizeHeader = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  border-top-right-radius: ${theme.borderRadius.default};
  background-color: ${theme.colors.surface.base};
  font-size: 21px;
  font-weight: bold;
  color: yellow;
  padding: ${theme.spacing.baseX2}px;
`;

export const PrizeColumn = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.background.base};
  border-bottom-right-radius: ${theme.borderRadius.default};
  padding: ${theme.spacing.baseX2}px;
  gap: ${theme.spacing.base}px;
`;

export const Team = styled.div``;
