import styled from 'styled-components/macro';

export const Options = styled.div`
  display: grid;
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
