
import { SVGProps } from 'react';
import styles from './index.module.css'; // CSS 모듈을 import

interface Props extends SVGProps<SVGSVGElement> {
    size?: number;
}

const SvgClose = ({ size = 20, ...props }: Props) => (
  <svg width={size} height={size} viewBox={`0 0 20 20`} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M15.8249 4.7586C16.076 5.00965 16.076 5.41669 15.8249 5.66774L6.05348 15.4392C5.80243 15.6902 5.39539 15.6902 5.14434 15.4392C4.89329 15.1881 4.89329 14.7811 5.14434 14.53L14.9158 4.7586C15.1668 4.50755 15.5739 4.50755 15.8249 4.7586Z" fill="white"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M5.14434 4.7586C5.39539 4.50755 5.80243 4.50755 6.05348 4.7586L15.8249 14.53C16.076 14.7811 16.076 15.1881 15.8249 15.4392C15.5739 15.6902 15.1668 15.6902 14.9158 15.4392L5.14434 5.66774C4.89329 5.41669 4.89329 5.00965 5.14434 4.7586Z" fill="white"/>
  </svg>
);

export default SvgClose;
