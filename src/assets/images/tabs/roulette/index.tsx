
import { ImgHTMLAttributes } from 'react';
import roulette from './roulette.png'
import rouletteDisable from './roulette_disable.png'

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  active?: boolean;
}

const ImgTabRoulette = ({ active = false, ...props }: Props) => <img {...props} src={active ? roulette : rouletteDisable} />

export default ImgTabRoulette;
