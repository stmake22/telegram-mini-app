
import { ImgHTMLAttributes } from 'react';
import raffle from './raffle.png'
import raffleDisable from './raffle_disable.png'

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  active?: boolean;
}

const ImgTabRaffle = ({ active = false, ...props }: Props) => <img {...props} src={active ? raffle : raffleDisable} />

export default ImgTabRaffle;
