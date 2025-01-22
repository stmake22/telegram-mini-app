import { SvgClose } from '@/icons';
import styles from './index.module.css'; // CSS 모듈을 import

interface Props {
  onClick: (v:boolean) => void;
}

const ModalCloseButton = ({ onClick }: Props) => {
  
  return (
    <button onClick={() => onClick(false)} className={styles.modal_close_button}>
      <SvgClose />
    </button>
  )
}

export default ModalCloseButton;