// write a typescript interface for the TextField component

/**
 * TextField component props
 *
 * @param id - ID of the component.
 * @param value - The current value of the input.
 * @param label - Label text displayed above the TextField.
 * @param labelHelping - Supplementary text for the label.
 * @param placeholder - Text shown when no value is entered.
 * @param type - Type of input (e.g., 'text', 'tel', 'number', 'amount', 'email', 'password', 'card-id', 'laser-card').
 * @param keyboard - Keyboard type hint for mobile devices.
 * @param helpingText - Primary helper text displayed below the input.
 * @param errorMessage - Error message shown on validation failure.
 * @param suffix - Text or element rendered at the end of the input.
 * @param error - Flag to indicate error state.
 * @param disabled - Flag to disable the input.
 * @param half - Flag to use a half-width layout.
 * @param maxLength - Maximum allowed length of the input.
 * @param onChange - Handler for input change events.
 * @param variant - Variant styling applied to the TextField (e.g., 'amount', 'amount-transaction', 'search').
 * @param className - Custom CSS classes.
 * @param helpingTextRight - Secondary helper text, typically aligned to the right.
 * @param focus - Auto-focus flag.
 * @param iconLeft - React node rendered as the left icon.
 * @param iconRight - React node rendered as the right icon.
 * @param iconTyping - Flag to display a typing indicator icon.
 * @param format - Format string for customizing the input value.
 * @param options - @deprecated Deprecated property for options.
 * @param zIndex - CSS z-index value.
 * @param width - Width of the TextField.
 * @param marginBottom - Bottom margin.
 * @param clearable - Flag to show a clear button.
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
  error?: boolean;
  disabled?: boolean;
  half?: boolean;
  maxLength?: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  variant?: 'amount' | 'amount-transaction' | 'search';
  className?: string;
  helpingTextRight?: string;
  focus?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  iconTyping?: boolean;
  format?: string;
  options?: string;
  zIndex?: number;
  width?: string | number;
  marginBottom?: string | number;
  clearable?: boolean;
  [key: string]: any;
}
