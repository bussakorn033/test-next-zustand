// write a typescript interface for the TextField component

/**
 * TextField component props.
 *
 * @param id - Unique identifier for the TextField.
 * @param value - The current value of the input.
 * @param label - Label text displayed above the TextField.
 * @param labelHelping - Supplementary text for the label, often shown as a tooltip.
 * @param placeholder - Text displayed when no value is entered.
 * @param type - The type of input. Valid options: 'text', 'tel', 'number', 'amount', 'email', 'password', 'card-id', 'laser-card'.
 * @param keyboard - Type hint for the mobile keyboard. Valid options: 'none', 'text', 'numeric', 'decimal', 'tel', 'search', 'email', 'url'.
 * @param helpingText - Primary helper text displayed below the input.
 * @param errorMessage - Error message shown when validation fails.
 * @param suffix - Additional text or element rendered at the end of the input.
 * @param $isError - Flag indicating whether the TextField is in an error state.
 * @param $isDisabled - Flag to disable the TextField.
 * @param max - Maximum allowed value (if applicable).
 * @param maxLength - Maximum allowed length of the input.
 * @param min - Minimum allowed value (if applicable).
 * @param minLength - Minimum required length of the input.
 * @param onChange - Event handler for input changes.
 * @param variant - Visual variant for styling the TextField. Valid options: 'amount', 'amount-transaction', 'search'.
 * @param className - Custom CSS class names.
 * @param helpingTextRight - Secondary helper text displayed on the right side.
 * @param iconLeft - React node rendered as the left icon.
 * @param iconRight - React node rendered as the right icon.
 * @param format - Format string to customize the displayed value.
 * @param options - @deprecated Deprecated property for additional options.
 * @param $zIndex - CSS z-index value for stacking context.
 * @param width - The width of the TextField.
 * @param $marginBottom - The bottom margin of the TextField.
 * @param $isClearable - Flag to display a clear button for the input.
 * @param [key: string] - Additional custom properties.
 */

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
	id?: string;
	value?: string | number;
	label?: string;
	labelHelping?: string;
	placeholder?: string;
	type?: 'text' | 'tel' | 'number' | 'amount' | 'email' | 'password' | 'card-id' | 'laser-card';
	keyboard?: 'none' | 'text' | 'numeric' | 'decimal' | 'tel' | 'search' | 'email' | 'url';
	helpingText?: string;
	errorMessage?: string;
	suffix?: string;
	$isError?: boolean;
	$isDisabled?: boolean;
	max?: number | string | undefined;
	maxLength?: number | undefined;
	min?: number | string | undefined;
	minLength?: number | undefined;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	variant?: 'amount' | 'amount-transaction' | 'search';
	className?: string;
	helpingTextRight?: string;
	iconLeft?: React.ReactNode;
	iconRight?: React.ReactNode;
	format?: string;
	options?: string;
	$zIndex?: number;
	width?: string | number;
	$marginBottom?: string | number;
	$isClearable?: boolean;
	[key: string]: any;
}
