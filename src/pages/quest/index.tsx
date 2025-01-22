
import styles from './index.module.css'; // CSS 모듈을 import
import { QuestComponent } from '@/components';
import { QuestBottomSheet } from '@/sheets';

const Quest = () => {

  return (
    <>
      {/* Content */}
      <QuestComponent />

      {/* Sheets */}
      <QuestBottomSheet />
    </>
  )
}

export default Quest