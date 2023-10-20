import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Animation } from 'common/ui';
import simpleLoading from 'assets/animations/simple-loading.json';
import { Icons } from 'brawl-ui';

export const Wrapper = styled.div``;

const ReadyMarkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  border-radius: 50%;

  ${({ theme }) => css`
    background-color: ${theme.colors.statusSuccess};
  `}
`;

const CheckIcon = styled(Icons.Check)`
  height: 60%;
  width: 60%;
  ${({ theme }) => css`
    fill: ${theme.colors.white};
  `}
`;

export const ReadyMark = () => {
  return (
    <ReadyMarkWrapper>
      <CheckIcon />
    </ReadyMarkWrapper>
  );
};

const Anim = styled(Animation)`
  height: 30px;
  width: 30px;
`;

export const WaitingAnimation = () => {
  return <Anim src={simpleLoading} />;
};
