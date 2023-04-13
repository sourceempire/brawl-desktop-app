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
  position: relative;
  ${({ theme }) => css`
    color: ${theme.colors.textSecondaryLight};
    border: 2px solid ${theme.colors.accent.base};
  `}
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
`;

export const Name = styled.div`
  display: block;
`;
