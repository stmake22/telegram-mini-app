import GameView from './GameView';
import styles from './index.module.css'; // CSS 모듈을 import
import LiveBar from './LiveBar';
import StatusBar from './StatusBar';


const GameComponent = () => {
  return (
    <div className={styles.game}>
      <GameView />

      <div>
        <StatusBar /> 
        <LiveBar />
      </div>
    </div>
  )
}

export default GameComponent;