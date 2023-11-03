import { useState } from 'react';
import { Button, DateRangePicker, Icons } from '@sourceempire/brawl-ui';
import { Modal } from 'common/ui';
import { useTournamentHubListContext } from 'pages/tournament-list/context/TournamentHubListContext';
import styles from './TournamentDateRangePicker.module.css';

export function TournamentDateRangePicker() {
  const [isDateRangeModalOpen, setIsDateRangeModalOpen] = useState(false);
  const { actions, state } = useTournamentHubListContext();

  return (
    <>
      <Button className={styles.from_to_button} onClick={() => setIsDateRangeModalOpen(true)}>
        <DateDisplay
          date={state.startTimeFrom}
          placeholder="From"
          clearDate={() => actions.setStartTimeFrom(null)}
        />
        <Icons.ArrowRight />
        <DateDisplay
          date={state.startTimeTo}
          placeholder="To"
          clearDate={() => actions.setStartTimeTo(null)}
        />
      </Button>

      <Modal
        isOpen={isDateRangeModalOpen}
        onRequestClose={() => setIsDateRangeModalOpen(false)}
        closeButton={false}
        header={false}
        noPadding>
        <DateRangePicker
          date1={state.startTimeFrom}
          date2={state.startTimeTo}
          onDate1Change={actions.setStartTimeFrom}
          onDate2Change={actions.setStartTimeTo}
        />
      </Modal>
    </>
  );
}

const monthDisplays = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

const dayDisplays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function DateDisplay({
  date,
  placeholder,
  clearDate
}: {
  date: Date | null;
  placeholder: string;
  clearDate: () => void;
}) {
  const handleRemove = (event: React.MouseEvent<SVGElement, MouseEvent>) => {
    event.stopPropagation();
    clearDate();
  };

  return (
    <>
      {date ? (
        <div className={styles.from_to_container}>
          {date && <Icons.Cross className={styles.remove} onClick={handleRemove} />}
          <div className={styles.from_to_date}>{('0' + date?.getDate()).slice(-2)}</div>
          <div className={styles.month_year_dayname}>
            <div>
              {monthDisplays[date.getMonth()]} {date.getFullYear()}
            </div>
            <div className={styles.dayname}>{dayDisplays[date.getDay()]}</div>
          </div>
        </div>
      ) : (
        <div className={styles.from_to_placeholder}>
          <Icons.Calendar />
          <div className={styles.date_placeholder}>{placeholder}</div>
        </div>
      )}
    </>
  );
}
