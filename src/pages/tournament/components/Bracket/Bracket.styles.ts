import styled from '@emotion/styled';
import { theme } from 'assets/styles/Theme';

export const roundGap = theme.spacing.baseX8;

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  gap: ${roundGap}px;
  padding: ${theme.spacing.baseX2}px;
`;
