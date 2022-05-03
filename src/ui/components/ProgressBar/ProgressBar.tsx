import { Progression, Wrapper } from './ProgressBar.styles';

export type Props = {
  percent: number;
};

const ProgressBar = ({ percent }: Props) => {
  return (
    <Wrapper>
      <Progression percent={percent} />
    </Wrapper>
  );
};

export default ProgressBar;
