import React from 'react';
import { Box } from '@/shared-components/Box';
import { TextStyle } from '@/shared-components/TextStyle';
import { PillStatusProps } from './PillStatus.types';

const PillStatus: React.FC<PillStatusProps> = ({ variant = 'default', children, isCircle = false }) => {
	return (
		<Box
			bgColor={`var(--color-pill-bg-${variant})`}
			px={8}
			py={4}
			border='all'
			borderRadius={isCircle ? 'xl' : 'xs'}
			justifyContent={'center'}
			style={{
				width: 'fit-content'
			}}
		>
			<TextStyle variant='allCap' color={`color-pill-text-${variant}`}>
				{children}
			</TextStyle>
		</Box>
	);
};

export default PillStatus;
