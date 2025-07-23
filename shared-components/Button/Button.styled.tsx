import styled, { css } from 'styled-components';
import { ButtonProps } from './Button.types';
import { Box } from '../Box';
import { toPx } from '@/utils/Utility';
import { b } from 'vitest/dist/chunks/suite.d.FvehnV49';

interface StyledButtonProps extends ButtonProps {
	$isIconOnly?: boolean;
}

export const StyledButton = styled(Box)<StyledButtonProps>`
	/* Base styles */
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;

	&:disabled *,
	&:disabled,
	&:disabled > * {
		cursor: default !important;
	}

	/* Variants */
	${({ variant }) => {
		switch (variant) {
			case 'negative':
				return css`
					background: var(--button-negative);
					&,
					* {
						color: var(--text-primary-light);
					}
					&:hover {
						background: var(--button-hover-negative);
					}
					&:active {
						background: var(--button-active-negative);
					}
					&:disabled *,
					&:disabled {
						background: var(--button-disabled-negative);
						color: var(--button-color-disabled-negative) !important;
					}
				`;
			case 'secondary':
				return css`
					box-sizing: border-box;
					background: var(--button-secondary);
					outline: 1px solid var(--button-border-secondary);
					&,
					* {
						color: var(--button-color-secondary);
					}
					&:hover {
						background: var(--button-hover-secondary);
					}
					&:active {
						background: var(--button-active-secondary);
						border: 1px solid var(--button-border-secondary);
					}
					&:disabled *,
					&:disabled {
						background: var(--button-disabled-secondary) !important;
						color: var(--button-color-disabled-secondary) !important;
						outline: none;
					}
					&:focus,
					&:focus-within,
					&:focus-visible {
						outline: 3px solid var(--button-focus-secondary);
						border: 1px solid var(--button-border-secondary);
					}
				`;
			case 'secondary-negative':
				return css`
					box-sizing: border-box;
					background: var(--button-secondary-negative);
					outline: 1px solid var(--button-border-secondary-negative);
					&,
					* {
						color: var(--button-color-secondary-negative);
					}
					&:hover {
						background: var(--button-hover-secondary-negative);
					}
					&:active {
						background: var(--button-active-secondary-negative);
						border: 1px solid var(--button-border-secondary-negative);
					}
					&:disabled *,
					&:disabled {
						background: var(--button-disabled-secondary-negative) !important;
						color: var(--button-color-disabled-secondary-negative) !important;
						outline: none;
					}
					&:focus,
					&:focus-within,
					&:focus-visible {
						outline: 3px solid var(--button-focus-secondary-negative);
						border: 1px solid var(--button-border-secondary-negative);
					}
				`;
			case 'ghost-main':
			case 'ghost-primary':
			case 'ghost-secondary':
			case 'ghost-negative':
			case 'ghost-main-no-padding':
			case 'ghost-primary-no-padding':
			case 'ghost-secondary-no-padding':
			case 'ghost-negative-no-padding':
			case 'ghost-icon-main':
			case 'ghost-icon-primary':
			case 'ghost-icon-secondary':
			case 'ghost-icon-negative':
			case 'ghost-icon-main-no-padding':
			case 'ghost-icon-primary-no-padding':
			case 'ghost-icon-secondary-no-padding':
			case 'ghost-icon-negative-no-padding':
				return css`
					overflow: hidden;

					padding: ${variant.includes('-no-padding') ? 'var(--button-padding-none)' : ''} !important;
					border-radius: ${variant.includes('-icon') ? 'var(--radius-circle)' : ''} !important;
					box-sizing: border-box;
					background: var(--button-${variant.replaceAll('-icon', '').replaceAll('-no-padding', '')});
					&,
					* {
						color: var(--button-color-${variant.replaceAll('-icon', '').replaceAll('-no-padding', '')});
					}
					&:hover {
						&,
						* {
							color: var(
								--button-hover-${variant.replaceAll('-icon', '').replaceAll('-no-padding', '')}
							) !important;
							fill: var(
								--button-hover-${variant.replaceAll('-icon', '').replaceAll('-no-padding', '')}
							) !important;
						}
					}
					&:active {
						&,
						* {
							color: var(
								--button-active-${variant.replaceAll('-icon', '').replaceAll('-no-padding', '')}
							) !important;
							fill: var(
								--button-active-${variant.replaceAll('-icon', '').replaceAll('-no-padding', '')}
							) !important;
						}
					}
					&:disabled *,
					&:disabled {
						outline: none;
						&,
						* {
							color: var(
								--button-color-disabled-${variant.replaceAll('-icon', '').replaceAll('-no-padding', '')}
							) !important;
							fill: var(
								--button-color-disabled-${variant.replaceAll('-icon', '').replaceAll('-no-padding', '')}
							) !important;
						}
					}
				`;
			default: /* primary */
				return css`
					padding: ${variant?.includes('-no-padding') ? 'var(--button-padding-none)' : ''} !important;
					box-sizing: border-box;
					background: var(--button-${variant}, --button-primary);
					&,
					* {
						color: var(--button-color-${variant}, --color-neutral-light);
					}

					&:hover {
						background: var(--button-hover-primary);
					}
					&:active {
						background: var(--button-active-primary);
					}
					&:disabled *,
					&:disabled {
						background: var(--button-disabled-primary);
						color: var(--button-color-disabled-primary) !important;
					}
				`;
		}
	}}

	${({ size, $isIconOnly }) => {
		switch (size) {
			case 'large':
				return css`
					padding: ${$isIconOnly ? 'var(--button-padding-icon)' : 'var(--button-padding-large)'};
					gap: 8px;
				`;
			default:
				return css`
					padding: ${$isIconOnly ? 'var(--button-padding-icon)' : 'var(--button-padding-base)'};
					gap: 8px;
				`;
		}
	}}

	${({ $borderRadius }) =>
		$borderRadius !== undefined &&
		css`
			border-radius: var(--radius-${$borderRadius}) !important;
		`}

  ${({ width }) => {
		return width
			? css`
					width: ${width === 'full' ? '100%' : 'fit-content'};
				`
			: '';
	}}

  ${({ disabled }) => {
		return disabled
			? css`
					cursor: default;
					pointer-events: none;
					&:hover > *,
					&:hover * {
						cursor: default;
					}
				`
			: '';
	}}

  ${({ flex }) =>
		flex !== undefined &&
		css`
			flex: ${flex};
		`}
  ${({ $flexWrap }) =>
		$flexWrap !== undefined &&
		css`
			flex-wrap: ${$flexWrap};
		`}

  ${({ $flexWrap }) =>
		$flexWrap !== undefined &&
		css`
			flex-wrap: ${$flexWrap};
		`}

  ${({ p }) =>
		p !== undefined &&
		css`
			padding: ${toPx(p)} !important;
		`}
  ${({ px }) =>
		px !== undefined &&
		css`
			padding-left: ${toPx(px)} !important;
			padding-right: ${toPx(px)} !important;
		`}
  ${({ py }) =>
		py !== undefined &&
		css`
			padding-top: ${toPx(py)} !important;
			padding-bottom: ${toPx(py)} !important;
		`}
  ${({ pt }) =>
		pt !== undefined &&
		css`
			padding-top: ${toPx(pt)} !important;
		`}
  ${({ pb }) =>
		pb !== undefined &&
		css`
			padding-bottom: ${toPx(pb)} !important;
		`}
  ${({ pr }) =>
		pr !== undefined &&
		css`
			padding-right: ${toPx(pr)} !important;
		`}
  ${({ pl }) =>
		pl !== undefined &&
		css`
			padding-left: ${toPx(pl)} !important;
		`}
  ${({ fontWeight }) =>
		fontWeight !== undefined &&
		css`
			&,
			> * {
				font-weight: var(${fontWeight}) !important;
			}
		`}
`;
