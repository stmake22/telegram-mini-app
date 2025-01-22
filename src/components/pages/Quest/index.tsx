import styles from './index.module.css'; // CSS 모듈을 import
import { GroupedVirtuoso, GroupItemContent } from "react-virtuoso";
import ListItem, { ListItemType, QuestionItemType } from "./ListItem";


const data:{ title:string, items:ListItemType[] }[] = [
  {
    title: 'Daily Quest',
    items: [
      { id: 't-0', text: 'Watch Ad', type: QuestionItemType.CLAIM },
      { id: 't-1', text: 'Spin Roulette x3', type: QuestionItemType.ROULETTE, last: true }
    ]
  },
  {
    title: 'Quest',
    items: Array.from({ length: 30 }).map((_, i) => {
      return { id: `a-${i}`, text: 'PJT Name', type: QuestionItemType.PROJECT, shells: 100, pearls: 100  }
    })
  }
];

const QuestComponent = () => {
  const renderedItem: GroupItemContent<any, any> = (index, groupIndex) => {
    return <ListItem key={`quest_${groupIndex}_${index}`} item={data[groupIndex].items[index]} />
  }

  const renderedGroup = (index:number) => {
    return <div className={styles.group_header}>{data[index].title}</div>;
  }

  return (
    <div className={styles.quest}>
      <div className={styles.quest_innerbox}>
        <GroupedVirtuoso
          className={`scroll_hidden`}
          groupCounts={data.map((item) => item.items.length)}
          initialItemCount={20}
          groupContent={renderedGroup}
          itemContent={renderedItem}

        />
      </div>
    </div>
  )
}

export default QuestComponent;