import styled, { css } from 'styled-components/macro';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 48px;
  padding: 0 24px;
  margin-bottom: 24px;
  flex-shrink: 0;
`;

export const TopBarActions = styled.div`
  display: flex;
  align-items: center;
`;

export const PlaceholderLogo = styled.div`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  margin-right: 24px;

  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
  `}
`;
