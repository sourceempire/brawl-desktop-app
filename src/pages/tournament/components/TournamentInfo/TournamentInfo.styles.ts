import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr 1fr;
  height: 166px;
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
  ${({ theme }) => theme.textStyles.stylizedHeader}
`;

export const TeamContainer = styled.div``;
