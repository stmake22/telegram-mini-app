import styles from './index.module.css'; // CSS 모듈을 import
import Tabs from './Tabs';
import WithdrawComponent from './Withdraw';
import HistoryComponent from './History';
import { useWalletStore, WalletTabStateType } from '@/store';

const WalletConponent = () => {
  const { tabState } = useWalletStore();

  return (
    <div className={styles.wallet}>
      <div className={styles.wallet_innerbox}>
        <Tabs />
        
        { tabState === WalletTabStateType.WITHDRAW && <WithdrawComponent /> }
        { tabState === WalletTabStateType.HISTORY && <HistoryComponent /> }
      </div>
    </div>
  )
}

export default WalletConponent;