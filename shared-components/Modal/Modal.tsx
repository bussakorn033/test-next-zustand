import React, { useEffect } from 'react';
import { Box } from '@/shared-components/Box';
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
	isShowIconClose = true,
	$isOverflow = false,
	...rest
}) => {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}

		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [isOpen]);

	if (!isOpen) return null;

	return (
		<S.Overlay className='ds-ui-modal'>
			<Box mx={24} width={'fit-content'} $minWidth={'calc(100% - 48px)'}>
				<S.Modal
					className={className}
					width={width}
					height={height}
					onClick={(e) => e.stopPropagation()}
					$isOverflow={$isOverflow}
					{...rest}
				>
					<Box
						direction='row'
						$alignItems='center'
						$justifyContent='space-between'
						pt={24}
						pb={16}
						px={24}
					>
						<TextStyle variant='h4' color='--color-primary'>
							{title}
						</TextStyle>
						{isShowIconClose && (
							<Button
								data-testid='ICON_BTN_CLOSE_MODAL'
								variant={'ghost-icon-main-no-padding'}
								iconLeft='close'
								$borderRadius='round'
								onClick={onClose}
							/>
						)}
					</Box>
					{children}
				</S.Modal>
			</Box>
		</S.Overlay>
	);
};

export default Modal;
