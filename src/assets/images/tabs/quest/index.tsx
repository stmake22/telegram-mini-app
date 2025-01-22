
import { ImgHTMLAttributes } from 'react';
import quest from './quest.png'
import questDisable from './quest_disable.png'

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  active?: boolean;
}

const ImgTabQuest = ({ active = false, ...props }: Props) => <img {...props} src={active ? quest : questDisable} />

export default ImgTabQuest;
