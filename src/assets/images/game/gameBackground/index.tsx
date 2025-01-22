
import { ImgHTMLAttributes } from 'react';
import bkg from './bkg.png'

interface Props extends ImgHTMLAttributes<HTMLImageElement> {

}

const ImgGameBackground = ({ ...props }: Props) => <img {...props} src={bkg} />

export default ImgGameBackground;
