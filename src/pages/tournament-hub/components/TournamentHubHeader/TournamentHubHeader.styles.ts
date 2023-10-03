import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Icon } from 'common/ui/Icon';

export const HubHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  ${({ theme }) => css`
    margin-top: ${theme.spacing.base}px;
    margin-bottom: ${theme.spacing.baseX4}px;
  `}
`;

export const HeaderHub = styled.h2`
  display: block;
  width: 100%;
  text-align: center;
  ${({ theme }) => css`
    font: ${theme.textStyles.stylizedHeader};
    margin-bottom: ${theme.spacing.baseX2}px;
    font-size: 24px;
  `};
`;

export const CountDownInfo = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacing.baseX2}px;
    color: ${theme.colors.textSecondaryLight};
  `}
`;

export const TournamentInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  ${({ theme }) => css`
    gap: ${theme.spacing.baseX3}px;
    margin-top: ${theme.spacing.baseX2}px;
  `}
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 50px;
  gap: 20px;
  ${({ theme }) => css`
    padding: ${theme.spacing.baseX3}px ${theme.spacing.baseX5}px;
    background-color: ${theme.colors.surface.base};
  `}
`;

export const InfoIcon = styled(Icon)`
  ${({ theme }) => css`
    width: 20px;
    fill: ${theme.colors.accent.base};
    margin-right: ${theme.spacing.base}px;
  `}
`;

export const InfoText = styled.div``;

export const InfoHeader = styled.div`
  ${({ theme }) => css`
    font: ${theme.textStyles.title};
  `}
`;

export const InfoSubText = styled.div`
  border-radius: 20px;
  ${({ theme }) => css`
    color: ${theme.colors.textSecondaryLight};
  `}
`;
