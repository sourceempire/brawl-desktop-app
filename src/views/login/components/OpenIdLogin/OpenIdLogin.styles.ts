import { Button } from 'common/ui-components';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { theme } from 'assets/styles/Theme';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  font-family: 'Orbitron';
  font-size: 24px;
  margin-bottom: 24px;
`;

export const OpenIdButton = styled(Button)`
  position: relative;
  align-items: center;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  width: 100%;
  height: 50px;
  margin-bottom: 12px;
  img {
    height: 21px;
  }
`;

export const SignUpText = styled.p`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 40px;
  font-size: 14px;
  text-align: center;
`;

export const SignUpLink = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.colors.accent};
  `}
`;
