import React from 'react';
import { StyledSvg } from './SVG.styled';
import { IconProps } from './SVG.types';

export const ImageProfileCircleSVG: React.FC<IconProps> = ({ color = '', ...rest }) => (
	<StyledSvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fill='none' {...rest}>
		<path
			d='M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z'
			fill='#EFF7FC'
		/>
		<path
			fill-rule='evenodd'
			clip-rule='evenodd'
			d='M9 8.91429C9 10.5238 10.3431 11.8286 12 11.8286C13.6569 11.8286 15 10.5238 15 8.91429C15 7.30477 13.6569 6 12 6C10.3431 6 9 7.30477 9 8.91429ZM16.9772 16.8257C16.2314 14.8011 14.2371 13 12 13C9.76287 13 7.76863 14.8011 7.02277 16.8257C6.97978 16.9422 6.99836 17.0714 7.0726 17.1723C7.14683 17.2732 7.26748 17.3333 7.39618 17.3333H16.6038C16.7325 17.3333 16.8532 17.2732 16.9274 17.1723C17.0016 17.0714 17.0202 16.9422 16.9772 16.8257Z'
			fill='#65B2E8'
		/>
	</StyledSvg>
);

ImageProfileCircleSVG.displayName = 'ImageProfileCircleSVG';

export default ImageProfileCircleSVG;
