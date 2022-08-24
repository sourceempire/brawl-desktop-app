import styled from 'styled-components/macro';
import TournamentInfoCard from 'pages/tournament-list/components/TournamentInfoCard/TournamentInfoCard';
import { Header as TournamentInfoCardHeader } from 'pages/tournament-list/components/TournamentInfoCard/TournamentInfoCard.styles';

export const Wrapper = styled.div`
  display: grid;
  padding: 12px 0;
  grid-template-columns: 320px 1fr 1fr;
  grid-template-rows: 280px;
  grid-auto-rows: 260px;
  grid-gap: 24px;

  @media (max-width: 1040px) {
    grid-template-columns: 320px 1fr;
  }
`;

export const PromotedTournament = styled(TournamentInfoCard)`
  height: 280px;

  ${TournamentInfoCardHeader} {
    height: 154px;
  }
`;
