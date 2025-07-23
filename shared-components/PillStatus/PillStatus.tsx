import React from 'react';
import { Box } from '@/shared-components/Box';
import { TextStyle } from '@/shared-components/TextStyle';
import { PillStatusProps } from './PillStatus.types';

const PillStatus: React.FC<PillStatusProps> = ({ variant = 'default', children, isCircle = false }) => {
	return (
		<Box
			className='ds-ui-pill-status'
			$bgColor={`--color-pill-bg-${variant}`}
			px={8}
			py={4}
			border='all'
			$borderWidth={1}
			$borderColor={`--color-pill-bg-${variant}`}
			$borderRadius={isCircle ? 'xl' : 'xs'}
			$justifyContent={'center'}
			style={{
				width: 'fit-content'
			}}
		>
			<TextStyle variant='allCap' color={`--color-pill-text-${variant}`}>
				{children}
			</TextStyle>
		</Box>
	);
};

export default PillStatus;
