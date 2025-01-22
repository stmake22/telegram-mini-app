import styles from './index.module.css'; // CSS 모듈을 import
import { Link, useLocation } from 'react-router-dom';
import { PagePathTypes } from '../Footer';
import { SvgArrowLeft, SvgWallet } from '@/icons';
import { useModalStore } from '@/store';
import PointBar from '../PointBar';

const Header = () => {
  const { setProfileBottomSheet } = useModalStore();
  const location = useLocation(); // 현재 URL 정보를 가져옴
  // const windowBackButton = WebApp.BackButton;
  // const windowSettingsButton = WebApp.SettingsButton;
  // const windowSecondaryButton = WebApp.SecondaryButton;


  const handleBackButton = () => {
    window.history.back();
  }
  // windowSettingsButton.show();
  // windowSecondaryButton.show();
  
  // windowBackButton.show();
  // windowBackButton.onClick(handleBackButton);

  

  return (
    <div className={styles.header}>
      {/* Header Component */}
      <div className={`${styles.util_box} ${location.pathname === PagePathTypes.WALLET && styles.active}`}>
        <div
          className={`${styles.header_side_back_item} ${location.pathname === PagePathTypes.WALLET && styles.active}`}
        >
          <button onClick={handleBackButton} className={styles.arrow_left_btn}>
            <SvgArrowLeft />
          </button>
        </div>

        <PointBar />
      </div>
      
      <div className={styles.header_side_item}>
        {/* Profile or Wallet */}
        <Link to={PagePathTypes.WALLET} className={`${styles.wallet_link} ${location.pathname !== PagePathTypes.WALLET && styles.active}`}>
          <SvgWallet />
        </Link>

        <button
          onClick={() => setProfileBottomSheet(true)}
          className={`${styles.profile_btn} ${location.pathname === PagePathTypes.WALLET && styles.active}`}
        >
          <img className={styles.profile_image} src="https://png.pngtree.com/png-vector/20230728/ourlarge/pngtree-otter-clipart-cartoon-otter-is-sitting-in-the-water-vector-png-image_6815826.png" />
        </button>
      </div>
    </div>
  )
}

export default Header