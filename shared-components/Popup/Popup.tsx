import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import useCustomTranslation from '@/hooks/useCustomTranslation';
import { Box } from '@/shared-components/Box';
import { TextStyle } from '@/shared-components/TextStyle';
import { Button } from '@/shared-components/Button';
import { Icon } from '@/shared-components/Icon';
import { useActivityLog } from 'host/use-activity-log';
import { PopupProps } from './Popup.types';
import * as S from './Popup.styled';

const Popup: React.FC<PopupProps> = ({
	variant = 'confirm',
	title,
	description,
	popupName,
	primaryButtonLabel,
	primaryButtonAction,
	primaryButtonType = 'primary',
	secondaryButtonLabel,
	secondaryButtonAction,
	ghostButtonLabel,
	ghostButtonAction,
	...rest
}) => {
	const { t } = useCustomTranslation();
	const { actlogClosePopup } = useActivityLog();
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (title && description) setIsOpen(true);
	}, [title, description]);

	const closePopupAndWriteActlog = () => {
		if (popupName) {
			actlogClosePopup(popupName);
		}
		setIsOpen(false);
	};

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
		<S.Overlay className='ds-ui-Popup'>
			<S.Popup onClick={(e) => e.stopPropagation()} {...rest}>
				<Box gap={16}>
					{variant === 'error' && (
						<Icon icon={'alert_circle'} width={48} height={48} color='var(--color-error)' />
					)}
					<Box gap={8}>
						<TextStyle variant='h5' color='--color-primary'>
							{title}
						</TextStyle>
						<TextStyle variant='paragraphMedium' color='--color-neutral-grey-light'>
							{description}
						</TextStyle>
					</Box>
					<Box direction='row' $justifyContent='space-between'>
						<Box mt={8}>
							{ghostButtonLabel && (
								<Button
									fontWeight={'--font-weight-regular'}
									variant='ghost-primary-no-padding'
									onClick={() => {
										closePopupAndWriteActlog();
										if (ghostButtonAction) {
											ghostButtonAction();
										}
									}}
								>
									{ghostButtonLabel || t('popup_default_label_ghost_button')}
								</Button>
							)}
						</Box>
						<Box direction='row' gap={16}>
							{secondaryButtonLabel && (
								<Button
									fontWeight={'--font-weight-regular'}
									variant='secondary'
									onClick={() => {
										closePopupAndWriteActlog();
										if (secondaryButtonAction) {
											secondaryButtonAction();
										}
									}}
								>
									{secondaryButtonLabel || t('popup_default_label_secondary_button')}
								</Button>
							)}
							<Button
								fontWeight={'--font-weight-regular'}
								variant={primaryButtonType}
								onClick={() => {
									if (secondaryButtonLabel || ghostButtonLabel) {
										setIsOpen(false);
									} else {
										closePopupAndWriteActlog();
									}

									if (primaryButtonAction) {
										primaryButtonAction();
									}
								}}
							>
								{primaryButtonLabel || t('popup_default_label_primary_button')}
							</Button>
						</Box>
					</Box>
				</Box>
			</S.Popup>
		</S.Overlay>
	);
};

const containerId = 'popup-container';
const ensureContainer = () => {
	let container = document.getElementById(containerId);
	if (!container) {
		container = document.createElement('div');
		container.id = containerId;
		document.body.appendChild(container);
	}
	return container;
};

const baseShowPopup = (variant: 'confirm' | 'error', props: PopupProps) => {
	const container = ensureContainer();
	const div = document.createElement('div');
	container.appendChild(div);
	const root = createRoot(div);

	root.render(<Popup variant={variant} {...props} />);
};

const showPopup = Object.assign(baseShowPopup, {
	confirm: (props: PopupProps) => baseShowPopup('confirm', props),
	error: (props: PopupProps) => baseShowPopup('error', props)
});

export default showPopup;
