import styled, { css } from 'styled-components';
import { Markdown } from 'common/ui';

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 700px;
  ${({ theme }) => css`
    padding-right: ${theme.spacing.baseX2}px;
    border-right: 1px solid ${theme.colors.surfaceSecondary.hover};
    row-gap: ${theme.spacing.baseX2}px;
  `}
`;

export const Content = styled.div`
  width: 100%;
  max-height: 700px;
  overflow: scroll;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex: 1 1 auto;
  column-gap: 15px;
`;

export const RulesMarkdown = styled(Markdown)`
  h1 {
    font-size: 20px;
    ${({ theme }) => css`
      margin-bottom: ${theme.spacing.baseX2}px;
    `}
  }

  h2 {
    border: none;
    font-size: 16px;
    ${({ theme }) => css`
      margin-bottom: ${theme.spacing.baseX2}px;
    `}
  }

  p {
    ${({ theme }) => css`
      font-size: 16px;
      margin-bottom: ${theme.spacing.baseX4}px;
    `}
  }
`;
