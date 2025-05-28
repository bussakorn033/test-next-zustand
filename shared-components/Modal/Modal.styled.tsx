import { toPx } from '@/utils/Utility';
import styled, { css } from 'styled-components';

export const Modal = styled.div<{
	m?: string | number;
	width?: string | number;
	minWidth?: string | number;
	maxWidth?: string | number;
	height?: string | number;
	minHeight?: string | number;
	maxHeight?: string | number;
}>`
	background: #fff;
	box-sizing: border-box;
	padding: 24px;
	margin: 24px;
	border-radius: 8px;
	max-width: 100%;
	position: relative;
	box-shadow:
		0px 16px 32px 0px #4c57650f,
		0px 8px 16px 0px #4c576514,
		0px 4px 8px 0px #4c57651a,
		0px 2px 4px 0px #4c57651f,
		0px 0px 2px 0px #4c576524;

	overflow: auto;

	${({ m }) =>
		m !== undefined &&
		css`
			m: ${toPx(m)};
		`}
	${({ height }) =>
		height !== undefined &&
		css`
			height: ${toPx(height) || '500px'};
		`}
	${({ minHeight }) =>
		minHeight !== undefined &&
		css`
			min-height: ${toPx(minHeight) || 'unset'};
		`}
	${({ maxHeight }) =>
		maxHeight !== undefined &&
		css`
			max-height: ${toPx(maxHeight) || 'unset'};
		`}
	${({ width }) =>
		width !== undefined &&
		css`
			width: ${toPx(width) || '500px'};
		`}
	${({ minWidth }) =>
		minWidth !== undefined &&
		css`
			min-width: ${toPx(minWidth) || 'unset'};
		`}
	${({ maxWidth }) =>
		maxWidth !== undefined &&
		css`
			max-width: ${toPx(maxWidth) || 'unset'};
		`}
`;

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.4);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 999;
`;

export const CloseButton = styled.div`
	cursor: pointer;
`;
