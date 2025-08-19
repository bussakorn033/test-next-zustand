import { Box } from '@/shared-components/Box';
import styled, { css } from 'styled-components';

export const FloatButton = styled(Box)<{ float: string }>`
	position: absolute;
	bottom: 24px;
	background-color: var(--color-accent-transparent);
	border-radius: 8px;
	padding: 8px;
	z-index: 1000;
	align-items: center;

	${({ float }) =>
		float === 'left'
			? css`
					left: 24px;
				`
			: css`
					right: 24px;
				`};
`;
