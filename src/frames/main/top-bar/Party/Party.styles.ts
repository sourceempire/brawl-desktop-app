import styled, { css } from 'styled-components';
import { ActionButton } from 'common/components';

export const Wrapper = styled.div`
  display: flex;
`;

export const InvitePlayerAction = styled(ActionButton)`
  ${({ theme }) => css`
    margin-right: ${theme.spacing.baseX2}px;
  `}
`;

export const PartyPlayer = styled.img`
  ${({ theme }) => css`
    margin-right: ${theme.spacing.baseX2}px;
    height: ${theme.spacing.baseX5}px;
    width: ${theme.spacing.baseX5}px;
    border-radius: ${theme.borderRadius.default};
  `}
`;
