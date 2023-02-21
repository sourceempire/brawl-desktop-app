import styled, { css } from 'styled-components';
import { Icon } from 'common/ui/Icon';
export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 70px;
  ${({ theme }) => css`
    background: ${theme.colors.surfaceElement.base};
    border-radius: ${theme.borderRadius.default};
    padding: ${theme.spacing.baseX2}px;
  `};
`;

export const InfoHeader = styled.div`
  display: flex;
  align-items: center;
  ${({ theme }) => css`
    ${theme.textStyles.body}
    color: ${theme.colors.textSecondaryLight}
  `}
`;
export const InfoText = styled.h2`
  ${({ theme }) => css`
    ${theme.textStyles.title}
  `}
`;

export const StyledIcon = styled(Icon)`
  height: 14px;
  width: 14px;
  ${({ theme }) => css`
    fill: ${theme.colors.textSecondaryLight};
    margin-right: ${theme.spacing.base}px;
  `}
`;
