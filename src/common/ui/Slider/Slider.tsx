import {
  MinMaxContainer,
  MinMaxLabel,
  StyledSlider,
  StyledThumb,
  StyledTrack,
  Wrapper
} from './Slider.styled';

type SliderProps = {
  defaultValue?: number;
  value?: number;
  min?: number;
  max?: number;
  showMin?: boolean;
  showMax?: boolean;
  valuePreffix?: string;
  valueSuffix?: string;
  onChange?: (value: number) => void;
  step?: number;
};

export function Slider({
  defaultValue,
  value,
  min,
  max,
  showMin,
  showMax,
  valuePreffix = '',
  valueSuffix = '',
  onChange,
  step
}: SliderProps) {
  return (
    <Wrapper>
      <StyledSlider
        {...(onChange ? { onChange: (v) => onChange(v as number) } : {})}
        defaultValue={defaultValue}
        value={value}
        min={min}
        max={max}
        renderTrack={Track}
        renderThumb={Thumb}
        step={step}
      />
      <MinMaxContainer>
        {showMin && <MinMaxLabel>{valuePreffix + min + valueSuffix}</MinMaxLabel>}
        {showMax && <MinMaxLabel>{valuePreffix + max + valueSuffix}</MinMaxLabel>}
      </MinMaxContainer>
    </Wrapper>
  );
}

type RangedSliderProps = {
  defaultValue?: [number, number];
  value?: [number, number];
  min?: number;
  max?: number;
  showMin?: boolean;
  showMax?: boolean;
  valuePreffix?: string;
  valueSuffix?: string;
  onChange?: (start: number, end: number) => void;
  minDistance?: number;
  step?: number;
};

export function RangedSlider({
  defaultValue,
  value,
  min,
  max,
  showMin,
  showMax,
  valuePreffix = '',
  valueSuffix = '',
  onChange,
  minDistance = 0,
  step
}: RangedSliderProps) {
  return (
    <Wrapper>
      <StyledSlider
        {...(onChange ? { onChange: (v) => onChange((v as number[])[0], (v as number[])[1]) } : {})}
        defaultValue={defaultValue}
        value={value}
        min={min}
        max={max}
        renderTrack={RangedTrack}
        renderThumb={Thumb}
        pearling
        minDistance={minDistance}
        step={step}
      />
      <MinMaxContainer>
        {showMin && <MinMaxLabel>{valuePreffix + min + valueSuffix}</MinMaxLabel>}
        {showMax && <MinMaxLabel>{valuePreffix + max + valueSuffix}</MinMaxLabel>}
      </MinMaxContainer>
    </Wrapper>
  );
}

// TODO -> we should never use any, fix this
const Track = (props: any, state: { index: number }) => (
  <StyledTrack {...props} index={state.index} />
);
const RangedTrack = (props: any, state: { index: number }) => (
  <StyledTrack {...props} index={state.index} range={true} />
);
const Thumb = (props: any, state: { valueNow: any }) => (
  <StyledThumb {...props}>{state.valueNow}</StyledThumb>
);
