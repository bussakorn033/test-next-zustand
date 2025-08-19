import { Box } from '@/shared-components/Box';
import { toPx } from '@/utils/Utility';
import styled, { css } from 'styled-components';

export const TooltipWrapper = styled.div`
	display: inline-block;
	position: relative;
	cursor: pointer;
`;

export const TooltipWrapperBox = styled.div<{ $isVisible: boolean }>`
	display: ${(props) => (props.$isVisible ? 'flex' : 'none')};
`;

export const TooltipBox = styled(Box)<{ $isVisible?: boolean }>`
	position: absolute;
	z-index: 1000;
	opacity: ${(props) => (props.$isVisible ? 1 : 0)};
	transition: opacity 0.2s ease-in-out;
	margin-top: 6px;
	background-color: var(--color-primary);
	display: inline-block;
	white-space: nowrap;

	${({ width }) =>
		width !== undefined &&
		css`
			width: ${toPx(width)};
		`}
	${({ $minWidth }) =>
		$minWidth !== undefined &&
		css`
			min-width: ${toPx($minWidth)};
		`}
	${({ $maxWidth }) =>
		$maxWidth !== undefined &&
		css`
			max-width: ${toPx($maxWidth)};
		`}
	${({ $borderRadius }) =>
		$borderRadius &&
		css`
			border-radius: var(--radius-${$borderRadius});
		`}
`;
