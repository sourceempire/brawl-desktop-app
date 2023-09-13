import styled from 'styled-components';
import { theme } from 'assets/styles/Theme';

export const roundGap = theme.spacing.baseX8;

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  gap: ${roundGap}px;
  justify-content: space-evenly;
`;

export const InnerWrapper = styled.div`
  display: flex;
  position: relative;
  gap: ${theme.spacing.base}px;
  flex-direction: column;
`;

export const Container = styled.div`
  overflow-x: scroll;
`;
