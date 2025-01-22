import styles from './index.module.css'; // CSS 모듈을 import
import { GroupedVirtuoso, GroupItemContent } from "react-virtuoso";
import ListItem, { ListItemType, ReferralItemType } from "./ListItem";

const data:{ title:string, items:ListItemType[] }[] = [
  {
    title: 'Referral',
    items: [
      { id: 't-0', url: 'Your Link: https://t.me/123341442352123123123123213', shells_for_me: 1000, shells_for_friend: 500, type: ReferralItemType.HEADER },
    ]
  },
  {
    title: 'Friend List',
    items: Array.from({ length: 30 }).map((_, i) => {
      return { id: `a-${i}`, profile_image: '', tag_name: `@@test_tag_name_${i}`, user_name: `user_name_${i}`, type: ReferralItemType.ITEM  }
    })
  }
];

const ReferralComponent = () => {
  const renderedItem: GroupItemContent<any, any> = (index, groupIndex) => {
    return <ListItem key={`quest_${groupIndex}_${index}`} item={data[groupIndex].items[index]} />
  }

  const renderedGroup = (index:number) => {
    // return <div className={`${styles.group_header} ${index && styles.margin_top}`}>{data[index].title}</div>;
    return <div className={styles.group_header}>{data[index].title}</div>;
  }

  return (
    <div className={styles.referral}>
      <div className={styles.referral_innerbox}>
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

export default ReferralComponent;