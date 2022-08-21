import Card from 'common/ui-components/components/Card/Card';
import Markdown from 'common/ui-components/components/Markdown/Markdown';
import styled, { css } from 'styled-components/macro';

export const Wrapper = styled(Card).attrs({ padding: false })`
  overflow: hidden;
  display: flex;
  flex-direction: row;
`;

export const Image = styled.img`
  width: 40%;
  min-width: 40%;
  object-fit: cover;
`;

export const Text = styled.div``;

export const Title = styled.h2`
  ${({ theme }) => css`
    ${theme.textStyles.title}
    padding: 12px 12px 9px 12px;
  `}
`;

export const Content = styled(Markdown)`
  ${({ theme }) => css`
    ${theme.textStyles.body}
    color: ${theme.colors.textSecondaryLight};
    padding: 9px 12px 12px 12px;
  `}
`;
