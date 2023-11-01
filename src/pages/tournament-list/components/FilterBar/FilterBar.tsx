import { ActionButton, Input } from 'common/ui';
import styles from './FilterBar.module.css';
import { DateRangePicker, Icons } from '@sourceempire/brawl-ui';
import { ActionButtonSize } from 'common/ui/ActionButton/ActionButton.types';
import { useTournamentHubListContext } from 'pages/tournament-list/context/TournamentHubListContext';

export function FilterBar() {
  const { actions, state } = useTournamentHubListContext();

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    actions.search(event.target.value);
  };

  const openFilterModal = () => {};

  return (
    <div className={styles.wrapper}>
      <div className={styles.left_options}>
        <Input icon={<Icons.Search />} onChange={onSearch} value={state.searchString} />
        <DateRangePicker
          date1={state.startTimeFrom}
          date2={state.startTimeTo}
          onDate1Change={actions.setStartTimeFrom}
          onDate2Change={actions.setStartTimeTo}
        />

        <ActionButton
          icon={<Icons.Filter />}
          onClick={openFilterModal}
          size={ActionButtonSize.LARGE}
        />
      </div>

      <ActionButton
        icon={<Icons.Filter />}
        onClick={openFilterModal}
        size={ActionButtonSize.LARGE}
      />
    </div>
  );
}
