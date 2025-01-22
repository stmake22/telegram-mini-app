import { useModalStore } from '@/store';
import styles from './index.module.css'; // CSS 모듈을 import


export enum QuestionItemType {
  CLAIM = 'claim',
  PROJECT = 'project',
  ROULETTE = 'roulette',
  QUEST = 'quest',
  HEADER = 'header'
};

export type ListItemType = {
  id: string;
  text: string;
  type: QuestionItemType;
  shells?: number;
  pearls?: number;
  last?: boolean;
};

interface ListItemProps {
  // type: QuestionItemType;
  item: ListItemType;
  index?: number;
};

const ListItem = ({ item, index }:ListItemProps) => {
  const { setQuestBottomSheet } = useModalStore();

  const bottomSheetHandle = () => {

  }

  const typeTransHandle = () => {
    switch(item.type){
      case QuestionItemType.CLAIM:
        return <button className={styles.button_claim}>Get 99 Shell</button>;
      case QuestionItemType.ROULETTE:
        return <button className={styles.button_roulette}>Get 99 Shell</button>;
      case QuestionItemType.PROJECT:
        return <button onClick={() => setQuestBottomSheet(item)} className={styles.button_project}>GO</button>;
      case QuestionItemType.QUEST:
        return <button onClick={() => setQuestBottomSheet(item)} className={styles.button_quest}>GO</button>;
      case QuestionItemType.HEADER:
        return <></>
    }
  }

  return item && (
    <div className={`${styles.list_item} ${item.type === QuestionItemType.HEADER && styles.list_item_header} ${index === 0 && styles.list_item_first} ${item.last && styles.bottom_padding}`}>
      {/* Image */}
      <div className={styles.item_image_box}>
        <div className={`${styles.item_image} ${(item.type === QuestionItemType.HEADER || item.type === QuestionItemType.QUEST) && styles.item_image_sheet}`}></div>
      </div>
      
      {/* Content */}
      <div className={styles.item_content_box}>
        <div className={styles.item_content_title}>{item.text||''}</div>
        {
          (item.shells || item.pearls) && (
            <div className={styles.item_content_sub}>
              {item.shells && `${item.shells} Shells`}  {(item.shells && item.pearls) && '·'} {item.pearls && `${item.pearls} Pearls`} 
            </div>
          )
        }
        
      </div>

      {/* Button */}
      <div className={styles.item_button_box}>
        {typeTransHandle()}
      </div>
    </div>
  )
}

export default ListItem;