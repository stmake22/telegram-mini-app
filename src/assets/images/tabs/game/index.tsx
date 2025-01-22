
import { ImgHTMLAttributes } from 'react';
import game from './game.png'
import gameDisable from './game_disable.png'

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  active?: boolean;
}

const ImgTabGame = ({ active = false, ...props }: Props) => <img {...props} src={active ? game : gameDisable} />

export default ImgTabGame;
