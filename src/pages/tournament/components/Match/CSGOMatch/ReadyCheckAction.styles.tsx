import styled, { css } from 'styled-components/macro';
import { Animation } from 'common/components';
import Icons from 'common/components/Icon/Icons';
import simpleLoading from 'assets/animations/simple-loading.json';

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
  fill: white;
  height: 60%;
  width: 60%;
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
