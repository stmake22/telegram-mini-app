import styles from './index.module.css'; // CSS 모듈을 import
import { ItemContent, Virtuoso } from "react-virtuoso";
import ListItem from "./ListItem";
import Tabs from './Tabs';
import OnGoing from './OnGoing';
import { useRaffleStore } from '@/store';

const RaffleConponent = () => {
  const { tabState } = useRaffleStore();

  const renderedItem: ItemContent<number, any> = (index) => {
    // item={data[groupIndex].items[index]}
    return <ListItem key={`raffle_${index}`} />
  }

  // const Item = (item:any, index:number) => <ListItem key={`raffle_${index}`} />;

  return (
    <div className={styles.raffle}>
      <div className={styles.raffle_innerbox}>
        <Tabs />

        

        <Virtuoso
          className={`scroll_hidden`}
          initialItemCount={20}
          data={[1,1,1,1,1,1,1,1,1,1]}
          components={{
            Header: () => <OnGoing />,
            Footer: () => <div style={{ height: 24 }}></div>
          }}
          // children={<OnGoing />}
          itemContent={renderedItem}
        />
      </div>
    </div>
  )
}

export default RaffleConponent;