import Action from 'common/ui-components/components/ActionButton';
import styled, { css } from 'styled-components/macro';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  margin-bottom: 24px;
  flex-shrink: 0;

  ${({ theme }) => css`
    height: ${theme.topBarHeight}px;
  `}
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

export const TopBarAction = styled(Action)`
  ${({ theme }) => css`
    margin-right: ${theme.spacing.baseX3}px;
  `}
`;
