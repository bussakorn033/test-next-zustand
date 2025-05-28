import styled from 'styled-components';
import { Box } from '@/shared-components/Box';

export const TooltipWrapper = styled.div`
	display: inline-block;
	position: relative;
	cursor: pointer;
`;

export const TooltipBox = styled(Box)<{ isVisible: boolean }>`
	visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
	position: absolute;
	z-index: 1000;
	opacity: ${(props) => (props.isVisible ? 1 : 0)};
	transition: opacity 0.2s ease-in-out;
	margin-top: 6px;
	background-color: var(--color-primary);
	display: inline-block;
	white-space: nowrap;
`;
