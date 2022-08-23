import { Button } from 'common/components';
import styled from 'styled-components/macro';

export const Section1 = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 200px 140px 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-gap: 12px;
`;

export const CategoryTitle = styled.div`
  ${({ theme }) => theme.textStyles.menu}
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.span`
  margin-left: 6px;
`;

export const Section2 = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 12px;
  margin-top: 24px;
  align-items: center;
`;

export const MoneySlider = styled.div`
  grid-column: span 2;
  padding: 6px 0;
`;

export const MoneyLabel = styled.span``;

export const MoneyValue = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  float: right;
`;

export const ApplyFilterButton = styled(Button)`
  grid-column: 4;
`;
