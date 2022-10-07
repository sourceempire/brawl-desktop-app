import ReactMarkdown from 'react-markdown';
import styled, { css } from 'styled-components';

export const RulesMarkdown = styled(ReactMarkdown)`
  overflow: scroll;
  h1 {
    font-size: 20px;
    ${({ theme }) => css`
      margin-bottom: ${theme.spacing.baseX2}px;
    `}
  }

  h2 {
    font-size: 16px;
    ${({ theme }) => css`
      margin-bottom: ${theme.spacing.baseX2}px;
    `}
  }

  p {
    font-size: 16px;
    ${({ theme }) => css`
      margin-bottom: ${theme.spacing.baseX4}px;
    `}
  }
`;
