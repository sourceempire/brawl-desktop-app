import { ActionButton, Input } from 'common/ui';
import styles from './FilterBar.module.css';
import { Icons } from '@sourceempire/brawl-ui';
import { ActionButtonSize } from 'common/ui/ActionButton/ActionButton.types';
import { useTournamentHubListContext } from 'pages/tournament-list/context/TournamentHubListContext';
import { TournamentDateRangePicker } from '../TournamentDateRangePicker';

export function FilterBar() {
  const { actions, state } = useTournamentHubListContext();

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    actions.search(event.target.value);
  };

  const openFilterModal = () => {};

  return (
    <div className={styles.wrapper}>
      <div className={styles.options}>
        <Input icon={<Icons.Search />} onChange={onSearch} value={state.searchString} />
        <TournamentDateRangePicker />
      </div>

      <div className={styles.options}>
        <ActionButton
          icon={<Icons.Filter />}
          onClick={openFilterModal}
          size={ActionButtonSize.LARGE}
        />
        <ActionButton
          icon={<Icons.Filter />}
          onClick={openFilterModal}
          size={ActionButtonSize.LARGE}
        />
      </div>
    </div>
  );
}
