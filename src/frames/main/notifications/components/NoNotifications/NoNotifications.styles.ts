import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const NoNotificationImage = styled.img`
  height: 120px;
`;

export const NoNotificationText = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacing.base}px;
    font: ${theme.textStyles.header};
    color: ${theme.colors.textSecondaryLight};
  `}
`;
