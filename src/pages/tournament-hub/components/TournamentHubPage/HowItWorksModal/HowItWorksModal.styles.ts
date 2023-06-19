import styled, { css } from 'styled-components';
import { Icon } from 'common/ui/Icon';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: ${theme.spacing.baseX5}px;
    width: ${theme.spacing.baseX5}px;
    background-color: ${theme.colors.surfaceElement.base};
  `};
`;

export const Section = styled.div``;

export const Title = styled.h2`
  ${({ theme }) => css`
    ${theme.textStyles.title}
    padding: 12px 12px 9px 12px;
  `}
`;

export const Row = styled.div<{ reversed?: boolean }>``;

export const StyledIcon = styled(Icon)``;

export const Text = styled.p``;

export const HighLight = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.accent.base};
  `};
`;
