import styles from './index.module.css'; // CSS 모듈을 import
import Modal, { Styles } from 'react-modal';
import ModalCloseButton from '../components/ModalCloseButton';
import { useModalStore } from '@/store';
import { PointBar } from '@/components';
import { SvgBoost } from '@/icons';

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

const BoostModal = () => {
  const { boostModal, setBoostModal } = useModalStore();

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  const closeModal = () => setBoostModal(false);

  return (
    <Modal
      isOpen={boostModal}
      // className={styles.container}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      // contentLabel="Example Modal"
    >
      <ModalCloseButton onClick={setBoostModal} />
      <div className={styles.container}>
        {/* Title */}
        <div className={styles.title}>Mining Boost</div>

        {/* Content */}
        <div className={`${styles.content} scroll_hidden`}>
          <PointBar />

          {/* Boost Icon */}
          <div className={styles.boost_box}>
            <SvgBoost size={100} />
          </div>

          {/* Shell Boost */}
          <div className={styles.boost_up_box}>
            <div className={styles.boost_up_func_box}>
              <div className={styles.boost_up_func_title}>2x Boost 1 hour</div>
              <button className={styles.boost_up_func_button}>500 Shell</button>
            </div>

            <div className={styles.boost_up_table_box}>
              <div className={styles.boost_up_table}>
                <div className={styles.boost_up_table_text_box}>
                  <div className={styles.boost_up_table_text_title}>Before</div>
                  <div className={styles.boost_up_table_text_content}>25+ <span className={styles.boost_up_table_text_content_span}>0</span> Pearl/h</div>
                </div>

                <div className={styles.boost_up_table_line}></div>

                <div className={styles.boost_up_table_text_box}>
                  <div className={styles.boost_up_table_text_title}>After</div>
                  <div className={styles.boost_up_table_text_content}>50+ <span className={styles.boost_up_table_text_content_span}>0</span> Pearl/h</div>
                </div>
              </div>
            </div>
          </div>

          {/* Watch Ads Boost */}
          <div className={styles.boost_up_box}>
            <div className={styles.boost_up_func_box}>
              <div className={styles.boost_up_func_title}>4x Boost 1 hour</div>
              <button className={styles.boost_up_func_button}>Watch Ads</button>
            </div>

            <div className={styles.boost_up_table_box}>
              <div className={styles.boost_up_table}>
                <div className={styles.boost_up_table_text_box}>
                  <div className={styles.boost_up_table_text_title}>Before</div>
                  <div className={styles.boost_up_table_text_content}>25+ <span className={styles.boost_up_table_text_content_span}>0</span> Pearl/h</div>
                </div>

                <div className={styles.boost_up_table_line}></div>

                <div className={styles.boost_up_table_text_box}>
                  <div className={styles.boost_up_table_text_title}>After</div>
                  <div className={styles.boost_up_table_text_content}>50+ <span className={styles.boost_up_table_text_content_span}>0</span> Pearl/h</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default BoostModal;