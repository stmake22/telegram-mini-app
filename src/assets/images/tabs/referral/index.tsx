
import { ImgHTMLAttributes } from 'react';
import referral from './referral.png'
import referralDisable from './referral_disable.png'

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  active?: boolean;
}

const ImgTabReferral = ({ active = false, ...props }: Props) => <img {...props} src={active ? referral : referralDisable} />

export default ImgTabReferral;
