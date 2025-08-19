import { Box } from '@/shared-components/Box';
import { TextStyle } from '@/shared-components/TextStyle';
import React, { useEffect, useRef, useState } from 'react';
import * as S from './Tooltip.styled';
import { TooltipProps } from './Tooltip.types';
import { nodeToText } from '@/utils/Utility';

const Tooltip: React.FC<TooltipProps> = ({ position = 'bottom', content, children }) => {
	const triggerRef = useRef<HTMLDivElement>(null);
	const tooltipRef = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState(false);
	const [positionBox, setPositionBox] = useState({ top: 0, left: 0 });
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			setMousePosition({
				x: event.clientX,
				y: event.clientY
			});
		};

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	useEffect(() => {
		if (!isVisible || !triggerRef.current || !tooltipRef.current) return;
		const calculatePosition = () => {
			const padding = position === 'top' ? -56 : 16;
			if (!triggerRef.current || !tooltipRef.current) return;
			const triggerRect = triggerRef.current.getBoundingClientRect();
			const popoverRect = tooltipRef.current.getBoundingClientRect();
			let top = triggerRect.height + padding;
			let left = 0;

			const TT = triggerRect.top;
			const TB = triggerRect.bottom;
			const PT = popoverRect.top + popoverRect.height;
			const PB = popoverRect.bottom + popoverRect.height;
			if (TB < PT && TB < PB && !(TT > PT && TB > PB) && mousePosition.y > TB) {
				top *= -1;
				left = 0;
			}

			setPositionBox({
				top,
				left
			});
		};
		calculatePosition();

		window.addEventListener('resize', calculatePosition);
		window.addEventListener('scroll', calculatePosition);

		return () => {
			window.removeEventListener('resize', calculatePosition);
			window.removeEventListener('scroll', calculatePosition);
		};
	}, [isVisible, triggerRef.current, tooltipRef.current]);

	return (
		<Box className='ds-ui-tooltip'>
			<S.TooltipWrapper
				ref={triggerRef}
				onMouseEnter={() => setIsVisible(true)}
				onMouseLeave={() => setIsVisible(false)}
			>
				{children}
			</S.TooltipWrapper>
			<S.TooltipWrapperBox $isVisible={!nodeToText(content) ? false : isVisible}>
				<TextStyle
					$textAlign='center'
					variant='paragraphXSmall'
					color={'--color-neutral-light'}
					$wordBreak='keep-all'
				>
					<S.TooltipBox
						ref={tooltipRef}
						$isVisible={!nodeToText(content) ? false : isVisible}
						px={8}
						py={4}
						border='all'
						width={'auto'}
						$minWidth={'fit-content'}
						$maxWidth={200}
						$borderRadius='xs'
						style={{ top: positionBox.top, left: positionBox.left }}
					>
						{nodeToText(content)}
					</S.TooltipBox>
				</TextStyle>
			</S.TooltipWrapperBox>
		</Box>
	);
};

export default Tooltip;
