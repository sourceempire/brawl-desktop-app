import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr 1fr;
  height: 250px;
  width: 100%;
  align-items: center;
  justify-items: center;
`;

export const MiddleInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TournamentName = styled.div`
  width: 120%;
  display: block;
  width: 100%;
  text-align: center;
  ${({ theme }) => css`
    ${theme.textStyles.stylizedHeader}
    margin-bottom: ${theme.spacing.baseX2}px;
    font-size: 24px;
  `};
`;

export const TeamContainer = styled.div`
  font-size: 20px;
`;

export const SmallText = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.textDisabledLight};
    margin: ${theme.spacing.baseX2}px 0;
  `}
`;
