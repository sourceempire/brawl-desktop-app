import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Button, Modal } from 'common/ui';
import { SimpleDate, SimpleDateString } from 'types/SimpleDate';
import * as arrayUtils from 'utils/arrayUtils';
import { getFirstDayOfWeek } from 'utils/localeUtils';
import { DAY_NAMES, changeMonth, getMonth } from './DatePicker.model';
import {
  Actions,
  DateInput,
  DateInputArrow,
  DateInputWrapper,
  Day,
  DayName,
  Days,
  DropDown,
  Header,
  NextArrow,
  PrevArrow,
  Wrapper
} from './DatePicker.styled';

type Props = {
  value: SimpleDate | undefined;
  onChange: (date: SimpleDate | undefined) => void;
  onRequestClose?: () => void;
  dark?: boolean;
  inline?: boolean;
};

function DatePicker({ value, onChange, onRequestClose, dark = false, inline = false }: Props) {
  const today = new Date();
  const year = value ? value.getYear() : today.getFullYear();
  const month = value ? value.getMonth() : today.getMonth();
  const pickedDay = value ? value.getDay() : today.getDate();
  const valueSelected = value !== undefined;
  const dropDownRef = useRef<HTMLDivElement>(null);
  const [above, setAbove] = useState(false);

  const monthInfo = getMonth(month, year);

  // TODO -> This needs to be fixed with a dependency array
  useLayoutEffect(() => {
    if (dropDownRef.current) {
      const rect = dropDownRef.current.getClientRects()[0];
      const shouldBeAbove = rect.top + rect.height > window.innerHeight;
      if (shouldBeAbove) {
        setAbove(true);
      }
    }
  });

  return (
    <DropDown
      dark={dark}
      above={above}
      inline={inline}
      ref={dropDownRef}
      className="date-picker-drop-down">
      <Header style={{ textAlign: 'center' }}>
        <PrevArrow onClick={() => onChange(changeMonth(year, month, pickedDay, false))} />
        {monthInfo.name} {year}
        <NextArrow onClick={() => onChange(changeMonth(year, month, pickedDay, true))} />
      </Header>
      <Days>
        {arrayUtils.shiftLeft(DAY_NAMES, getFirstDayOfWeek()).map((name) => (
          <DayName key={'name.' + name}>{name.substring(0, 2)}</DayName>
        ))}
        {monthInfo.days.map((day) => (
          <Day
            key={`${month}.${day.index}.${day.thisMonth}`}
            active={day.thisMonth && day.thisMonth}
            picked={valueSelected && pickedDay === day.index && day.thisMonth}
            today={
              today.getDate() === day.index &&
              month === today.getMonth() &&
              year === today.getFullYear()
            }
            dark={dark}
            onClick={() => day.thisMonth && onChange(new SimpleDate(year, month, day.index))}>
            {day.index}
          </Day>
        ))}
      </Days>
      <Actions>
        <Button
          small
          onClick={() => {
            onChange(undefined);
            onRequestClose && onRequestClose();
          }}>
          Clear
        </Button>
        <Button primary small onClick={onRequestClose}>
          Done
        </Button>
      </Actions>
    </DropDown>
  );
}

type ModalProps = {
  value: SimpleDate | undefined;
  onChange: (date: SimpleDate | undefined) => void;
  dark?: boolean;
  isOpen: boolean;
  onRequestClose?: () => void;
};

export function DatePickerModal({ value, onChange, dark, isOpen, onRequestClose }: ModalProps) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} header={false} hideOverLay noPadding>
      <DatePicker
        value={value}
        onChange={onChange}
        dark={dark}
        onRequestClose={onRequestClose}
        inline></DatePicker>
    </Modal>
  );
}

type InputProps = {
  value: SimpleDate | undefined;
  onChange: (date: SimpleDate | undefined) => void;
  dark?: boolean;
};

export function DatePickerInput({ value, onChange, dark = false }: InputProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const inputRef = useRef<HTMLDivElement | null>(null);
  const ignoreEvent = useRef<MouseEvent | undefined>();

  useEffect(() => {
    const outsideClickListener = (e: MouseEvent) => {
      if (isDatePickerOpen) {
        if (ignoreEvent.current === e) {
          // Detect if this is the same event that opened the date picker,
          // in that case don't close it immediatly
          ignoreEvent.current = undefined;
        } else if (e.target instanceof Element) {
          if (!e.target.closest('.date-picker-drop-down')) {
            // Not inside date picker drop down
            setIsDatePickerOpen(false);
          }
        }
      }
    };
    window.addEventListener('click', outsideClickListener);

    return () => {
      window.removeEventListener('click', outsideClickListener);
    };
  }, [isDatePickerOpen]);

  const toggle = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    ignoreEvent.current = e.nativeEvent;
    setIsDatePickerOpen((open) => !open);
  };

  return (
    <Wrapper>
      <DateInputWrapper>
        <DateInput onClick={toggle} ref={inputRef} isEmpty={value === undefined}>
          {value ? value.formatString() : '---- / -- / --'}
        </DateInput>
        <DateInputArrow />
      </DateInputWrapper>
      {isDatePickerOpen && (
        <DatePicker
          value={value}
          onChange={onChange}
          dark={dark}
          onRequestClose={() => setIsDatePickerOpen(false)}></DatePicker>
      )}
    </Wrapper>
  );
}

export function DatePickerInputNative({ value, onChange }: InputProps) {
  return (
    <input
      type="date"
      value={value === undefined ? '' : value.toString()}
      onChange={(v) =>
        onChange(v.target.value ? new SimpleDate(v.target.value as SimpleDateString) : undefined)
      }
    />
  );
}
