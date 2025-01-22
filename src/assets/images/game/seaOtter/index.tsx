
import React, { ImgHTMLAttributes } from 'react';
import seaOtter from './sea_otter.png'
import seaOtterActive from './sea_otter_active.png'

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  active?: boolean;
}

const ImgSeaOtter = ({ active = false, ...props }: Props) => <img {...props} src={active ? seaOtterActive : seaOtter} />

export default React.memo(ImgSeaOtter);
