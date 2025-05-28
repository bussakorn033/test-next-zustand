// write a typescript interface for the TextArea component

/**
 * TextArea component props.
 *
 * @param id - The unique identifier for the component.
 * @param value - The current value contained in the TextArea.
 * @param label - The text label displayed above the TextArea.
 * @param labelHelping - Supplementary text for the label (often displayed in a tooltip).
 * @param placeholder - The placeholder text shown when no value is entered.
 * @param type - The type of input.
 *                Valid options include: 'text', 'tel', 'number', 'amount', 'email', 'password', 'card-id', 'laser-card'.
 * @param keyboard - A hint for the type of keyboard to display on mobile devices.
 *                   Valid options include: 'none', 'text', 'numeric', 'decimal', 'tel', 'search', 'email', 'url'.
 * @param helpingText - Primary helper text shown below the TextArea.
 * @param errorMessage - An error message displayed when validation fails.
 * @param suffix - Text or element rendered at the end of the input field.
 * @param isError - Flag indicating whether the TextArea is in an error state.
 * @param isDisabled - Flag to disable user interaction with the TextArea.
 * @param maxLength - The maximum number of characters allowed.
 * @param onChange - Callback function to handle input changes.
 * @param variant - The styling variant applied to the TextArea.
 *                  Options include: 'amount', 'amount-transaction', 'search'.
 * @param className - Custom CSS class names.
 * @param helpingTextRight - Secondary helper text, typically displayed on the right.
 * @param iconLeft - React node to display as the left icon.
 * @param iconRight - React node to display as the right icon.
 * @param format - A format string for customizing the input value.
 * @param options - @deprecated Deprecated property for options.
 * @param zIndex - CSS z-index value to control stacking order.
 * @param width - The width of the TextArea.
 * @param marginBottom - The bottom margin of the TextArea.
 * @param isClearable - Flag used to show a clear button.
 * @param rows - The number of visible text lines in the TextArea (determines its height).
 * @param [key: string] - Additional custom properties.
 */

export interface TextAreaProps extends React.InputHTMLAttributes<HTMLInputElement> {
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
	isError?: boolean;
	isDisabled?: boolean;
	maxLength?: number;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	variant?: 'amount' | 'amount-transaction' | 'search';
	className?: string;
	helpingTextRight?: string;
	iconLeft?: React.ReactNode;
	iconRight?: React.ReactNode;
	format?: string;
	options?: string;
	zIndex?: number;
	width?: string | number;
	marginBottom?: string | number;
	isClearable?: boolean;
	rows?: number;
	[key: string]: any;
}
