import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

export const Skeleton = styled.div`
	position: relative;
	z-index: 1;
	-webkit-box-flex: 0;
	-ms-flex: 0 0 auto;
	flex: 0 0 auto;
	background-color: var(--component-light-background-on-press);
	opacity: 1;
	overflow: hidden;
	height: 24px;
	width: 100%;
	border-radius: 8px;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background: var(--other-background-skeleton);
		animation: ${loading} 1.5s linear infinite;
	}
`;
