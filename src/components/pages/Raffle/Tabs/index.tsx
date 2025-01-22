import React from 'react';
import styles from './index.module.css'; // CSS 모듈을 import
import { RaffleTabStateType, useRaffleStore } from '@/store';

const Tabs = () => {
  const { tabState, setTabState } = useRaffleStore();

  return (
    <div className={styles.tabs}>
      <button onClick={() => setTabState(RaffleTabStateType.SHELL)} className={`${styles.tab} ${tabState === RaffleTabStateType.SHELL && styles.active}`}>Shell Raffle</button>

      <button onClick={() => setTabState(RaffleTabStateType.PEARL)} className={`${styles.tab} ${tabState === RaffleTabStateType.PEARL && styles.active}`}>Pearl Raffle</button>
    </div>
  )
}

export default React.memo(Tabs);