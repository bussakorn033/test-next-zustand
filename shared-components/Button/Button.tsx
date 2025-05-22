import classNames from 'classnames';
import { TextStyle } from '../TextStyle';
import * as S from './Button.styled';
import { ButtonProps } from './Button.types';
import Icon from '../Icon/Icon';

export const Button = ({
	variant = 'primary',
	size = 'medium',
	sizeIcon = null,
	colorIcon = null,
	width = 'normal',
	borderRadius = 'normal',
	iconLeft,
	iconRight,
	disabled,
	className,
	children,
	...rest
}: ButtonProps) => {
	const classnames = classNames(className, 'ds-ui-button');

	const icon = iconRight ?? iconLeft;
	const isIconOnly = Boolean(icon && !children);
	const sizeIconLast = sizeIcon ? sizeIcon : size === 'large' ? 32 : 24;
	const colorIconLast = colorIcon ? colorIcon : variant === 'primary' ? '--color-neutral-light' : '';

	const textStyleVariant: 'buttonMedium' | 'buttonBig' = {
		medium: 'buttonMedium',
		large: 'buttonBig'
	}[size] as 'buttonMedium' | 'buttonBig';

	return (
		<S.StyledButton
			tag='button'
			role='button'
			direction={iconRight ? 'row-reverse' : 'row'}
			alignItems='center'
			variant={variant}
			size={size}
			width={width}
			borderRadius={borderRadius}
			disabled={disabled}
			isIconOnly={isIconOnly}
			justifyContent='center'
			className={classnames}
			{...rest}
		>
			{icon && <Icon width={sizeIconLast} height={sizeIconLast} icon={icon} color={colorIconLast} />}
			{children && <TextStyle variant={textStyleVariant}>{children}</TextStyle>}
			{iconLeft && iconRight && (
				<Icon width={sizeIconLast} height={sizeIconLast} icon={iconLeft} color={colorIconLast} />
			)}
		</S.StyledButton>
	);
};

export default Button;
