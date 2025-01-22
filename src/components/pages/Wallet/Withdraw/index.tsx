import React from "react"
import styles from "./index.module.css"
import { useModalStore } from "@/store";

const WithdrawComponent = () => {
  const { setAddressEditBottomSheet } = useModalStore();
  
  const handleEditAddressSheetOpen = () => setAddressEditBottomSheet(true);

  return (
    <div className={styles.withdraw}>
      <div className={styles.widthdraw_address_box}>

        <div className={styles.widthdraw_address_check_box}>
          <div className={styles.withdraw_title}>Wallet Address (TON)</div>

          <div className={styles.widthdraw_address_edit_box}>
            <input
              className={`${styles.widthdraw_address_text}`}
              placeholder="text"
              disabled
            />
            <button onClick={handleEditAddressSheetOpen} className={styles.widthdraw_edit_btn}>edit</button>
          </div>

          <div className={styles.widthdraw_address_edit_box}>
            <div className={styles.withdraw_balance_text}>USDT Balance</div>

            <input
              className={styles.withdraw_balance_amount}
              placeholder="9999999"
              disabled
            />
          </div>
        </div>

        <div className={styles.withdraw_info_box}>
          <div className={styles.withdraw_info_text}>USDT that is not withdrawn within 1 year after acquisition will expire.</div>
          <div className={`${styles.withdraw_info_text} ${styles.blue_color}`}>
            <div>Minimum withdrawal amount: $10</div>
            <div>Withdrawal fee: $1 </div>
          </div>
        </div>
      </div>

      <div className={styles.withdraw_box}>
        <div className={styles.withdraw_title}>Withdraw USDT</div>

        <div className={styles.withdraw_draw_input_box}>
          <input
            placeholder="Withdraw Amount"
          />
          <button>Withdraw</button>
        </div>
      </div>
    </div>
  )
}

export default React.memo(WithdrawComponent)