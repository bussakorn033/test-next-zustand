import React, { useEffect } from 'react';
import { Box } from '@/shared-components/Box';
import { Icon } from '@/shared-components/Icon';
import { TextStyle } from '@/shared-components/TextStyle';
import { ModalProps } from './Modal.types';
import * as S from './Modal.styled';
import { Button } from '../Button';

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
			<Box mx={24} width={'fit-content'} $minWidth={'calc(100% - 48px)'}>
				<S.Modal
					className={className}
					width={width}
					height={height}
					onClick={(e) => e.stopPropagation()}
					{...rest}
				>
					<Box direction='row' $alignItems='center' $justifyContent='space-between' pb={16}>
						<TextStyle variant='h4' color='--color-primary'>
							{title}
						</TextStyle>
						<Button
							variant={'ghost-icon-main-no-padding'}
							iconLeft='close'
							$borderRadius='round'
							onClick={onClose}
						/>
					</Box>
					{children}
				</S.Modal>
			</Box>
		</S.Overlay>
	);
};

export default Modal;
