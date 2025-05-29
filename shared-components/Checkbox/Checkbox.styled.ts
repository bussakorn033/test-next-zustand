import styled, { css } from 'styled-components';
import { Box } from '../Box';
import { CheckboxProps } from './Checkbox.types';
import { toPx } from '../../utils/Utility';

export const HiddenCheckbox = styled.input.attrs<CheckboxProps>({
	type: 'checkbox'
})`
	cursor: ${({ $isDisabled }) => ($isDisabled ? 'default' : 'pointer')};
	width: ${({ size }) => (size ? `${toPx(size)}` : '16px')};
	height: ${({ size }) => (size ? `${toPx(size)}` : '16px')};
	margin: -1px;
	padding: 0;
	position: absolute;
	z-index: 1;
	opacity: 0;
	white-space: nowrap;
`;

export const StyledCheckbox = styled(Box)<CheckboxProps>`
	cursor: ${({ $isDisabled }) => ($isDisabled ? 'default' : 'pointer')};
	position: relative;
	z-index: 0;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	width: ${({ size }) => (size ? `${toPx(size)}` : '16px')};
	height: ${({ size }) => (size ? `${toPx(size)}` : '16px')};
	background-color: ${({ $isChecked, $checkColor }) =>
		`var(${
			$isChecked && $checkColor ? $checkColor : $isChecked ? '--color-primary' : '--color-neutral-light'
		})`};
	border: ${({ $checkColor }) => `2px solid var(${$checkColor ? $checkColor : '--color-primary'})`};
	border-radius: 4px;
	transition:
		background-color 0.25s,
		border-color 0.25s;

	${({ $isDisabled }) =>
		$isDisabled &&
		css`
			background-color: var(--color-disabled-bg-checkbox);
			border-color: var(--color-disabled-border-checkbox);
			cursor: not-allowed;
		`}

	${({ $isChecked, $isDisabled, size }) =>
		$isChecked &&
		css`
			background-color: var(${$isDisabled ? '--color-disabled-border-checkbox' : '--color-accent'});
			border-color: var(${$isDisabled ? '--color-disabled-border-checkbox' : '--color-accent'});

			&::after {
				content: '\\2713';
				font-size: ${size ? `${toPx(size * 0.75)}` : '12px'};
				font-weight: var(--font-weight-bold);
				color: white;
			}
		`}
`;

export const CheckboxContainer = styled(Box)`
	cursor: default;
`;
