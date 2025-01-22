import styles from './index.module.css'; // CSS 모듈을 import

const ListItem = () => {
  return (
    <div className={styles.item}>
      <div className={styles.item_info}>
        <div className={styles.item_info_box}>
          <div className={styles.item_title}>Raffle</div>
          <div className={styles.item_content}>#9</div>
        </div>

        <div className={styles.item_info_box}>
          <div className={styles.item_title}>Entry</div>
          <div className={styles.item_content}>99 Shells</div>
        </div>

        <div className={styles.item_info_box}>
          <div className={styles.item_title}>Period</div>
          <div className={styles.item_content}>24.99.99 ~ 24.99.99</div>
        </div>

        <div className={styles.item_info_box}>
          <div className={styles.item_title}>Participants</div>
          <div className={styles.item_content}>9999</div>
        </div>
      </div>

      <div className={styles.item_button_box}>
        <button className={styles.item_button}>Result</button>
      </div>
    </div>
  )
}

export default ListItem;