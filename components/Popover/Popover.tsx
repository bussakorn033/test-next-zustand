import React, { useRef, useEffect, useState } from 'react';
import { PopoverProps } from './Popover.types';
import * as S from './Popover.styled';

const Popover: React.FC<PopoverProps> = ({ isOpen, anchorRef, children }) => {
	const [position, setPosition] = useState({ top: 0, left: 0 });
	const popoverRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (isOpen && anchorRef.current && popoverRef.current) {
			const anchorRect = anchorRef.current.getBoundingClientRect();
			const popoverWidth = popoverRef.current.offsetWidth;
			const screenWidth = window.innerWidth;

			let left = anchorRect.left + window.scrollX;

			if (left + popoverWidth > screenWidth) {
				left = screenWidth - popoverWidth - 16;
			}

			if (left < 16) {
				left = 16;
			}

			setPosition({
				top: anchorRect.bottom + window.scrollY + 4,
				left: left
			});
		}
	}, [isOpen, anchorRef]);

	if (!isOpen) return null;

	return (
		<S.Popover ref={popoverRef} style={{ top: position.top, left: position.left }}>
			{children}
		</S.Popover>
	);
};

export default Popover;
