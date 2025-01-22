import styles from './index.module.css'; // CSS 모듈을 import
import { Navigate, Route, Routes } from "react-router-dom";
import { Game, Quest, Raffle, Referral, Roulette, Wallet } from '@/pages';

const RouteContainer = () => {
  return (
    <main className={styles.game_background}>
      <Routes>
        {/* Tabs */}
        <Route path="/" element={<Navigate to="/game" replace />} />
        <Route path="/referral" element={<Referral />} />
        <Route path="/roulette" element={<Roulette />} />
        <Route path="/game" element={<Game />} />
        <Route path="/raffle" element={<Raffle />} />
        <Route path="/quest" element={<Quest />} />

        {/* Etc. */}
        <Route path="/wallet" element={<Wallet />} />
      </Routes>
    </main>
  )
}

export default RouteContainer;