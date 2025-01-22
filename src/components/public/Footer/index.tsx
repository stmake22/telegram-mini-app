import { Link, useLocation } from 'react-router-dom';
import styles from './index.module.css'; // CSS 모듈을 import
import { ImgTabGame, ImgTabQuest, ImgTabRaffle, ImgTabReferral, ImgTabRoulette } from '@/images';
// import WebApp from '@twa-dev/sdk';
// import useSafeAreaInsets from '@/hooks/useSafeAreaInsets';

export enum PagePathTypes {
  REFERRAL = '/referral',
  ROULETTE = '/roulette',
  GAME = '/game',
  RAFFLE = '/raffle',
  QUEST = '/quest',
  WALLET = '/wallet',
}

export enum PageNamesTypes {
  REFERRAL = 'Referral',
  ROULETTE = 'Roulette',
  GAME = 'Game',
  RAFFLE = 'Raffle',
  QUEST = 'Quest',
  WALLET = 'Wallet',
}

const Pages = [
  { name: 'Referral', path: '/referral', icon: (v:boolean) => <ImgTabReferral className={styles.footer_icons} active={v} /> },
  { name: 'Roulette', path: '/roulette', icon: (v:boolean) => <ImgTabRoulette className={styles.footer_icons} active={v} /> },
  { name: 'Game', path: '/game', icon: (v:boolean) => <ImgTabGame className={styles.footer_icons} active={v} /> },
  { name: 'Raffle', path: '/raffle', icon: (v:boolean) => <ImgTabRaffle className={styles.footer_icons} active={v} /> },
  { name: 'Quest', path: '/quest', icon: (v:boolean) => <ImgTabQuest className={styles.footer_icons} active={v} /> }
];

const Footer = () => {
  const location = useLocation(); // 현재 URL 정보를 가져옴

  // const { bottom } = useSafeAreaInsets();
  // console.log(bottom);
  // const asd = () => {
  //   document.getElementsByTagName("html")[0].classList.remove("light-mode");
  //   document.getElementsByTagName("html")[0].classList.add("dark-mode");
  // }

  // const asdf = () => {
  //   document.getElementsByTagName("html")[0].classList.remove("dark-mode");
  //   document.getElementsByTagName("html")[0].classList.add("light-mode");
  // }

  switch(location.pathname){
    case PagePathTypes.WALLET:
      return null;
    default:
      return (
        <div className={styles.footer}>
          {/* Footer Component */}
          <div className={styles.footer_box}>
            {
              Pages.map((item) =>
                <Link key={`${item.name}-page`} to={item.path} className={styles.footer_item}>
                  <div className={styles.footer_icon}>
                    {item.icon(item.path === location.pathname)}
                  </div>
    
                  <div className={`${styles.footer_text} ${item.path === location.pathname && styles.active}`}>{item.name}</div>
                </Link>
              )
            }
          </div>
        </div>
      )
  }
}

export default Footer