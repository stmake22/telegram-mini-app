import styles from './index.module.css'; // CSS 모듈을 import
import WebApp from '@twa-dev/sdk'

// export enum QuestionItemType {
//   CLAIM = 'claim',
//   PROJECT = 'project',
//   ROULETTE = 'roulette',
//   QUEST = 'quest',
//   HEADER = 'header'
// };

export enum ReferralItemType {
  HEADER = 'header',
  ITEM = 'item'
}

export type ListItemType = {
  id: string;
  url?: string;
  type: ReferralItemType;
  shells_for_friend?: number;
  shells_for_me?: number;
  profile_image?: string;
  tag_name?: string;
  user_name?: string;
};

interface ListItemProps {
  // type: QuestionItemType;
  item: ListItemType;
  index?: number;
};

const ListItem = ({ item, index }:ListItemProps) => {
  // const { setQuestBottomSheet } = useModalStore();

  // const bottomSheetHandle = () => {

  // }

  // const typeTransHandle = () => {
  //   switch(item.type){
  //     case QuestionItemType.CLAIM:
  //       return <button className={styles.button_claim}>Get 99 Shell</button>;
  //     case QuestionItemType.ROULETTE:
  //       return <button className={styles.button_roulette}>Get 99 Shell</button>;
  //     case QuestionItemType.PROJECT:
  //       return <button onClick={() => setQuestBottomSheet(item)} className={styles.button_project}>GO</button>;
  //     case QuestionItemType.QUEST:
  //       return <button onClick={() => setQuestBottomSheet(item)} className={styles.button_quest}>GO</button>;
  //     case QuestionItemType.HEADER:
  //       return <></>
  //   }
  // }

  const handleMessage = () => {
    const url = encodeURIComponent("https://t.me/sea_pearl_game_ads_test_bot"); // 공유할 링크
    const text = encodeURIComponent("Check out this amazing website!"); // 공유할 텍스트
    const shareUrl = `https://t.me/share/url?url=${url}&text=${text}`;

    // WebApp.openTelegramLink 사용
    if (WebApp?.openTelegramLink) {
      WebApp.openTelegramLink(shareUrl);
    } else {
      // Fallback: 브라우저에서 링크 열기
      window.open(shareUrl, "_blank");
    }
  }

  /** Header Area */
  if(item && item.type === ReferralItemType.HEADER){
    return (
      <div className={styles.list_item_header}>
        <div className={styles.item_header_content_box}>
          <span className={styles.item_header_referral_text}>{item.shells_for_me} Shell</span> for you & <span className={styles.item_header_referral_text}>{item.shells_for_friend} Shell</span> for Friend
        </div>

        <div className={styles.item_header_url_box}>
          <div className={styles.item_header_url_text}>{item.url}</div>

          <div className={styles.item_header_btn_copy_box}>
            <button className={styles.item_header_btn_copy}>Copy</button>
          </div>
        </div>

        <div className={styles.item_button_box}>
          <button onClick={handleMessage} className={styles.item_button}>Send Message</button>
        </div>
      </div>
    )
  }

  /** Item Area */
  if(item && item.type === ReferralItemType.ITEM){
    return (
      <div className={styles.list_item}>
        <div className={styles.item_image_box}>
          <div className={styles.item_image}></div>
        </div>

        <div className={styles.item_content_box}>
          <div className={styles.item_tag_name}>{item.tag_name}</div>
          <div className={styles.item_user_name}>{item.user_name}</div>
        </div>
      </div>
    )
  }
}

export default ListItem