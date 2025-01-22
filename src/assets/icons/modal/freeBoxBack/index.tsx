
import { SVGProps } from 'react';
import styles from './index.module.css'; // CSS 모듈을 import

interface Props extends SVGProps<SVGSVGElement> {
    size?: number;
}

const SvgFreeBoxBack = ({ size = 239, ...props }: Props) => (
  <svg width={size} height={size} viewBox={`0 0 239 239`} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g filter="url(#filter0_f_3059_13352)">
      <path d="M189 119.5C189 81.1162 157.884 50 119.5 50C81.1162 50 50 81.1162 50 119.5C50 157.884 81.1162 189 119.5 189C157.884 189 189 157.884 189 119.5Z" fill="#0057BD"/>
    </g>

    <defs>
      <filter id="filter0_f_3059_13352" x="0" y="0" width={size} height={size} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_3059_13352"/>
      </filter>
    </defs>
  </svg>
);

export default SvgFreeBoxBack;
