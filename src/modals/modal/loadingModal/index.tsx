import styles from './index.module.css'; // CSS 모듈을 import
import Modal, { Styles } from 'react-modal';
import { useEffect } from 'react';
import { useModalStore } from '@/store';
import { ImgLoading } from '@/images';

const customStyles:Styles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '100%',
    width: '100%',
    borderBottom: '0!important',
    borderRadius: '0!important',
    padding: '0!important'
  },
  overlay: {}
};

Modal.setAppElement('#root');

// background-image: url('../../../assets//images/loading/loading.png');

const LoadingModal = () => {
  const { loadingModal, setLoadingModal } = useModalStore();

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  useEffect(() => {
    setTimeout(() => {
      closeModal();
    },4000)
  },[]);

  const closeModal = () => setLoadingModal(false);

  return (
    <Modal
      id="loading_Modal"
      isOpen={loadingModal}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div className={styles.container}>
        <div className={styles.loading_box}>
          <ImgLoading className={styles.loading_image} />
          <div className={styles.loader}></div>
        </div>
      </div>
    </Modal>
  )
}

export default LoadingModal;