import { toPx } from '@/utils/Utility';
import styled from 'styled-components';

export const Popover = styled.div<{
	width?: number;
	backgroundColor?: string;
	$borderColor?: string;
	padding?: string | number;
	$borderRadius?: string | number;
}>`
	position: absolute;
	z-index: 1000;
	background: var(
		${({ backgroundColor = '--color-neutral-light' }) => backgroundColor},
		--color-neutral-light
	);
	border: 1px solid
		var(
			${({ $borderColor = '--button-color-disabled-ghost-icon' }) => $borderColor},
			--button-color-disabled-ghost-icon
		);
	padding: ${({ padding = 12 }) => `${toPx(padding)}`};
	border-radius: ${({ $borderRadius = 12 }) => `${toPx($borderRadius)}`};
	z-index: 1000;
	width: ${({ width }) => (width ? `${toPx(width)}` : 'auto')};
	box-shadow:
		0px 16px 32px 0px rgba(76, 87, 101, 0.06),
		0px 8px 16px 0px rgba(76, 87, 101, 0.08),
		0px 4px 8px 0px rgba(76, 87, 101, 0.1),
		0px 2px 4px 0px rgba(76, 87, 101, 0.12),
		0px 0px 2px 0px rgba(76, 87, 101, 0.14);
`;
