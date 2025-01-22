
import styles from './index.module.css'; // CSS 모듈을 import
import React from "react";
import { Tooltip } from 'react-tooltip';
import { SvgQuestionMark } from '@/icons';

const OnGoing = () => {
  return (
    <div className={styles.ongoing}>
      <Tooltip className={styles.status_tooltip} id="raffle-tip" />

      {/* Title */}
      <div className={styles.ongoing_title}>Ongoing</div>

      {/* Info */}
      <div className={styles.ongoing_info}>
        <div className={styles.ongoing_info_item}>
          <div className={styles.ongoing_info_item_title}>Raffle</div>
          <div className={styles.ongoing_info_item_content}>#9</div>
        </div>

        <div className={styles.ongoing_info_item}>
          <div className={styles.ongoing_info_item_title}>Entry</div>
          <div className={styles.ongoing_info_item_content}>99 Shells</div>
        </div>

        <div className={styles.ongoing_info_item}>
          <div className={styles.ongoing_info_item_title}>Period</div>
          <div className={styles.ongoing_info_item_content}>XX.XX.XX ~ XX.XX.XX</div>
        </div>

        <div className={styles.ongoing_info_item}>
          <div className={styles.ongoing_info_item_title}>Participants</div>
          <div className={styles.ongoing_info_item_content}>9999</div>
          <div className={styles.ongoing_info_item_minimum}>Minimum: 5000</div>
          <div className={styles.ongoing_info_item_question_mark}>
          <button
              data-tooltip-id="raffle-tip"
              data-tooltip-place="top"
              data-tooltip-content={`If the minimum number of participants is not reached, the raffle will not proceed, and the shells used for participation will be refunded.`}
              className={styles.ongoing_info_item_question_mark_btn}
            >
              <SvgQuestionMark color='white' className={styles.ongoing_info_item_question_mark_svg} />
            </button>
          </div>
        </div>
      </div>

      {/* Prize */}
      <div className={styles.prize}>
        <div className={styles.prize_title}>Prize</div>

        <div className={styles.prize_info}>
          <div className={styles.prize_info_item}>
            <div className={styles.prize_info_item_normal}>1st</div>
            <div className={styles.prize_info_item_active}>250 USDT</div>
            <div className={styles.prize_info_item_normal}>x1</div>
          </div>

          <div className={styles.prize_info_item}>
            <div className={styles.prize_info_item_normal}>2nd</div>
            <div className={styles.prize_info_item_active}>20 USDT</div>
            <div className={styles.prize_info_item_normal}>x5</div>
          </div>

          <div className={styles.prize_info_item}>
            <div className={styles.prize_info_item_normal}>3rd</div>
            <div className={styles.prize_info_item_active}>4 USDT</div>
            <div className={styles.prize_info_item_normal}>x20</div>
          </div>

          <div className={styles.prize_info_item}>
            <div className={styles.prize_info_item_normal}>4th</div>
            <div className={styles.prize_info_item_active}>1 USDT</div>
            <div className={styles.prize_info_item_normal}>x120</div>
          </div>
        </div>
      </div>

      {/* Entry */}
      <div className={styles.entry}>
        <div className={styles.entry_title}>Your Entry</div>
        <div className={styles.entry_content}>9</div>
      </div>

      {/* Draw Button */}
      <button>Draw with 9 Shell</button>
    </div>
  )
}

export default React.memo(OnGoing);