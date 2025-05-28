import React from 'react';
import { StyledSvg } from './SVG.styled';
import { IconProps } from './SVG.types';

export const ArrowLeftSVG: React.FC<IconProps> = ({
	color = '#002D63',
	width = '24px',
	height = '24px',
	...rest
}) => (
	<StyledSvg
		viewBox='0 0 24 24'
		xmlns='http://www.w3.org/2000/svg'
		color={color}
		width={width}
		height={height}
		{...rest}
	>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M14.2929 5.29267C14.4728 5.11332 14.7143 5.0092 14.9682 5.00144C15.2222 4.99369 15.4696 5.08289 15.6601 5.25092C15.8507 5.41895 15.9702 5.65322 15.9943 5.90615C16.0184 6.15907 15.9453 6.41168 15.7899 6.61267L15.7069 6.70667L10.4149 11.9997L15.7069 17.2927C15.879 17.4649 15.9825 17.694 15.9977 17.937C16.013 18.18 15.9391 18.4203 15.7899 18.6127L15.7069 18.7067C15.5347 18.8788 15.3056 18.9823 15.0625 18.9976C14.8195 19.0128 14.5793 18.9389 14.3869 18.7897L14.2929 18.7067L8.29286 12.7067C8.12068 12.5345 8.01725 12.3054 8.00197 12.0624C7.98669 11.8193 8.06061 11.5791 8.20986 11.3867L8.29286 11.2927L14.2929 5.29267Z'
			fill='currentColor'
		/>
	</StyledSvg>
);

export default ArrowLeftSVG;
