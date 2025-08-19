import styled from 'styled-components';
import { Box } from '@/shared-components/Box';

// Styled component for .loading
export const LoadingBox = styled(Box)`
	z-index: var(--z-index-90);
	border-radius: 24px;
	background-color: #ffffff;
	width: 80px;
	height: 80px;
	border-radius: 16px;
	border: 1px solid #dfe6ec;
	box-shadow:
		0px 4px 0px 0px #4c57650f,
		0px 2px 0px 0px #0000000a;

	&.loading--skeleton {
		position: unset;
		overflow: unset;
		text-align: unset;
		z-index: unset;
		width: unset;
		height: unset;
		margin: unset;
	}
`;

// Styled component for .loading__player
export const LoadingPlayer = styled(Box)`
	width: 32px;
	height: 32px;
	overflow: hidden;

	path {
		transform: scale(1.4);
	}
`;

export const Overlay = styled.div`
	overflow-x: auto;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.4);
	z-index: 999;
	align-content: center;
	justify-items: center;
`;
