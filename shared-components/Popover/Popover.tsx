import React, { useRef, useEffect, useState } from 'react';
import { PopoverProps } from './Popover.types';
import * as S from './Popover.styled';

const Popover: React.FC<PopoverProps> = ({
	isOpen,
	anchorRef,
	children,
	width,
	onClose,
	$isAllowDisplayTop = true,
	...rest
}) => {
	const [position, setPosition] = useState({ top: 0, left: 0 });
	const popoverRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (isOpen && anchorRef.current && popoverRef.current) {
			const anchorRect = anchorRef.current.getBoundingClientRect();
			const popoverRect = popoverRef.current.getBoundingClientRect();
			
			if (!anchorRect || !popoverRect) return;

			const popoverWidth = popoverRef.current.offsetWidth;
			const popoverHeight = popoverRef.current.offsetHeight;
			const screenWidth = window.innerWidth;
			const screenHeight = window.innerHeight;
			let left = anchorRect.left + window.scrollX;
			let top = 0;

			if (left + popoverWidth > screenWidth) {
				left -= popoverRect.width - anchorRect.width;
			}

			const offset = 16;
			const availableSpaceAbove = anchorRect.top;

			if (
				$isAllowDisplayTop &&
				((availableSpaceAbove > popoverHeight + offset && anchorRect.height > popoverRect.height) ||
					anchorRect.top + popoverRect.height > screenHeight)
			) {
				top = anchorRect.top + window.scrollY - popoverHeight - offset;
			} else {
				top = anchorRect.bottom + window.scrollY + offset;
			}

			setPosition({ top, left });
		}
	}, [isOpen, anchorRef]);

	useEffect(() => {
		const handleEventListener = () => {
			if (onClose) {
				onClose();
			}
		};

		window.addEventListener('resize', handleEventListener);

		return () => {
			window.removeEventListener('resize', handleEventListener);
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return (
		<S.Popover
			data-testid='SHARED_COMPONENTS_POPOVER'
			className='ds-ui-popover'
			ref={popoverRef}
			width={width}
			{...rest}
			style={
				{
					visibility: position.top && position.left ? 'visible' : 'hidden',
					top: position.top,
					left: position.left,
					...rest.style
				} as React.CSSProperties
			}
		>
			{children}
		</S.Popover>
	);
};

export default Popover;
