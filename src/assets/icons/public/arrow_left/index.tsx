
import { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
    size?: number;
}

const SvgArrowLeft = ({ size = 24, ...props }: Props) => (
  <svg width={props.width ? props.width : 12} height={props.height ? props.height : 24} viewBox={`0 0 12 24`} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M10.2803 4.46967C10.5732 4.76256 10.5732 5.23744 10.2803 5.53033L3.81066 12L10.2803 18.4697C10.5732 18.7626 10.5732 19.2374 10.2803 19.5303C9.98744 19.8232 9.51256 19.8232 9.21967 19.5303L2.21967 12.5303C1.92678 12.2374 1.92678 11.7626 2.21967 11.4697L9.21967 4.46967C9.51256 4.17678 9.98744 4.17678 10.2803 4.46967Z" fill={props.fill ? props.fill : 'white'}/>
  </svg>
);

export default SvgArrowLeft;
