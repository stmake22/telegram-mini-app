import styles from './index.module.css'; // CSS 모듈을 import
import { ImgSeaOtter } from '@/images';
import { SvgFreeBox, SvgSun } from '@/icons';
import { useState } from 'react';
import { useModalStore } from '@/store';

const GameView = () => {
  const { setFreeBoxModal } = useModalStore();
  const [active, setActive] = useState<boolean>(false);

  const handleActive = () => setActive(true);
  const handleNonActive = () => setActive(false);
  const handleOpenFreeBox = () => setFreeBoxModal(true);

  const handleStopEvent = (e:any) => e.stopPropagation();

  return (
    <div
      onMouseDown={handleActive}
      onMouseUp={handleNonActive}
      onTouchStart={handleActive}
      onTouchEnd={handleNonActive}
      className={styles.game_view}
    >
      <div className={styles.free_box_flex}>
        <button 
          onMouseDown={handleStopEvent}
          onMouseUp={handleStopEvent}
          onTouchStart={handleStopEvent}
          onTouchEnd={handleStopEvent}
          onClick={(e) => {
            handleOpenFreeBox();
            e.stopPropagation();
          }} 
          className={styles.free_box_btn}
        >
          <SvgFreeBox />
          <div className={styles.free_box_text}>Free Box</div>
        </button>
      </div>

      <div className={styles.sun_box}>
        <SvgSun />
      </div>

      <ImgSeaOtter className={styles.sea_otter} active={active} />
    </div>
  )
}

export default GameView;