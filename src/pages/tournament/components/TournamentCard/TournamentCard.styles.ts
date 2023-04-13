import styled, { css } from 'styled-components';
import { Icon } from 'common/ui/Icon';
import temporaryBackdrop from 'assets/images/temporary-csgo-backdrop.jpg';

export const Wrapper = styled.div`
  height: 270px;
  width: 345px;
  border-radius: 20px;
  background-image: url('${temporaryBackdrop}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  ${({ theme }) => css`
    color: ${theme.colors.textSecondaryLight};
  `}
`;

export const Content = styled.div``;
