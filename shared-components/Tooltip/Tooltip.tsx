import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@/shared-components/Box';
import { TextStyle } from '@/shared-components/TextStyle';
import { TooltipProps } from './Tooltip.types';
import * as S from './Tooltip.styled';

const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
	const [isVisible, setIsVisible] = useState(false);
	const [position, setPosition] = useState({ top: 0, left: 0 });
	const triggerRef = useRef<HTMLDivElement>(null);
	const tooltipRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!isVisible || !triggerRef.current || !tooltipRef.current) return;
		const padding = 8;
		const offset = 8;
		const triggerRect = triggerRef.current.getBoundingClientRect();
		const tooltipRect = tooltipRef.current.getBoundingClientRect();
		const calcLeft = () => {
			const center = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
			if (center < padding) return padding;
			if (center + tooltipRect.width > window.innerWidth - padding) {
				return window.innerWidth - tooltipRect.width - padding;
			}
			return center;
		};
		const left = calcLeft();
		const top = triggerRect.bottom + offset;
		setPosition({ top, left });
	}, [isVisible]);

	return (
		<Box>
			<S.TooltipWrapper
				ref={triggerRef}
				onMouseEnter={() => setIsVisible(true)}
				onMouseLeave={() => setIsVisible(false)}
			>
				{children}
			</S.TooltipWrapper>
			<S.TooltipBox
				ref={tooltipRef}
				isVisible={isVisible}
				px={8}
				py={4}
				border='all'
				borderRadius='xs'
				style={{ top: position.top, left: position.left }}
			>
				<TextStyle textAlign='center' variant='paragraphXSmall' color={'--color-neutral-light'}>
					{content}
				</TextStyle>
			</S.TooltipBox>
		</Box>
	);
};

export default Tooltip;
