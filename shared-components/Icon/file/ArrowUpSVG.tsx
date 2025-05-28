import React from 'react';
import { StyledSvg } from './SVG.styled';
import { IconProps } from './SVG.types';

export const ArrowUpSVG: React.FC<IconProps> = ({
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
			d='M18.707 15.7071C18.5348 15.8793 18.3057 15.9827 18.0627 15.998C17.8196 16.0133 17.5794 15.9394 17.387 15.7901L17.293 15.7071L12 10.4151L6.70697 15.7071C6.53478 15.8793 6.30568 15.9827 6.06265 15.998C5.81962 16.0133 5.57937 15.9394 5.38697 15.7901L5.29297 15.7071C5.12079 15.5349 5.01736 15.3058 5.00208 15.0628C4.9868 14.8198 5.06072 14.5795 5.20997 14.3871L5.29297 14.2931L11.293 8.29314C11.4652 8.12096 11.6943 8.01753 11.9373 8.00225C12.1803 7.98697 12.4206 8.06089 12.613 8.21014L12.707 8.29314L18.707 14.2931C18.8944 14.4807 18.9998 14.735 18.9998 15.0001C18.9998 15.2653 18.8944 15.5196 18.707 15.7071Z'
			fill='currentColor'
		/>
	</StyledSvg>
);

ArrowUpSVG.displayName = 'ArrowUpSVG';

export default ArrowUpSVG;
