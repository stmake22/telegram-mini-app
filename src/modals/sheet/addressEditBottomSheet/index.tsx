import styles from './index.module.css'; // CSS 모듈을 import
import { Sheet } from "react-modal-sheet"
import CustomSheetHeader from '../components/CustomSheetHeader';
import { useModalStore } from '@/store';

const AddressEditBottomSheet = () => {
  const { addressEditBottomSheet, setAddressEditBottomSheet } = useModalStore();

  return (
    <Sheet
      isOpen={addressEditBottomSheet}
      onClose={() => setAddressEditBottomSheet(false)}
      snapPoints={[525, 0]}
      initialSnap={0}
      className={styles.modal}
    >
      

      <Sheet.Container>
        <CustomSheetHeader />

        <Sheet.Content className={styles.modal_content}>
          <div className={styles.input_box}>
            <div className={styles.input_label}>Edit Wallet Address (TON)</div>
            <input
              placeholder="Please enter the wallet addres"
            />

            <button>Submit</button>

            <div className={styles.text_info_box}>
              <div>Please double-check before submitting your wallet address.</div>
              <div>We are not responsible for any loss caused by registering an incorrect wallet address.</div>
            </div>
          </div>
          
          <div className={styles.close_btn_box}>
            <button onClick={() => setAddressEditBottomSheet(false)} className={styles.button_class}>Close</button>
          </div>
        </Sheet.Content>
      </Sheet.Container>
            
      <Sheet.Backdrop onTap={() => {}} />
    </Sheet>
  )
}

export default AddressEditBottomSheet;