import styles from './index.module.css'; // CSS 모듈을 import
import Modal, { Styles } from 'react-modal';
import ModalCloseButton from '../components/ModalCloseButton';
import { useModalStore } from '@/store';
import { PointBar } from '@/components';
import { SvgModalUpgrade } from '@/icons';

const customStyles:Styles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxHeight: 'calc(100% - 32px)'
  },
  overlay: {}
};

Modal.setAppElement('#root');

const UgradeModal = () => {
  const { upgradeModal, setUpgradeModal } = useModalStore();

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  const closeModal = () => setUpgradeModal(false);

  return (
    <Modal
      isOpen={upgradeModal}
      // className={styles.container}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      // contentLabel="Example Modal"
    >
      <ModalCloseButton onClick={setUpgradeModal} />
      <div className={styles.container}>
        {/* Title */}
        <div className={styles.title}>Mining Upgrade</div>

        {/* Content */}
        <div className={`${styles.content} scroll_hidden`}>
          <PointBar />

          {/* Boost Icon */}
          <div className={styles.upgrade_box}>
            <SvgModalUpgrade />
          </div>

          {/* Shell Boost */}
          <div className={styles.upgrade_up_box}>
            <div className={styles.upgrade_up_func_box}>
              <div className={styles.upgrade_up_func_title}>Storage Upgrade (0 / 100)</div>
              <button className={styles.upgrade_up_func_button}>999 Shell</button>
            </div>

            <div className={styles.upgrade_up_table_box}>
              <div className={styles.upgrade_up_table}>
                <div className={styles.upgrade_up_table_text_box}>
                  <div className={styles.upgrade_up_table_text_title}>Before</div>
                  <div className={styles.upgrade_up_table_text_content}>1,000+ <span className={styles.upgrade_up_table_text_content_span}>90</span> Pearl/h</div>
                </div>

                <div className={styles.upgrade_up_table_line}></div>

                <div className={styles.upgrade_up_table_text_box}>
                  <div className={styles.upgrade_up_table_text_title}>After</div>
                  <div className={styles.upgrade_up_table_text_content}>1,000+ <span className={styles.upgrade_up_table_text_content_span}>90</span> Pearl/h</div>
                </div>
              </div>
            </div>
          </div>

          {/* Watch Ads Boost */}
          <div className={styles.upgrade_up_box}>
            <div className={styles.upgrade_up_func_box}>
              <div className={styles.upgrade_up_func_title}>Mining Upgrade (0 / 100)</div>
              <button className={styles.upgrade_up_func_button}>999 Shell</button>
            </div>

            <div className={styles.upgrade_up_table_box}>
              <div className={styles.upgrade_up_table}>
                <div className={styles.upgrade_up_table_text_box}>
                  <div className={styles.upgrade_up_table_text_title}>Before</div>
                  <div className={styles.upgrade_up_table_text_content}>25+ <span className={styles.upgrade_up_table_text_content_span}>0</span> Pearl/h</div>
                </div>

                <div className={styles.upgrade_up_table_line}></div>

                <div className={styles.upgrade_up_table_text_box}>
                  <div className={styles.upgrade_up_table_text_title}>After</div>
                  <div className={styles.upgrade_up_table_text_content}>50+ <span className={styles.upgrade_up_table_text_content_span}>1</span> Pearl/h</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default UgradeModal;