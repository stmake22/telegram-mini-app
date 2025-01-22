import styles from './index.module.css'; // CSS 모듈을 import
import { Sheet } from "react-modal-sheet"
import { useRef, useState } from 'react';
import CustomSheetHeader from '../components/CustomSheetHeader';
import { QuestionItemType, QuestionListItem } from '@/components';
import { useModalStore } from '@/store';

const datas = Array.from({ length: 6 }).map((_, i) => {
  return { id: `q-${i}`, text: `TEXT ${i}`, type: QuestionItemType.QUEST, shells: 100  }
})

const QuestBottomSheet = () => {
  const { questBottomSheet, setQuestBottomSheet } = useModalStore();

  const [isScrolled, setIsScrolled] = useState(false); // 스크롤 상태
  const scrollRef = useRef<HTMLDivElement>(null); // 스크롤 참조

  // useEffect(() => {
  //   if(scrollRef.current) console.log('scrollRef.current - ', scrollRef.current);
  // },[scrollRef.current])

  const handleScroll = () => {
    // console.log(scrollRef.current?.scrollTop);
    
    if (scrollRef.current) {
      const scrollTop = scrollRef.current.scrollTop;
      setIsScrolled(scrollTop > 0); // 스크롤이 0보다 크면 true
    }
  };

  return (
    <Sheet
      isOpen={questBottomSheet ? true : false}
      onClose={() => setQuestBottomSheet(null)}
      snapPoints={[466, 0]}
      initialSnap={0}
      className={styles.modal}
    >
      

      <Sheet.Container>
        {/* <Sheet.Header /> */}
        <CustomSheetHeader />

        <Sheet.Content className={styles.modal_content}>
          {
            questBottomSheet && (
              <div className={`${isScrolled && styles.bottom_shadow}`}>
                <QuestionListItem item={ { ...questBottomSheet, type: QuestionItemType.HEADER } } />
              </div>
            )
          }

          <Sheet.Scroller 
            ref={scrollRef}
            className={`scroll_hidden`} 
            onWheel={handleScroll}
            onTouchMove={handleScroll}
            draggableAt="both"
          >
            {/* Some content here that makes the sheet content scrollable */}
            {
              datas.map((item, index) =>
                <QuestionListItem index={index} key={`quest_item_${index}`} item={item} />
              )
            }
          </Sheet.Scroller>
          
          <div className={styles.close_btn_box}>
            <button onClick={() => setQuestBottomSheet(null)} className={styles.button_class}>Close</button>
          </div>
        </Sheet.Content>
      </Sheet.Container>
            
      <Sheet.Backdrop onTap={() => {}} />
    </Sheet>
  )
}

export default QuestBottomSheet;