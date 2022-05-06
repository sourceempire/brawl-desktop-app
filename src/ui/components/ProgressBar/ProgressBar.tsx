import { Bar, ProgressUnit, Progression, ProgressionWrapper, Wrapper } from './ProgressBar.styles';

export type Props = {
  value?: number;
  unit?: 'percent';
};

const ProgressBar = ({ unit, value }: Props) => {
  let percent;

  switch (unit) {
    case 'percent':
      percent = value;
      break;
  }

  return (
    <>
      <Wrapper>
        <Bar>
          <ProgressionWrapper>
            <Progression percent={percent} />
          </ProgressionWrapper>
        </Bar>
        {unit && <ProgressUnit>{unit === 'percent' && value?.toFixed(0)}%</ProgressUnit>}
      </Wrapper>
    </>
  );
};

export default ProgressBar;
