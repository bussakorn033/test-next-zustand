/**
 * @param variant - Pill variation
 * @param children - The content to be rendered inside the PillStatus.
 * @param isCircle - For Pill border radius
 */

export interface PillStatusProps {
	variant?:
		| 'default'
		| 'purple'
		| 'danger'
		| 'warning'
		| 'light-orange'
		| 'disabled'
		| 'information'
		| 'success'
		| 'primary';
	children?: string;
	isCircle?: boolean;
}
