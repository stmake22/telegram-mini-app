
import { ImgHTMLAttributes } from 'react';
import Roulette from './roulette_none.png'

interface Props extends ImgHTMLAttributes<HTMLImageElement> {

}

const ImgRouletteMachine = ({ ...props }: Props) => <img {...props} src={Roulette} />

export default ImgRouletteMachine;
