import React from 'react';
import styles from './index.module.css'; // CSS 모듈을 import
import { useWalletStore, WalletTabStateType } from '@/store';

const Tabs = () => {
  const { tabState, setTabState } = useWalletStore();

  return (
    <div className={styles.tabs}>
      <button onClick={() => setTabState(WalletTabStateType.WITHDRAW)} className={`${styles.tab} ${tabState === WalletTabStateType.WITHDRAW && styles.active}`}>Withdraw</button>

      <button onClick={() => setTabState(WalletTabStateType.HISTORY)} className={`${styles.tab} ${tabState === WalletTabStateType.HISTORY && styles.active}`}>History</button>
    </div>
  )
}

export default React.memo(Tabs);