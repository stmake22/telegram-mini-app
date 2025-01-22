
import { ImgHTMLAttributes } from 'react';
import loading from './loading.png'

interface Props extends ImgHTMLAttributes<HTMLImageElement> {

}

const ImgLoading = ({ ...props }: Props) => <img {...props} src={loading} />

export default ImgLoading;
