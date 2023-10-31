import { ActionButton, Input } from 'common/ui';
import styles from './FilterBar.module.css';
import { Icons } from '@sourceempire/brawl-ui';
import { useState } from 'react';
import { ActionButtonSize } from 'common/ui/ActionButton/ActionButton.types';
import { useTournamentHubListContext } from 'pages/tournament-list/context/TournamentHubListContext';

export function FilterBar() {
  const { actions } = useTournamentHubListContext();

  const [searchString, setSearchString] = useState('');

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value);
    actions.search(event.target.value);
  };

  const openFilterModal = () => {};

  return (
    <div className={styles.wrapper}>
      <div className={styles.left_options}>
        <Input icon={<Icons.Search />} onChange={onSearch} value={searchString} />
        <div></div>
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
