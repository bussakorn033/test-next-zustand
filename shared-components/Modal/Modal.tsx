import React, { useEffect } from 'react';
import { Box } from '@/shared-components/Box';
import { Icon } from '@/shared-components/Icon';
import { TextStyle } from '@/shared-components/TextStyle';
import { ModalProps } from './Modal.types';
import * as S from './Modal.styled';

const Modal: React.FC<ModalProps> = ({
	isOpen,
	onClose,
	children,
	width,
	height,
	title,
	className,
	...rest
}) => {
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose();
		};
		if (isOpen) {
			window.addEventListener('keydown', handleKeyDown);
		} else {
			window.removeEventListener('keydown', handleKeyDown);
		}

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return (
		<S.Overlay onClick={onClose}>
			<S.Modal
				className={className}
				width={width}
				height={height}
				onClick={(e) => e.stopPropagation()}
				{...rest}
			>
				<Box direction='row' alignItems='center' justifyContent='space-between' pb={16}>
					<TextStyle variant='h4' color='--color-primary'>
						{title}
					</TextStyle>
					<S.CloseButton onClick={onClose}>
						<Icon icon='close' />
					</S.CloseButton>
				</Box>
				{children}
			</S.Modal>
		</S.Overlay>
	);
};

export default Modal;
