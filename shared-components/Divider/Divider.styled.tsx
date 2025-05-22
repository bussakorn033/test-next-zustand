import styled, { css } from 'styled-components';
import { DividerProps } from './Divider.types';

export const Divider = styled.hr<DividerProps>`
	display: block;
	border: 0px;
	border-style: solid;
	margin-left: 8px;
	margin-right: 8px;

	${(props) =>
		props.orientation === 'horizontal'
			? css`
					border-top-width: ${props.weight}px;
					margin-top: 0;
					margin-bottom: 0;
					border-color: var(--${props.color || 'color-border-light'});
					width: 100%;
				`
			: css`
					border: none;
					min-height: 16px;
					height: auto;
					width: ${props.weight}px;
					border-top-width: 1px;
					margin-top: 16px;
					margin-bottom: 16px;
					background: var(--${props.color || 'color-border-light'});
				`}
`;
