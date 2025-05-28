import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Box } from '@/shared-components/Box';
import { Icon } from '@/shared-components/Icon';
import { TextStyle } from '@/shared-components/TextStyle';
import { ToastProps } from './Toast.types';
import * as S from './Toast.styled';

const Toast: React.FC<ToastProps> = ({ variant = 'info', message, duration = 5000 }) => {
	const [isVisible, setIsVisible] = useState(false);
	const [shouldRender, setShouldRender] = useState(true);

	useEffect(() => {
		const showTimer = setTimeout(() => setIsVisible(true), 10);
		const hideTimer = setTimeout(() => setIsVisible(false), duration);

		return () => {
			clearTimeout(showTimer);
			clearTimeout(hideTimer);
		};
	}, [duration]);

	// Wait for transition to complete before unmounting
	useEffect(() => {
		if (!isVisible) {
			const timeout = setTimeout(() => {
				setShouldRender(false);
			}, 400);
			return () => clearTimeout(timeout);
		}
	}, [isVisible]);

	if (!shouldRender) return null;

	const toastIcon = () => {
		switch (variant) {
			case 'success':
				return <Icon icon={'check_circle'} color={`--color-toast-${variant}`} />;
			case 'error':
				return <Icon icon={'alert_circle_bold'} color={`--color-toast-${variant}`} />;
			case 'warning':
				return <Icon icon={'info_circle'} color={`--color-toast-${variant}`} />;
			default:
				return <Icon icon={'info_circle'} color={`--color-toast-${variant}`} />;
		}
	};

	return (
		<S.ToastWrapper
			isVisible={isVisible}
			p={16}
			direction='row'
			justifyContent='space-between'
			isFullWidth
			width={480}
			bgColor={`--color-toast-bg-${variant}`}
			border='all'
			borderRadius='xsm'
			borderWidth={1}
			borderColor={`--color-toast-${variant}`}
			mb={8}
		>
			<Box direction='row' gap={16}>
				{toastIcon()}
				<TextStyle variant='paragraphMedium' color='--color-primary'>
					{message}
				</TextStyle>
			</Box>

			<TextStyle variant='labelMedium' color='--color-accent'>
				<Box isHover pr={24} onClick={() => setIsVisible(false)}>
					ปิด
				</Box>
			</TextStyle>
		</S.ToastWrapper>
	);
};

const containerId = 'toast-container';
const ensureContainer = () => {
	let container = document.getElementById(containerId);
	if (!container) {
		container = document.createElement('div');
		container.id = containerId;
		container.style.position = 'fixed';
		container.style.bottom = '24px';
		container.style.left = '50%';
		container.style.zIndex = '9999';
		document.body.appendChild(container);
	}
	return container;
};

const baseShowToast = (
	variant: 'error' | 'success' | 'warning' | 'info' | undefined,
	message: string
) => {
	const container = ensureContainer();
	const div = document.createElement('div');
	container.appendChild(div);
	const root = createRoot(div);

	root.render(<Toast variant={variant} message={message} />);
};

const showToast = Object.assign(baseShowToast, {
	success: (message: string) => baseShowToast('success', message),
	error: (message: string) => baseShowToast('error', message),
	info: (message: string) => baseShowToast('info', message),
	warning: (message: string) => baseShowToast('warning', message)
});

export default showToast;
