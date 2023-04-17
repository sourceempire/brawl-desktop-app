import styled, { css } from 'styled-components';
import { Icon } from 'common/ui/Icon';

export const Chip = styled.div<{ chipBackground: string }>`
  display: flex;
  align-items: center;
  border-radius: 30px;
  gap: 10px;
  ${({ theme, chipBackground }) => css`
    padding: ${theme.spacing.baseX2}px ${theme.spacing.baseX3}px;
    background-color: ${chipBackground};
  `}
`;

export const ChipIcon = styled(Icon)<{ iconSize: string }>`
  ${({ theme, iconSize }) => css`
    height: ${iconSize}px;
    width: ${iconSize}px;
    fill: ${theme.colors.accent.base};
    margin-right: ${theme.spacing.base}px;
  `}
`;

export const Text = styled.div``;

export const ChipSubText = styled.div`
  border-radius: 20px;
  ${({ theme }) => css`
    color: ${theme.colors.textSecondaryLight};
  `}
`;

export const ChipHeader = styled.div`
  ${({ theme }) => css`
    ${theme.textStyles.title}
  `}
`;
