import { TextFieldProps } from './TextField.types';
import { forwardRef, useEffect } from 'react';
import classNames from 'classnames';
import * as S from './TextField.styled';
import { TextStyle } from '../TextStyle';
import Icon from '../Icon/Icon';
import { Box } from '../Box';
import { Tooltip } from '../Tooltip';

export const TextField = forwardRef<undefined | any, TextFieldProps>(
	(
		{
			id,
			label,
			labelHelping,
			value,
			type,
			variant,
			suffix,
			error,
			$isDisabled,
			helpingText,
			helpingTextRight,
			errorMessage,
			half,
			iconLeft,
			iconRight,
			keyboard,
			className,
			onChange,
			max,
			maxLength,
			min,
			minLength,
			$isClearable,
			...rest
		}: TextFieldProps,
		ref
	) => {
		const classnames = classNames(className, 'ds-text-field');

		const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
			let newValue = event.target.value;
			if (maxLength && newValue.length > Number(maxLength)) {
				newValue = newValue.slice(0, maxLength);
				event.target.value = newValue;
			}
			let pattern: any = rest?.pattern;
			if (type === 'number' && !pattern) {
				pattern = /^\d*$/;
			}

			const patternRegex = pattern && new RegExp(pattern);
			if (!pattern || (patternRegex && patternRegex.test(newValue))) {
				if (onChange) {
					onChange(event);
				}
			}
		};

		const onKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
			if (event.key === 'Enter' || event.keyCode === 13) {
				event.preventDefault();
				if (onChange) {
					onChange({
						target: { name: rest?.name, value: event.currentTarget.value }
					} as React.ChangeEvent<HTMLInputElement>);
				}
			}
		};

		const onKeyUpHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
			if (event.key === 'Enter' || event.keyCode === 13) {
				event.preventDefault();
				if (onChange) {
					onChange({
						target: { name: rest?.name, value: event.currentTarget.value }
					} as React.ChangeEvent<HTMLInputElement>);
				}
			}
		};

		const onKeyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
			if (event.key === 'Enter' || event.keyCode === 13) {
				event.preventDefault();
				if (onChange) {
					onChange({
						target: { name: rest?.name, value: event.currentTarget.value }
					} as React.ChangeEvent<HTMLInputElement>);
				}
			}
		};

		const onFocusHandler = (event: React.FocusEvent<HTMLInputElement>) => {
			if (event.target) {
				event.target.select();
			}
			if (onChange) {
				onChange({
					target: { name: rest?.name, value: event.currentTarget.value }
				} as React.ChangeEvent<HTMLInputElement>);
			}
		};

		const onBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
			if (onChange) {
				onChange({
					target: { name: rest?.name, value: event.currentTarget.value.trim() }
				} as React.ChangeEvent<HTMLInputElement>);
			}
		};

		const onClickHandler = (event: React.MouseEvent<HTMLInputElement>) => {
			if (onChange) {
				onChange({
					target: { name: rest?.name, value: event.currentTarget.value }
				} as React.ChangeEvent<HTMLInputElement>);
			}
		};

		const onMouseDownHandler = (event: React.MouseEvent<HTMLInputElement>) => {
			if (event.currentTarget) {
				event.currentTarget.select();
			}
			if (onChange) {
				onChange({
					target: { name: rest?.name, value: event.currentTarget.value }
				} as React.ChangeEvent<HTMLInputElement>);
			}
		};

		const onMouseUpHandler = (event: React.MouseEvent<HTMLInputElement>) => {
			if (event.currentTarget) {
				event.currentTarget.select();
			}
			if (onChange) {
				onChange({
					target: { name: rest?.name, value: event.currentTarget.value }
				} as React.ChangeEvent<HTMLInputElement>);
			}
		};

		useEffect(() => {
			/*  Fix bug in Chrome mobile: ensure blur on "Done" keyboard press */
			const inputElement = document.querySelector(`[id="${id}"]`);
			if (inputElement) {
				const handleBlur = (event: any) => {
					event.target.blur();
				};
				inputElement.addEventListener('blur', handleBlur);

				return () => {
					inputElement.removeEventListener('blur', handleBlur);
				};
			}
		}, [id]);

		return (
			<S.TextFieldWrapper
				className={classnames}
				disabled={$isDisabled}
				value={value}
				$isClearable={$isClearable}
				{...rest}
			>
				{(label || labelHelping) && (
					<>
						<Box direction='row' $alignItems='center' gap={6}>
							<TextStyle variant='labelXSmall' color='--color-secondary'>
								{label}
							</TextStyle>
							{labelHelping && (
								<Tooltip content={labelHelping}>
									<Icon icon='help_circle_fill' width={12} height={12} color='--color-secondary' />
								</Tooltip>
							)}
						</Box>
					</>
				)}

				<S.InputWrapper $isError={error}>
					{iconLeft && <S.Icon>{iconLeft}</S.Icon>}
					<TextStyle variant='valueSmall' color='--text-primary-dark' $alignContent='center' flex={1}>
						<S.Input
							{...rest}
							id={id}
							data-testid={id}
							disabled={$isDisabled}
							value={value}
							type={type === 'number' ? 'text' : type}
							pattern={rest?.pattern}
							$isClearable={$isClearable}
							max={max}
							maxLength={maxLength}
							min={min}
							minLength={minLength}
							onChange={onChangeHandler}
							onKeyDown={onKeyDownHandler}
							onKeyUp={onKeyUpHandler}
							onKeyPress={onKeyPressHandler}
							onFocus={onFocusHandler}
							onBlur={onBlurHandler}
							onClick={onClickHandler}
							onMouseDown={onMouseDownHandler}
							onMouseUp={onMouseUpHandler}
						/>
					</TextStyle>
					{$isClearable && value && !$isDisabled && (
						<S.ClearButton
							type='button'
							name={rest?.name}
							onClick={() => {
								if (onChange) {
									onChange({
										target: { name: rest?.name, value: '' }
									} as React.ChangeEvent<HTMLInputElement>);
								}
							}}
						>
							<Icon icon='cancel_circle_fill' width={20} height={20} color='--color-neutral-dark' />
						</S.ClearButton>
					)}
					{iconRight && <S.Icon>{iconRight}</S.Icon>}
				</S.InputWrapper>
				{helpingText && (
					<S.HelpingText $isError={error}>
						<TextStyle variant='paragraphSmall'>{helpingText}</TextStyle>
					</S.HelpingText>
				)}
			</S.TextFieldWrapper>
		);
	}
);

TextField.displayName = 'TextField';

export default TextField;
