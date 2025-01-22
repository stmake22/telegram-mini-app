import styles from './index.module.css'; // CSS 모듈을 import
import { Sheet } from "react-modal-sheet"
import CustomSheetHeader from '../components/CustomSheetHeader';
import { useModalStore } from '@/store';
import { SvgPearl, SvgShell, SvgUSDT } from '@/icons';

const ProfileBottomSheet = () => {
  const { profileBottomSheet, setProfileBottomSheet } = useModalStore();

  return (
    <Sheet
      isOpen={profileBottomSheet}
      onClose={() => setProfileBottomSheet(false)}
      snapPoints={[525, 0]}
      initialSnap={0}
      className={styles.modal}
    >
      

      <Sheet.Container>
        <CustomSheetHeader />

        <Sheet.Content className={styles.modal_content}>
          <div className={styles.info_containner}>
            {/* Profile Image */}
            <div className={styles.profile_box}>
              <img className={styles.profile_image} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/2048px-Facebook_icon_2013.svg.png" />
            </div>

            {/* Profile Info */}
            <div className={styles.info_input_group}>
              <div className={styles.info_userId_box}>
                <div className={styles.info_userId_text}>
                  User ID: sdnfnsalkfnlkafnasklnfklsanflasqwdqwfqefeqfqeffqef
                </div>
                <button className={styles.info_userId_btn}>Copy</button>
              </div>

              <div className={styles.info_normal_input_box}>
                <input
                  className={`${styles.info_normal_text}`}
                  placeholder="User Name"
                  value="sea other"
                  disabled
                />
              </div>

              <div className={styles.info_normal_input_box}>
                <input
                  className={`${styles.info_normal_text}`}
                  placeholder="Tag Name"
                  disabled
                />
              </div>
            </div>

            {/* Total Score */}
            <div className={styles.score}>
              <div className={styles.score_title}>Score</div>

              <div className={styles.score_text_box}>
                <div className={styles.score_icon_box}>
                  <SvgShell size={20} />
                  <div className={styles.score_icon_text}>Shell</div>
                </div>

                <div className={styles.score_amount_text}>99999</div>
              </div>

              <div className={styles.score_text_box}>
                <div className={styles.score_icon_box}>
                  <SvgPearl size={20} />
                  <div className={styles.score_icon_text}>Pearl</div>
                </div>

                <div className={styles.score_amount_text}>99999</div>
              </div>

              <div className={styles.score_text_box}>
                <div className={styles.score_icon_box}>
                  <SvgUSDT size={20} />
                  <div className={styles.score_icon_text}>USDT</div>
                </div>

                <div className={styles.score_amount_text}>99999</div>
              </div>
            </div>
          </div>
          
          <div className={styles.close_btn_box}>
            <button onClick={() => setProfileBottomSheet(false)} className={styles.button_class}>Close</button>
          </div>
        </Sheet.Content>
      </Sheet.Container>
            
      <Sheet.Backdrop onTap={() => {}} />
    </Sheet>
  )
}

export default ProfileBottomSheet;