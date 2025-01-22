import styles from './index.module.css'; // CSS 모듈을 import

const ListItem = () => {
  return (
    <div className={styles.item}>
      <div className={styles.item_info_name}>Raffle #?Win</div>

      <div className={styles.item_info_box}>
        <div className={`${styles.item_info_amount} ${styles.withdraw}`}>-999999.00 USDT</div>
        <div className={styles.item_info_date}>00/00/00 00:00:00</div>
      </div>
    </div>
  )
}

export default ListItem;