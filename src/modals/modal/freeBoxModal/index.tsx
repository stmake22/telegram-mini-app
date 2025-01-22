import styles from './index.module.css'; // CSS 모듈을 import
import Modal, { Styles } from 'react-modal';
import ModalCloseButton from '../components/ModalCloseButton';
import { ShowPromiseResult } from 'src/types/adsgram';

// import WebApp from '@twa-dev/sdk';
import { useCallback } from 'react';
import { useAdsgram } from 'src/hooks/useAdsgram';
import { PointBar } from '@/components';
import { SvgFreeBoxBack, SvgModalFreeBox, SvgPlay } from '@/icons';
import { useModalStore } from '@/store';

// const AdController = window.Adsgram.init({
//   blockId: "int-6767",
//   debug: true,
//   debugBannerType: "FullscreenMedia"
// });

const customStyles:Styles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxHeight: 'calc(100% - 198px)'
  },
  overlay: {}
};

Modal.setAppElement('#root');

const FreeBoxModal = () => {
  const { freeBoxModal, setFreeBoxModal } = useModalStore();

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  const closeModal = () => setFreeBoxModal(false);

  // const playAdsgram = () => {
  //   const showPromise: Promise<ShowPromiseResult> = AdController.show();

  //   showPromise
  //   .then((data) => {
  //     console.log('success - ', data.state);
  //     WebApp.showAlert(`success - ${JSON.stringify(data)}`);
  //   })
  //   .catch((err) => {
  //     console.log('error - ', err);
  //     WebApp.showAlert(`error - ${JSON.stringify(err)}`);
  //   })
  // }

  const onReward = useCallback(() => {
    alert('Reward');
  }, []);
  const onError = useCallback((result: ShowPromiseResult) => {
    alert(JSON.stringify(result, null, 4));
  }, []);

  /**
   * insert your-block-id
   */
  const showAd = useAdsgram({ blockId: "int-6767", onReward, onError });

  return (
    <Modal
      isOpen={freeBoxModal}
      // className={styles.container}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      // contentLabel="Example Modal"
    >
      <ModalCloseButton onClick={setFreeBoxModal} />
      <div className={styles.container}>
        {/* Title */}
        <div className={styles.title}>Free Box</div>

        {/* Content */}
        <div className={`${styles.content} scroll_hidden`}>
          <PointBar />

          {/* Free Box Icon */}
          <div className={styles.free_box}>
            <SvgFreeBoxBack className={styles.free_box_back_icon} />
            <SvgModalFreeBox className={styles.free_box_icon} />
          </div>

          {/* Open Button */}
          <div className={styles.open_button_box}>
            <button onClick={showAd} className={styles.open_button}>
              <SvgPlay />
              <div className={styles.open_button_text}>Open Free Box</div>
            </button>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default FreeBoxModal;