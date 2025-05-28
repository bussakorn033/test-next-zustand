import classNames from 'classnames';
import { forwardRef } from 'react';
import { TextStyle } from '../TextStyle';
import * as S from './Checkbox.styled';
import { CheckboxProps } from './Checkbox.types';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	(
		{
			className,
			name,
			isChecked,
			isDisabled,
			onChange,
			label,
			gap = 12,
			checkColor = '--color-primary',
			labelVariant = 'paragraphSmall',
			labelColor = '--color-primary',
			size = 16,
			...props
		},
		ref
	) => {
		const classnames = classNames(className, 'ds-ui-button');

		return (
			<S.CheckboxContainer
				className={classnames}
				direction='row'
				alignItems='center'
				gap={gap}
				position='relative'
			>
				<S.HiddenCheckbox
					name={name}
					checkColor={checkColor}
					isChecked={isChecked}
					isDisabled={isDisabled}
					disabled={isDisabled}
					onChange={(e) => (isDisabled ? e.preventDefault() : onChange?.(e))}
					ref={ref}
					size={size}
					{...props}
				/>
				<S.StyledCheckbox
					name={name}
					checkColor={checkColor}
					isChecked={isChecked}
					isDisabled={isDisabled}
					disabled={isDisabled}
					onChange={(e) => (isDisabled ? e.preventDefault() : onChange?.(e))}
					ref={ref}
					size={size}
					{...props}
				/>
				{label && (
					<TextStyle variant={labelVariant} color={labelColor}>
						{label}
					</TextStyle>
				)}
			</S.CheckboxContainer>
		);
	}
);

Checkbox.displayName = 'Checkbox';
export default Checkbox;
