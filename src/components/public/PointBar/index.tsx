import React from "react"
import styles from './index.module.css'; // CSS 모듈을 import
import { SvgPearl, SvgShell, SvgUSDT } from "@/icons"

const PointBar = () => {
  return (
    <div className={styles.header_side_back_item}>
      <div className={styles.point_center_item}>
        {/* Shell */}
        <div className={styles.point_center_icon}>
          <SvgShell />
        </div>

        <div className={styles.point_center_number}>125k</div>
      </div>

      <div className={styles.point_center_item}>
        {/* Pearl */}
        <div className={styles.point_center_icon}>
          <SvgPearl />
        </div>

        <div className={styles.point_center_number}>125.0000</div>
      </div>

      <div className={styles.point_center_item}>
        {/* USDT */}
        <div className={styles.point_center_icon}>
          <SvgUSDT />
        </div>

        <div className={styles.point_center_number}>123k</div>
      </div>
    </div>
  )
}

export default React.memo(PointBar)