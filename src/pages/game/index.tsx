import styles from './index.module.css'; // CSS 모듈을 import
import { useEffect } from 'react';
import { useUtilsStore } from '@/store';
import { GameComponent } from '@/components';
import { BoostModal, FreeBoxModal, UpgradeModal } from '@/modals';
import { postUserInfo } from '@/services/game';
import WebApp from '@twa-dev/sdk';
import { PostUserInfoRequest } from '@/services/game/type';

const Game = () => {
  const { setLoadingState } = useUtilsStore();

  
  useEffect(() => {
    // setLoadingState(true);
    testtttt();
    setTimeout(() => {
      // setLoadingState(false);


    },5000);
  },[]);

  const testtttt = async() => {
    try {
      console.log('tetetet - ', typeof WebApp.initData);
      const tetetet = await postUserInfo(WebApp.initDataUnsafe as PostUserInfoRequest);

    } catch(error) {
      // console.log('error - ', error);
      WebApp.showAlert(JSON.stringify(error));
    }
  }

  return (
    <>
      <GameComponent />

      {/* Modals */}
      <FreeBoxModal />
      <BoostModal />
      <UpgradeModal />
    </>
  )
}

export default Game