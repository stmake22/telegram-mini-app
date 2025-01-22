
import styles from './index.module.css'; // CSS 모듈을 import
import { SvgBoost, SvgButtonBack, SvgQuestionMark, SvgUpgrade } from '@/icons';
import { useModalStore } from '@/store';
import { Tooltip } from 'react-tooltip';

const StatusBar = () => {
  const { setBoostModal, setUpgradeModal } = useModalStore();

  const handleOpenBoostModal = () => setBoostModal(true);
  const handleOpenUpgradeModal = () => setUpgradeModal(true);

  return (
    <div className={styles.status_bar}>
      {/* <div
        data-tooltip-id="pearl-tip"
        data-tooltip-place="top"
      >
        The number of Pearls you can earn from the Tab is 1/10,000 of Pearl/h.
      </div> */}

      <Tooltip className={styles.status_tooltip} id="pearl-tip" />

      <div className={styles.status_bar_border}></div>

      <div className={styles.function_box}>
        <div className={styles.function_btn_box}>
          <button onClick={handleOpenBoostModal} className={styles.function_btn}>
            <SvgButtonBack />
            <div className={styles.icon_box}>
              <SvgBoost className={styles.icon} />
              <div className={styles.icon_text}>1H BOOST</div>
            </div>

            <div className={styles.button_data_text}>00:00</div>
          </button>
        </div>

        <div className={styles.score_box}>
          <div className={styles.score_item}>? / 10,000 Pearl</div>
          <div className={styles.score_item}>
            <div>
              25+
              <span className={styles.score_color_font}>0</span>&nbsp;
              Pearl/h
            </div>

            <div className={styles.score_question_mark_mark}>
              <button
                data-tooltip-id="pearl-tip"
                data-tooltip-place="top"
                data-tooltip-content={`The number of Pearls you can earn from the Tab is 1/10,000 of Pearl/h.`}
                className={styles.score_question_mark_btn}
              >
                <SvgQuestionMark color='white' className={styles.score_question_mark_svg} />
              </button>
            </div>
          </div>
        </div>

        <div className={styles.function_btn_box}>
          <button onClick={handleOpenUpgradeModal} className={styles.function_btn}>
            <SvgButtonBack />
            
            <div className={styles.icon_box}>
              <SvgUpgrade className={styles.icon} />
              <div className={styles.icon_text}>UPGRADE</div>
            </div>

            <div className={styles.button_data_text}>S/100</div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default StatusBar