import { useCountdown } from 'pages/tournament/hooks/useCountdown';
import { Days, Hours, Minutes, Number, Seconds, Unit, Wrapper } from './CountDown.styles';

type Props = {
  startTime: number;
};

const CountDown = ({ startTime }: Props) => {
  const { days, hasDays, hours, hasHours, minutes, hasMinutes, seconds, hasSeconds } =
    useCountdown(startTime);

  function filterDayNumbersPredicate(dayNumber: string, index: number) {
    switch (index) {
      case 0:
        return dayNumber !== '0';
      case 1:
        return dayNumber !== '0' || days > 9;
      case 2:
        return dayNumber !== '0' && days !== 0;
      default:
        return false;
    }
  }

  return (
    <Wrapper>
      {hasDays && (
        <Unit>
          <Days>
            {padZeroes(days, 2)
              .split('')
              .filter((d, index) => filterDayNumbersPredicate(d, index))
              .map((d, index) => (
                <Number key={index}>{d}</Number>
              ))}
          </Days>
          <div>Days</div>
        </Unit>
      )}

      {hasHours && (
        <Unit>
          <Hours>
            {padZeroes(hours, 1)
              .split('')
              .map((h, index) => (
                <Number key={index}>{h}</Number>
              ))}
          </Hours>
          <div>Hours</div>
        </Unit>
      )}

      {hasMinutes && (
        <Unit>
          <Minutes>
            {padZeroes(minutes, 1)
              .split('')
              .map((h, index) => (
                <Number key={index}>{h}</Number>
              ))}
          </Minutes>
          <div>Minutes</div>
        </Unit>
      )}

      {hasSeconds ? (
        <Unit>
          <Seconds>
            {padZeroes(seconds, 1)
              .split('')
              .map((h, index) => (
                <Number key={index}>{h}</Number>
              ))}
          </Seconds>
          <div>Seconds</div>
        </Unit>
      ) : (
        /**TODO -> make something happen when time runs out */
        <div>Time ran out</div>
      )}
    </Wrapper>
  );
};

export default CountDown;

function padZeroes(number: number, zeroCount: number) {
  return (Array(zeroCount).fill('0').join('') + number).slice(-(zeroCount + 1));
}
