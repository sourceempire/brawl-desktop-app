import { Button } from 'common/ui-components';
import styled, { css } from 'styled-components';

export const LoginWrapper = styled.div<{ inactive: boolean }>`
  position: relative;
  width: 50%;
  height: 100%;
  padding: 75px;
  padding-top: 100px;
  transition: opacity 1s;

  ${({ inactive }) =>
    inactive &&
    css`
      pointer-events: none;
      opacity: 0;
    `}
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

export const SignUpText = styled.div`
  position: absolute;
  left: 90px;
  right: 90px;
  line-height: 1.5;
  bottom: 40px;
  font-size: 14px;
  text-align: center;

  ${({ theme }) => css`
    p {
      display: inline;
      color: ${theme.colors.accent};
    }
  `}
`;

export const AppVersion = styled.p`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 12px;
  width: 100%;
  font-size: 10px;
  opacity: 0.3;
  font-weight: 100;
  text-align: center;
`;
